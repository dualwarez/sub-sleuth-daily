import { reddit } from '@devvit/web/server';

export const createPost = async () => {
  const dateKey = new Date().toISOString().slice(0, 10);
  return await reddit.submitCustomPost({
    title: `Sub Sleuth — 5 daily subreddit mysteries (${dateKey})`,
  });
};
