import { APIRequestContext } from '@playwright/test';
import { randomUUID } from 'crypto';
import { AuthUser } from '../types/auth.types'

export async function createAuthenticatedUser(
  request: APIRequestContext
): Promise<AuthUser> {
  const uniqueId = randomUUID().replace(/-/g, '').slice(0, 8);
  const user = {
    name: `u_${uniqueId}`,
    email: `user_${uniqueId}@mail.com`,
    password: 'Password@123',
    gender: 'male'
  };

  // Signup
  const res = await request.post('/api/users/signup', {
    data: user
  });
  if (res.status() !== 201) {
    throw new Error(`User signup failed with status ${res.status()}`);
  }
  const signupBody = await res.json();

  // Signin
  const loginResponse = await request.post('/api/users/signin', {
    data: {
      email: user.email,
      password: user.password
    }
  });
  if (loginResponse.status() !== 200) {
    throw new Error(`User signin failed with status ${loginResponse.status()}`);
  }

  const body = await loginResponse.json();

  return {
    user: signupBody.user,
    token: body.token
  };
}
