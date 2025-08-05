import { clerkSetup } from '@clerk/testing/playwright'
// import { FullConfig } from "@playwright/test";

// async function globalSetup(config: FullConfig) {
async function globalSetup() {
  await clerkSetup()

  if (!process.env.E2E_ROOT_URL) {
    throw new Error('Please provide E2E_ROOT_URL environment variable.')
  }

  if (!process.env.E2E_CLERK_USER_USERNAME /* || !process.env.E2E_CLERK_USER_PASSWORD */) {
    throw new Error('Please provide E2E_CLERK_USER_USERNAME environment variable.')
  }
}

export default globalSetup
