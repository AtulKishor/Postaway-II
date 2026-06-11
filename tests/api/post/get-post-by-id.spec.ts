import { test, expect } from '../../fixtures/auth.fixture.js';
import { createTestPost } from '../../helpers/post.helper.js';

test('retrieve a specific post by id', async ({ authRequest }) => {
  const createdPost = await createTestPost({ request: authRequest, caption: 'Detail post' });

  const response = await authRequest.get(`/api/posts/${createdPost.post._id}`);

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(body.post._id).toBe(createdPost.post._id);
  expect(body.post.caption).toBe('Detail post');
});
