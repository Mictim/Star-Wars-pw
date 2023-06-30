import { test as base } from "@playwright/test";

import { ActorsSteps } from "../steps/actors-steps"
import { MainSteps } from "../steps/main-steps"
import { StarshipSteps } from "../steps/starship-steps"
import { defaultUser } from "../model/user-details";

type TestOptions = {
    mainSteps: MainSteps,
    actorsSteps: ActorsSteps,
    starshipsSteps: StarshipSteps
}

export const test = base.extend<TestOptions>({
    page: async ({ browser, baseURL }, use) => {
        const context = await browser.newContext({
            storageState: 'state.json'
        });
        const page = await context.newPage();
        await page.goto(baseURL!);
        const mainSteps: MainSteps = new MainSteps(page);
        await mainSteps.loginAsUser(defaultUser.username, defaultUser.password);
        await use(page);
        await context.close()
    },
    mainSteps: async ({ page }, use) => {
        await use(new MainSteps(page));
    },
    actorsSteps: async ({ page }, use) => {
        await use(new ActorsSteps(page));
    },
    starshipsSteps: async ({ page }, use) => {
        await use(new StarshipSteps(page));
    }
});

export { expect } from "@playwright/test";