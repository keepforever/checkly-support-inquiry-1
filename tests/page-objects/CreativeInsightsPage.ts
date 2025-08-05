import type { Page, Locator } from '@playwright/test'

export class CreativeInsightsPage {
  readonly page: Page
  readonly creativeInsightsLink: Locator
  readonly dateFilterButton: Locator
  readonly mainContent: Locator

  constructor(page: Page) {
    this.page = page
    this.creativeInsightsLink = page.getByRole('link', { name: 'Creative Insights' })
    this.dateFilterButton = page.getByRole('button', { name: 'Last 60 days' })
    this.mainContent = page.getByRole('main')
  }

  async navigateToCreativeInsights() {
    await this.creativeInsightsLink.click()
  }

  async selectDateFilter() {
    await this.dateFilterButton.click()
  }

  getSummaryText() {
    return this.mainContent.getByText('Summary')
  }
}
