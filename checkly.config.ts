import { defineConfig } from 'checkly'

/**
 * See https://www.checklyhq.com/docs/cli/project-structure/
 */
const config = defineConfig({
  /* A human friendly name for your project */
  projectName: 'studio-2',
  /** A logical ID that needs to be unique across your Checkly account,
   * See https://www.checklyhq.com/docs/cli/constructs/ to learn more about logical IDs.
   */
  logicalId: 'studio-2',
  /* An optional URL to your Git repo */
  repoUrl: 'https://github.com/checkly/checkly-cli',
  /* Sets default values for Checks */
  checks: {
    /* A default for how often your Check should run in minutes */
    frequency: 10,

    /* Checkly data centers to run your Checks as monitors */
    locations: ['us-east-1', 'eu-west-1'],

    /* An optional array of tags to organize your Checks */
    tags: ['mac'],

    /** The Checkly Runtime identifier, determining npm packages and the Node.js version available at runtime.
     * See https://www.checklyhq.com/docs/cli/npm-packages/
     */
    runtimeId: '2024.09',

    /* A glob pattern that matches the Checks inside your repo, see https://www.checklyhq.com/docs/cli/using-check-test-match/ */
    checkMatch: '**/__checks__/**/*.check.ts',

    /* Global configuration option for Playwright-powered checks. See https://www.checklyhq.com/docs/browser-checks/playwright-test/#global-configuration */
    playwrightConfig: {
      use: {
        baseURL: 'http://localhost:5173',
      },
      expect: {
        timeout: 30000,
      },
    },

    browserChecks: {
      /* A glob pattern matches any Playwright .spec.ts files and automagically creates a Browser Check. This way, you
       * can just write native Playwright code. See https://www.checklyhq.com/docs/cli/using-check-test-match/
       * */
      // testMatch: '**/__checks__/**/*.spec.ts',
      testMatch: '**/tests/**/*.spec.ts',
    },

    playwrightConfigPath: './playwright.config.ts',

    playwrightChecks: [
      {
        logicalId: 'playwright-check-grep-dev',
        name: 'Playwright Test: --grep @dev',
        testCommand: 'npx playwright test --grep @dev',
        locations: ['eu-central-1'],
        frequency: 10,
      },
      {
        logicalId: 'playwright-check-grep-test',
        name: 'Playwright Test: --grep @test',
        testCommand: 'npx playwright test --grep @test',
        locations: ['eu-central-1'],
        frequency: 10,
      },
    ],
  },
  cli: {
    /* The default datacenter location to use when running npx checkly test */
    runLocation: 'eu-west-1',
    /* An array of default reporters to use when a reporter is not specified with the "--reporter" flag */
    reporters: ['list'],
    /* How many times to retry a failing test run when running `npx checkly test` or `npx checkly trigger` (max. 3) */
    retries: 0,
  },
})

export default config
