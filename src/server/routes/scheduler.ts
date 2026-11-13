import { Hono } from 'hono';
import type { TriggerResponse } from '@devvit/web/shared';
import { context } from '@devvit/web/server';
import { createPost } from '../core/post';

export const scheduler = new Hono();

scheduler.post('/daily-post', async (c) => {
  try {
    const post = await createPost();
    return c.json<TriggerResponse>(
      {
        status: 'success',
        message: `Daily post created in ${context.subredditName ?? 'subreddit'}: ${post.id}`,
      },
      200
    );
  } catch (error) {
    console.error(`Scheduler daily-post error: ${error}`);
    return c.json<TriggerResponse>(
      { status: 'error', message: 'Failed to create daily post' },
      400
    );
  }
});
