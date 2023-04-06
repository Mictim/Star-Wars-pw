import { test } from "../../fixtures/fixtures";
import { ActorsSteps } from '../../steps/Actors.steps';
import { LoginSteps } from '../../steps/Login.steps';

test.describe.parallel('[E2E] Test Cases for Actors data verification', () => {

    test.skip(`[E2E] Record HAR file`, async({
        browser, baseURL, defaultUser
    }) => {
        const context = await browser.newContext({storageState: "state.json", 
            recordHar: { path: './tests/resources/har/actors.har', urlFilter: '**/api/**' }});
        const page = await context.newPage();
        const loginSteps = new LoginSteps(page);
        await page.goto(baseURL!);
        await loginSteps.login(defaultUser);
        await new ActorsSteps(page).verifyAllActorsPageElements();
        await context.close();
    });

    test(`[E2E] Verify HAR file usage`, async( {browser, baseURL, defaultUser} ) => {
        const context = await browser.newContext({storageState: "state.json"});
        const page = await context.newPage();
        const loginSteps = new LoginSteps(page);
        await page.routeFromHAR('./tests/resources/har/actors.har', {
            update: true
        });
        await page.goto(baseURL!);
        await loginSteps.login(defaultUser);
        await new ActorsSteps(page).verifyAllActorsPageElements();
        await context.close();
    });
})