# 🧭 Sub Sleuth — Daily Subreddit Mystery

**5 subreddit mysteries per day. Clues, picks and bragging rights.**

A daily guessing game for Reddit: every day, 5 mysterious subreddits appear — each with an emoji clue and a one-line description. Pick the right community from 4 options, build your streak, and share your emoji grid in the comments like it's Wordle night.

▶ **Play the latest playtest:** https://www.reddit.com/r/sub_sleuth_daily_dev/?playtest=sub-sleuth-daily

## How to play
1. Open the daily post — 5 rounds appear.
2. Read the emoji clue + description ("A snail on a fence. A double yolk. Mildness is the point").
3. Pick the subreddit from 4 options (need a hint? every round has one).
4. Get your score, streak and a shareable emoji grid (🟩🟩🟥🟩🟩) to paste in the comments.

## Why it's built for the Game of the Day
- **Daily Content** — deterministic daily selection from a curated 56-round bank; a fresh set every UTC day.
- **Reddity** — the entire game IS Reddit culture: guessing the communities everyone knows.
- **Delightful UX** — instant tap feedback, hints, streaks, best-score tracking.
- **Polish** — server-side scoring (answers never leave the server), per-user streaks in Redis, per-post leaderboards.

## Built with Devvit
- **Devvit Web** (React client + Node server on Reddit's developer platform)
- Redis for streaks, best scores, daily-played flags and per-post leaderboards
- Reddit API for usernames — no extra login
- Answers are graded **server-side only** — the client never sees them

## Structure
- `src/shared/puzzles.ts` — puzzle bank + deterministic daily picker
- `src/server/routes/api.ts` — `/daily`, `/submit`, `/leaderboard`
- `src/client/game.tsx` — the game UI

## Run it
```bash
npm install
npm run dev     # playtest in your dev subreddit
npm run deploy  # upload to the Reddit app store
```

---

Entry for **Reddit's Game of the Day Hackathon** · by u/dualwarez
