import { test, expect } from '../../fixtures/auth.fixture.js';

test('update user details', async ({ authRequest, authUser }) => {
  const response = await authRequest.put(`/api/users/update-details/${authUser.user._id}`, {
    data: {
      name: 'Updated User Name',
      gender: 'female'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(body.updatedUser.name).toBe('Updated User Name');
  expect(body.updatedUser.gender).toBe('female');
});
