import { expect } from "@playwright/test";
import { test } from "../fixtures/Fixtures";

test.describe.parallel('Login scenarios', () => {

    test(`Login to webpage as default user`, async({
        loginSteps, defaultUser, utils
    }) => {
        await utils.logoutWhenUserLoggedIn();
        await loginSteps.login(defaultUser);
        await expect.soft(loginSteps.loggedUser).toBeVisible();
        await expect.soft(loginSteps.loggedUser).toHaveText(defaultUser.username);
    })

    test(`Login to webpage from signup form`, async({
        signupSteps, defaultUser, utils
    }) => {
        await utils.logoutWhenUserLoggedIn();
        await expect.soft(signupSteps.signupBtn).toBeEditable();
        await signupSteps.signin(defaultUser);
        await expect.soft(signupSteps.loggedUser).toBeVisible();
        await expect.soft(signupSteps.loggedUser).toHaveText(defaultUser.username);
    })

})