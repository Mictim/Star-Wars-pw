import { test, expect } from "../../fixtures/fixtures";

test.describe.parallel('[E2E] Login scenarios', () => {

    test(`[E2E] Login to webpage as default user`, async({
        loginSteps, defaultUser, utils
    }) => {
        await utils.logoutWhenUserLoggedIn();
        await loginSteps.login(defaultUser);
        await expect.soft(loginSteps.loggedUser).toBeVisible();
        await expect.soft(loginSteps.loggedUser).toHaveText(defaultUser.displayname);
    })

    test(`[E2E] Login to webpage from signup form`, async({
        signupSteps, defaultUser, utils
    }) => {
        await utils.logoutWhenUserLoggedIn();
        await expect.soft(signupSteps.signupBtn).toBeEditable();
        await signupSteps.signin(defaultUser);
        await expect.soft(signupSteps.loggedUser).toBeVisible();
        await expect.soft(signupSteps.loggedUser).toHaveText(defaultUser.displayname);
    })

})