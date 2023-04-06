import { test, expect } from "../../fixtures/fixtures";

test.describe('[E2E] React Selectors', async () => {
    test(`[E2E] Test React selectors`, async ({
        page, utils, loginSteps, defaultUser
    }) => {
        await utils.logoutWhenUserLoggedIn();
        const element = page.locator('_react=Button[dataTestId="log-in-btn"]');
        const screenshot = await element.screenshot({ path: "./screenshots/element.png" });
        await test.info().attach("Element", { body: screenshot, contentType: "image/png" });
        await element.click();
        await loginSteps.fillLoginForm(defaultUser);
        const searchFormElement = await page.locator('_react=SearchForm')
        await expect(searchFormElement.locator(`_react=[logged.display='${defaultUser.displayname}']`)).toBeVisible();
    })
})
