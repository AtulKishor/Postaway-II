import path from 'path';
import fs from 'fs';
import { test, expect } from '../../fixtures/auth.fixture.js';

test('upload user avatar', async ({ authRequest }) => {
  const response = await authRequest.post('/api/users/avatar-upload', {
    multipart: {
      avatar: {
        name: 'avatar.png',
        mimeType: 'image/png',
        buffer: fs.readFileSync(
          path.join(process.cwd(), 'tests/test-data/avatar/lion_avatar.jpg')
        )
      }
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(body.msg).toContain('Avatar uploaded to your profile');
});
