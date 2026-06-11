import { test, expect } from '../../fixtures/auth.fixture.js';
import { createTestPost } from '../../helpers/post.helper.js';

test('retrieve all posts for a specific user', async ({ authRequest }) => {
  const createdPost = await createTestPost({ request: authRequest, caption: 'My profile post' });

  const response = await authRequest.get('/api/posts');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(Array.isArray(body.posts)).toBe(true);
  expect(body.posts.some((post: { _id: string }) => post._id === createdPost.post._id)).toBe(true);
});
