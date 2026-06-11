import { test, expect } from '../../fixtures/auth.fixture.js';

test('log out the user from all devices', async ({ authRequest }) => {
  const response = await authRequest.get('/api/users/logout-all-devices');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(body.message).toContain('Logged out successfully from all devices');
});
