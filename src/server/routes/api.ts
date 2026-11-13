import { Hono } from 'hono';
import { redis, reddit } from '@devvit/web/server';
import type {
  DailyResponse,
  LeaderboardResponse,
  SubmitRequest,
  SubmitResponse,
} from '../../shared/api';
import { buildOptions, getDailyPuzzleIndices, PUZZLES } from '../../shared/puzzles';

export const api = new Hono();

function todayKey(): string {
  return new Date().toISOString().slice(0, 10); // UTC YYYY-MM-DD
}

function yesterdayKey(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

// GET /api/daily — today's 5 rounds (answers withheld) + user state
api.get('/daily', async (c) => {
  const username = await reddit.getCurrentUsername();
  const dateKey = todayKey();
  const indices = getDailyPuzzleIndices(dateKey, 5);

  const rounds = indices.map((idx) => {
    const p = PUZZLES[idx]!;
    return {
      emojiClue: p.emojiClue,
      descClue: p.descClue,
      hint: p.hint,
      options: buildOptions(p),
    };
  });

  let streak = 0;
  let best = 0;
  let alreadyPlayed = false;
  try {
    const [streakVal, bestVal, playedVal] = await Promise.all([
      username ? redis.get(`streak:${username}`) : Promise.resolve(undefined),
      username ? redis.get(`best:${username}`) : Promise.resolve(undefined),
      username ? redis.get(`played:${username}:${dateKey}`) : Promise.resolve(undefined),
    ]);
    streak = streakVal ? parseInt(streakVal) : 0;
    best = bestVal ? parseInt(bestVal) : 0;
    alreadyPlayed = playedVal === '1';
  } catch (e) {
    console.error('daily: redis read failed', e);
  }

  return c.json<DailyResponse>({
    type: 'daily',
    username: username ?? 'anonymous',
    dateKey,
    rounds,
    alreadyPlayed,
    streak,
    best,
  });
});

// POST /api/submit — grade picks, update streaks + leaderboard
api.post('/submit', async (c) => {
  const body = (await c.req.json<SubmitRequest>()) as SubmitRequest;
  const { postId } = body;
  const username = await reddit.getCurrentUsername();
  const uname = username ?? 'anonymous';
  const dateKey = todayKey();

  const indices = getDailyPuzzleIndices(dateKey, 5);
  const picks = body.picks ?? [];

  const results = indices.map((idx, i) => {
    const p = PUZZLES[idx]!;
    const picked = typeof picks[i] === 'string' ? (picks[i] as string) : null;
    return {
      picked,
      correct: picked === p.answer,
      answer: p.answer,
      emojiClue: p.emojiClue,
      descClue: p.descClue,
    };
  });

  const score = results.filter((r) => r.correct).length;

  // streak: consecutive days with at least 1 correct
  let streak = 0;
  try {
    const playedKey = `played:${uname}:${dateKey}`;
    const alreadyPlayed = (await redis.get(playedKey)) === '1';
    const lastDay = await redis.get(`lastday:${uname}`);
    const prevStreak = parseInt((await redis.get(`streak:${uname}`)) ?? '0');

    if (!alreadyPlayed) {
      streak = lastDay === yesterdayKey() ? prevStreak + 1 : 1;
      await Promise.all([
        redis.set(playedKey, '1'),
        redis.set(`lastday:${uname}`, dateKey),
        redis.set(`streak:${uname}`, String(streak)),
      ]);
    } else {
      streak = Math.max(prevStreak, 1);
    }

    if (score > 0) {
      const lbKey = `lb:${postId ?? 'global'}`;
      await redis.zAdd(lbKey, { member: uname, score });
      await redis.expire(lbKey, 60 * 60 * 48); // 48h
    }

    const bestVal = parseInt((await redis.get(`best:${uname}`)) ?? '0');
    const isNewBest = score > bestVal;
    if (isNewBest) {
      await redis.set(`best:${uname}`, String(score));
    }

    return c.json<SubmitResponse>({
      type: 'submit',
      results,
      score,
      streak,
      isNewBest,
      best: Math.max(bestVal, score),
    });
  } catch (e) {
    console.error('submit: redis failed', e);
    return c.json<SubmitResponse>({
      type: 'submit',
      results,
      score,
      streak,
      isNewBest: false,
      best: score,
    });
  }
});

// GET /api/leaderboard?postId=... — top 10 for this post
api.get('/leaderboard', async (c) => {
  const postId = c.req.query('postId') ?? 'global';
  try {
    const members = await redis.zRange(`lb:${postId}`, 0, 9, { reverse: true, by: 'rank' });
    const entries = members.map((m) => ({ username: m.member, score: m.score }));
    return c.json<LeaderboardResponse>({ type: 'leaderboard', entries });
  } catch (e) {
    console.error('leaderboard failed', e);
    return c.json<LeaderboardResponse>({ type: 'leaderboard', entries: [] });
  }
});
