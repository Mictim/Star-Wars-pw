import { test, expect } from "../fixtures/Fixtures";

test(`Test React selectors`, async({
    page, utils, loginSteps, defaultUser
}) => {
    await utils.logoutWhenUserLoggedIn();
    const element = page.locator('_react=Button[dataTestId="log-in-btn"]');
    await element.screenshot();
    await element.click();
    await loginSteps.fillLoginForm(defaultUser);
    await expect(page.locator('_react=SearchFrom[logged.display]')).toBeVisible();
})