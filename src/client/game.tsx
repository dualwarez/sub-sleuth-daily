import './index.css';

import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { DailyResponse, SubmitResponse } from '../shared/api';

type Phase = 'loading' | 'playing' | 'graded';

type Pick = string | null;

const App = () => {
  const [phase, setPhase] = useState<Phase>('loading');
  const [daily, setDaily] = useState<DailyResponse | null>(null);
  const [round, setRound] = useState(0);
  const [picks, setPicks] = useState<Pick[]>([]);
  const [revealed, setRevealed] = useState<SubmitResponse | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch('/api/daily')
      .then((r) => r.json())
      .then((d: DailyResponse) => {
        setDaily(d);
        setPhase('playing');
      })
      .catch(() => setError('Could not load today\u2019s puzzles. Reload to try again.'));
  }, []);

  const rounds = daily?.rounds ?? [];
  const current = rounds[round];
  const isLast = round === rounds.length - 1;

  const pick = async (option: string) => {
    if (picks[round] !== undefined && picks[round] !== null) return;
    const next = [...picks];
    next[round] = option;
    setPicks(next);
    if (!isLast) {
      setTimeout(() => {
        setRound(round + 1);
        setShowHint(false);
      }, 650);
    }
  };

  const finish = async () => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: '', picks }),
      });
      const data: SubmitResponse = await res.json();
      setRevealed(data);
      setPhase('graded');
    } catch {
      setError('Submission failed. Check your connection and retry.');
    } finally {
      setSubmitting(false);
    }
  };

  const shareText = () => {
    if (!revealed) return '';
    const grid = revealed.results.map((r) => (r.correct ? '\u{1F7E9}' : '\u{1F7E5}')).join('');
    return `Sub Sleuth ${daily?.dateKey ?? ''} ${grid} ${revealed.score}/5\nCan you guess today's subreddits?`;
  };

  const copyShare = async () => {
    try {
      await navigator.clipboard.writeText(shareText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  if (error) {
    return (
      <div className="ss-wrap">
        <div className="ss-card">
          <h1 className="ss-title">🧭 Sub Sleuth</h1>
          <p className="ss-err">{error}</p>
        </div>
      </div>
    );
  }

  if (phase === 'loading') {
    return (
      <div className="ss-wrap">
        <div className="ss-card ss-center">
          <div className="ss-loader" />
          <p className="ss-dim">Preparing today's mysteries…</p>
        </div>
      </div>
    );
  }

  if (phase === 'graded' && revealed) {
    const grid = revealed.results.map((r) => (r.correct ? '🟩' : '🟥')).join('');
    return (
      <div className="ss-wrap">
        <div className="ss-card">
          <h1 className="ss-title">🧭 Sub Sleuth</h1>
          <p className="ss-dim">{daily?.dateKey} · daily subreddit mystery</p>
          <div className="ss-score-row">
            <div className="ss-score-big">
              {revealed.score}
              <span className="ss-score-max">/5</span>
            </div>
            <div className="ss-badges">
              <span className="ss-badge">🔥 {revealed.streak} day streak</span>
              {revealed.isNewBest && <span className="ss-badge ss-gold">★ new best!</span>}
              {!revealed.isNewBest && <span className="ss-badge">best {revealed.best}/5</span>}
            </div>
          </div>
          <div className="ss-grid">{grid}</div>

          <div className="ss-results">
            {revealed.results.map((r, i) => (
              <div key={i} className={`ss-result ${r.correct ? 'ss-ok' : 'ss-no'}`}>
                <span className="ss-round-n">{i + 1}</span>
                <div>
                  <div className="ss-round-clue">{r.emojiClue} {r.descClue}</div>
                  <div className="ss-round-ans">
                    r/{r.answer}
                    {r.picked && !r.correct && <span className="ss-picked"> · you said r/{r.picked}</span>}
                    {!r.picked && <span className="ss-picked"> · skipped</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="ss-btn ss-btn-primary" onClick={copyShare}>
            {copied ? '✅ Copied! Paste it in the comments' : '📋 Share your result'}
          </button>
          <p className="ss-dim ss-small">Come back tomorrow for 5 new mysteries 🔥 streaks matter</p>
        </div>
      </div>
    );
  }

  if (!current) return null;

  const picked = picks[round];

  return (
    <div className="ss-wrap">
      <div className="ss-card">
        <div className="ss-head">
          <h1 className="ss-title">🧭 Sub Sleuth</h1>
          <span className="ss-counter">{round + 1} / {rounds.length}</span>
        </div>
        <p className="ss-dim">Which subreddit is this?</p>

        <div className="ss-clues">
          <div className="ss-emoji">{current.emojiClue}</div>
          <div className="ss-desc">“{current.descClue}”</div>
        </div>

        <div className="ss-options">
          {current.options.map((opt) => {
            const isPicked = picked === opt;
            const cls = `ss-opt ${isPicked ? 'ss-opt-picked' : ''} ${picked !== undefined && picked !== null ? 'ss-opt-disabled' : ''}`;
            return (
              <button key={opt} className={cls} onClick={() => pick(opt)} disabled={picked !== undefined && picked !== null}>
                r/{opt}
              </button>
            );
          })}
        </div>

        <div className="ss-hint-row">
          {showHint ? (
            <span className="ss-hint">💡 Category: {current.hint}</span>
          ) : (
            picked === undefined || picked === null ? (
              <button className="ss-hint-btn" onClick={() => setShowHint(true)}>need a hint?</button>
            ) : null
          )}
        </div>

        {picked !== undefined && picked !== null && isLast && (
          <button className="ss-btn ss-btn-primary" onClick={finish} disabled={submitting}>
            {submitting ? 'Scoring…' : 'Reveal my score →'}
          </button>
        )}

        <div className="ss-foot">
          <span>🔥 {daily?.streak ?? 0} streak</span>
          <span>★ best {daily?.best ?? 0}/5</span>
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
