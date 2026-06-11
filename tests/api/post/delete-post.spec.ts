import { test, expect } from '../../fixtures/auth.fixture.js';
import { createTestPost } from '../../helpers/post.helper.js';

test('delete a specific post', async ({ authRequest }) => {
  const createdPost = await createTestPost({ request: authRequest, caption: 'Delete me' });

  const response = await authRequest.delete(`/api/posts/${createdPost.post._id}`);

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(body.msg).toContain('Post deleted successfully');
});
