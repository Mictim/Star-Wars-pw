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
                    ? 'http://10.14.38.3:3128'
                    : 'http://sia-lb.telekom.de:8080',
                bypass: 'localhost, 127.0.0.1'
            }
        });
        const context = await browser.newContext();
        await use(context);
        await context.close();
    },
    apiBaseURL: ({}, use) => {
        use("https://swapi/ddev/api")
    }
})

export {expect} from "@playwright/test";