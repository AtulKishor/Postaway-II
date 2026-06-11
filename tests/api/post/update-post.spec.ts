import { test, expect } from '../../fixtures/auth.fixture.js';
import { createTestPost } from '../../helpers/post.helper.js';

test('update a specific post', async ({ authRequest }) => {
  const createdPost = await createTestPost({ request: authRequest, caption: 'Old caption' });

  const response = await authRequest.put(`/api/posts/${createdPost.post._id}`, {
    multipart: {
      caption: 'Updated caption',
      imageUrl: {
        name: 'updated-lion.jpg',
        mimeType: 'image/jpeg',
        buffer: Buffer.from('updated-image-content')
      }
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(body.updatedPost._id).toBe(createdPost.post._id);
  expect(body.updatedPost.caption).toBe('Updated caption');
});
