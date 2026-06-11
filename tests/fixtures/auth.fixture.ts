import { test as base, APIRequestContext } from '@playwright/test';
import { createAuthenticatedUser } from '../helpers/auth.helper';
import { AuthUser } from '../types/auth.types';

type Fixtures = {
  authRequest: APIRequestContext;
  authUser: AuthUser;
};

export const test = base.extend<Fixtures>({  
    authUser: async ({ request }, use) => {
        const authUser = await createAuthenticatedUser(request);
        await use(authUser);
    },

    authRequest: async ({ playwright, authUser }, use) => {
        const authRequestContext = await playwright.request.newContext({
            baseURL: process.env.BASE_URL,
            extraHTTPHeaders: {
                Authorization: `Bearer ${authUser.token}`
            }
        });

        await use(authRequestContext);
        await authRequestContext.dispose();
    }
});

export { expect } from '@playwright/test';
