import { test as base, type Page } from '@playwright/test'
import { clerk } from '@clerk/testing/playwright'

type AuthPage = Page & { auth: { login: () => Promise<void> } }

export const test = base.extend<{ authPage: AuthPage }>({
  authPage: async ({ page }, use) => {
    const auth = {
      async login() {
        await page.goto(process.env.E2E_ROOT_URL || 'http://localhost:5173')
        await clerk.signIn({
          page,
          signInParams: {
            strategy: 'email_code',
            identifier: process.env.E2E_CLERK_USER_USERNAME!,
          },
        })
        // Navigate back to the main page after authentication
        await page.goto(process.env.E2E_ROOT_URL!)
      },
    }
    Object.assign(page, { auth })
    await use(page as AuthPage)
  },
})

export { expect } from '@playwright/test'
