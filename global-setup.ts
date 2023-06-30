import { FullConfig, chromium } from "@playwright/test";
import { MainSteps } from "./tests/steps/main-steps";
import { defaultUser } from "./tests/model/user-details";


async function globalSetup(config: FullConfig) {
    const {baseURL, storageState} = config.projects[0].use;
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(baseURL!);

    const mainSteps = new MainSteps(page);
    await mainSteps.signupUserStep(defaultUser);
    await page.context().storageState({path: 'state.json'});
    await browser.close();
}

export default globalSetup;