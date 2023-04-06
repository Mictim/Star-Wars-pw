import { devices, PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    globalSetup: require.resolve('./global-setup'),
    testDir: './tests/scenarios/',

    /* Maximum time one test can run for. */
    timeout: 300 * 1000,

    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    expect: {
        timeout: 15000,
    },
    /* Run tests in files in parallel */
    fullyParallel: true,

    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,

    /* Retry count of the failed tests will be performed on CI only */
    retries: process.env.CI ? 2 : 0,

    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 5 : 3,

    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: process.env.CI
        ? [['dot'], ['allure-playwright']]
        : [['list'], ['html', { open: 'on-failure' }]],

    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 30000,

        /* For local execution turn on trace, for CI execution, trace will be recorded after the first retry */
        trace: process.env.CI ? 'retain-on-failure' : 'on',

        /* For CI execution will be recorded video as evidence, and for local will be recorded if test will fail */
        video: {
            mode: process.env.CI ? 'on' : 'on',
            size: { width: 1920, height: 1020 },
        },

        /* Viewport of the browser in whch tests will be executed */
        viewport: { width: 1920, height: 1080 },

        /* Screenshots will be created on the end of the test for CI execution and if failed for local execution*/
        screenshot: process.env.CI ? 'on' : 'only-on-failure',
        acceptDownloads: true,

        /**
         * Geolocation
         */
        locale: 'en-GB',
        geolocation: { longitude: 12.492507, latitude: 41.889938 },
        timezoneId: 'America/New_York',
        permissions: ['geolocation'],
    },

    projects: [
        {
            name: 't3a-pw-template-chrome',
            use: {
                ...devices['Desktop Chrome'],
                baseURL: 'http://localhost:3000/',
            },
        },
        {
            name: 't3a-pw-template-firefox',
            use: {
                ...devices['Desktop Firefox'],
                baseURL: 'http://localhost:3000/',
            },
        },
        {
            name: 't3a-pw-template-edge',
            use: {
                ...devices['Desktop Edge'],
                baseURL: 'http://localhost:3000/',
            },
        },
    ],

    /* Test will deploy locally application and remove it after execution */
    webServer: {
        command: 'npm run start',
        port: 3000,
        timeout: 120 * 1000,
        reuseExistingServer: true,
    },
}

export default config
