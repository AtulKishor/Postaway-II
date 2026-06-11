import { test, expect } from '../../fixtures/auth.fixture.js';
import { createTestPost } from '../../helpers/post.helper.js';

test('create post', async ({ authRequest }) => {
  const body = await createTestPost({ request: authRequest });

  expect(body.success).toBe(true);
  expect(body.post.caption).toBe('Lion picture');
  expect(body.post.imageUrl).toBeTruthy();
});
