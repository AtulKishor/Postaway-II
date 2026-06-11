import { test, expect } from '../../fixtures/auth.fixture.js';

test('get all users details', async ({ authRequest, authUser }) => {
  const response = await authRequest.get('/api/users/get-all-details');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(Array.isArray(body.users)).toBe(true);
  expect(body.users.some((user: { _id: string }) => user._id === authUser.user._id)).toBe(true);
});
