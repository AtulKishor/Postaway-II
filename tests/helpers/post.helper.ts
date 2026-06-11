import fs from 'fs';
import path from 'path';
import { APIRequestContext } from '@playwright/test';

type CreatePostInput = {
  request: APIRequestContext;
  caption?: string;
};

export async function createTestPost({ request, caption = 'Lion picture' }: CreatePostInput) {
  const response = await request.post('/api/posts', {
    multipart: {
      caption,
      imageUrl: {
        name: 'lion.jpg',
        mimeType: 'image/jpeg',
        buffer: fs.readFileSync(path.join(process.cwd(), 'tests/test-data/images/lion.jpg'))
      }
    }
  });

  if (response.status() !== 201) {
    throw new Error(`Post creation failed with status ${response.status()}`);
  }

  const body = await response.json();

  return body;
}
