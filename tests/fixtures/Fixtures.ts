import {test as base} from '@playwright/test';
import { NewUser } from '../model/NewUser';
import { User } from '../model/User';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { SignupPage } from '../pages/SignupPage';
import { LoginSteps } from '../steps/LoginSteps';
import { SignupSteps } from '../steps/SignupSteps';
import { ActorsPage } from '../pages/ActorsPage';
import { Utils } from '../util/Utils';

export type TestOptions = {
    defaultUser: User;
    newUser: NewUser;
    signupPage: SignupPage;
    signupSteps: SignupSteps;
    loginPage: LoginPage;
    loginSteps: LoginSteps;
    mainPage: MainPage;
    utils: Utils;
    actorsPage: ActorsPage;
    // starshipsPage: Start

}

export const test = base.extend<TestOptions>({
    page: async ({browser, baseURL, defaultUser}, use) => {
        const context = await browser.newContext({storageState: "state.json"});
        const page = await context.newPage();
        await page.goto(baseURL!);
        await page.locator('data-testid=log-in-btn').click();
        await page.locator('data-testid=name').fill(defaultUser.username);
        await page.locator('data-testid=password').fill(defaultUser.password);
        await page.locator('data-testid=signin-btn').click();
        await use(page);
    },
    defaultUser: async({}, use) => {
        await use({username: "HanSolo", password: "HanSolo1"} as User);
    },
    newUser: async({}, use) => {
        await use({
            firstname: "Luke",
            lastname: "Skywalker",
            email: "Luke@Skywalker.com",
            displayname: "LukeSky",
            password: "TheForce" 
        } as NewUser)
    },
    signupPage: async({page}, use) => {
        await use(new SignupPage(page));
    },
    signupSteps: async({page}, use) => {
        await use(new SignupSteps(page))
    },
    loginPage: async({page}, use) => {
        await use(new LoginPage(page))
    },
    loginSteps: async({page}, use) => {
        await use(new LoginSteps(page))
    },
    mainPage: async({page}, use) => {
        await use(new MainPage(page))
    },
    actorsPage: async({page}, use) => {
        await use(new ActorsPage(page))
    },
    utils: async({page}, use) => {
        await use(new Utils(page))
    }
})

export { expect } from '@playwright/test';