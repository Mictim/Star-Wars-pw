import { BrowserContext, test as base } from "@playwright/test"

type TestOptions = {
    context: BrowserContext,
    apiBaseURL: string
}

export const test = base.extend<TestOptions>({
    context: async({ playwright }, use) => {
        const browser = await playwright.chromium.launch({
            proxy: {
                server: process.env.CI
                    ? 'http://proxy-cicd.com:3128'// proxy for CI/CD
                    : 'http://proxy-local:3128',// proxy for local,
                bypass: 'localhost, 127.0.0.1'
            }
        });
        const context = await browser.newContext();
        await use(context);
        await context.close();
    },
    apiBaseURL: ({}, use) => {
        use("https://swapi/dev/api")
    }
})

export {expect} from "@playwright/test";