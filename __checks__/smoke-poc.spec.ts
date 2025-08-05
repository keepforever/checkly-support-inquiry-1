import { expect, test } from '@playwright/test'
import { clerk } from '@clerk/testing/playwright'

test('test', async ({ page }) => {
  // Login using environment variables
  await page.goto(`${process.env.E2E_ROOT_URL || 'http://localhost:5173'}`)
  await clerk.signIn({
    page,
    signInParams: { strategy: 'email_code', identifier: process.env.E2E_CLERK_USER_USERNAME! },
  })

  await page.goto(process.env.E2E_ROOT_URL!)

  // Navigate to Assets
  await expect(page).toHaveURL(/.*brands/)
  await page.getByRole('link', { name: 'Creative Insights' }).click()
  await page.getByRole('button', { name: 'Last 60 days' }).click()
  await expect(page.getByRole('main')).toContainText('Summary')
})
