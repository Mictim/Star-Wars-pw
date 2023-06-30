import { test, expect } from "@playwright/test";
import { StarshipSteps } from "../../steps/starship-steps";
import { defaultUser } from "../../model/user-details";
import { defaultStarship } from "../../model/starships-details";

test.describe('[E2E] HAR test example', async() => {

    test.skip('HAR file usage example', async({browser, baseURL}) => {
        const context = await browser.newContext(
            {
                storageState: 'state.json',
                recordHar: {
                    path: './tests//resources/har/starships.har',
                    urlFilter: '**/api/**',
                    mode: 'minimal'
                }
            }
        );
        const page = await context.newPage();
        await page.goto(baseURL!);
        const starshipsSteps = new StarshipSteps(page);
        await starshipsSteps.loginAsUser(defaultUser.username, defaultUser.password);
        await starshipsSteps.openStarshipsPage();
        await starshipsSteps.openStarshipByName(defaultStarship.name);
        await context.close();
    });

    test('Verify data from HAR file', async({browser, baseURL}) => {
        const context = await browser.newContext({
            storageState: 'state.json'
        });
        const page = await context.newPage();
        const starshipsSteps = new StarshipSteps(page);
        await page.goto(baseURL!);
        await page.routeFromHAR('./tests/resources/har/starships.har'), {
            update: true
        };
        await starshipsSteps.loginAsUser(defaultUser.username, defaultUser.password);
        await starshipsSteps.openStarshipsPage();
        await starshipsSteps.openStarshipByName(defaultStarship.name);
        await starshipsSteps.verifyDataForStarship(defaultStarship);
        await context.close();
    })
})