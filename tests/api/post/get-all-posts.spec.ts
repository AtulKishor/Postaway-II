import { test, expect } from '../../fixtures/auth.fixture.js';
import { createTestPost } from '../../helpers/post.helper.js';

test('retrieve all posts', async ({ authRequest }) => {
  await createTestPost({ request: authRequest, caption: 'Feed post' });

  const response = await authRequest.get('/api/posts/all');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(Array.isArray(body.posts)).toBe(true);
  expect(body.posts.length).toBeGreaterThan(0);
});
