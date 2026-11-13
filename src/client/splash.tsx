import './index.css';

import { context, requestExpandedMode } from '@devvit/web/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export const Splash = () => {
  return (
    <div className="ss-wrap">
      <div className="ss-card ss-center">
        <div className="ss-emoji">🧭🕵️</div>
        <h1 className="ss-title">Sub Sleuth</h1>
        <p className="ss-dim">5 subreddit mysteries per day. Clues, picks and bragging rights.</p>
        <p className="ss-dim ss-small">
          Hey u/{context.username ?? 'sleuth'} — streaks matter. Share your grid in the comments.
        </p>
        <button
          className="ss-btn ss-btn-primary"
          onClick={(e) => requestExpandedMode(e.nativeEvent, 'game')}
        >
          Play today's mystery →
        </button>
        <p className="ss-dim ss-small">A daily game by u/dualwarez · #BuildWithReddit</p>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Splash />
  </StrictMode>
);
