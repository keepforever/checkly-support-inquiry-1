import type { Page } from '@playwright/test'

/**
 * Common test utilities and helpers
 */

/**
 * Wait for the page to be fully loaded with optional timeout
 */
export async function waitForPageLoad(page: Page, timeout = 30000) {
  await page.waitForLoadState('networkidle', { timeout })
}

/**
 * Get the base URL for tests
 */
export function getBaseUrl(): string {
  return process.env.E2E_ROOT_URL || 'http://localhost:5173'
}

/**
 * Navigate to a specific path with base URL
 */
export async function navigateToPath(page: Page, path: string) {
  const url = `${getBaseUrl()}${path}`
  await page.goto(url)
}

/**
 * Common selectors used across tests
 */
export const selectors = {
  mainContent: '[role="main"]',
  navigation: '[role="navigation"]',
  button: (name: string) => `button:has-text("${name}")`,
  link: (name: string) => `a:has-text("${name}")`,
} as const
