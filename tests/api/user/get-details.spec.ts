import { test, expect } from '../../fixtures/auth.fixture.js';

test('get logged-in user details', async ({ authRequest, authUser }) => {
  const response = await authRequest.get(`/api/users/get-details/${authUser.user._id}`);

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(body.user._id).toBe(authUser.user._id);
  expect(body.user.email).toBe(authUser.user.email);
});
