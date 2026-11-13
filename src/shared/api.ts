// Shared API types for Sub Sleuth

export type DailyRound = {
  emojiClue: string;
  descClue: string;
  hint: string;
  options: string[];
};

export type DailyResponse = {
  type: 'daily';
  username: string;
  dateKey: string;
  rounds: DailyRound[];
  alreadyPlayed: boolean;
  streak: number;
  best: number;
};

export type SubmitRequest = {
  postId: string;
  picks: (string | null)[]; // chosen option per round
};

export type SubmitResult = {
  picked: string | null;
  correct: boolean;
  answer: string;
  emojiClue: string;
  descClue: string;
};

export type SubmitResponse = {
  type: 'submit';
  results: SubmitResult[];
  score: number;
  streak: number;
  isNewBest: boolean;
  best: number;
};

export type LeaderboardEntry = {
  username: string;
  score: number;
};

export type LeaderboardResponse = {
  type: 'leaderboard';
  entries: LeaderboardEntry[];
};

export type ErrorResponse = {
  status: 'error';
  message: string;
};
