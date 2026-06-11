import { test, expect } from '../../fixtures/auth.fixture.js';

test('log out the currently logged-in user', async ({ authRequest }) => {
  const response = await authRequest.get('/api/users/logout');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(body.message).toContain('Logged out successfully from this device');
});
