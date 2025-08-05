import { test, expect } from './fixtures'
import { CreativeInsightsPage } from './page-objects/CreativeInsightsPage'

test.describe('Creative Insights smoke test', () => {
  let creativeInsightsPage: CreativeInsightsPage

  test.beforeEach(async ({ authPage }) => {
    creativeInsightsPage = new CreativeInsightsPage(authPage)
  })

  test('should navigate to Creative Insights and view summary', async ({ authPage }) => {
    // Login using the auth fixture
    await authPage.auth.login()

    // Verify we're on the brands page after login
    await expect(authPage).toHaveURL(/.*brands/)

    // Navigate to Creative Insights using page object
    await creativeInsightsPage.navigateToCreativeInsights()

    // Select date filter
    await creativeInsightsPage.selectDateFilter()

    // Verify summary is visible
    await expect(creativeInsightsPage.getSummaryText()).toBeVisible()
  })
})
