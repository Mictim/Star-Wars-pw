import { BrowserContext, test as base } from '@playwright/test'

type TestOptions = {
    context: BrowserContext
    apiBaseUrl: string
}

export const test = base.extend<TestOptions>({
    context: async ({ playwright }, use) => {
        const browser = await playwright.chromium.launch({
            
        })
        const context = await browser.newContext()
        await use(context)
        await context.close()
    },
    apiBaseUrl: ({}, use) => {
        use('https://swapi.dev/api/')
    },
})
