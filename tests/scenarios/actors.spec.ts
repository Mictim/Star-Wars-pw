import { test } from "../fixtures/Fixtures";
import { expect } from "@playwright/test";

test.describe.parallel('Test Cases for Actors data verification', () => {

    test(`Verify Actors page elements`, async({
        actorsPage
    }) => {
        const actors = await actorsPage.openActorsPage();
        await test.step('Verify actors names on the Actors Page', async() => {
            await expect.soft((await actorsPage.actorLink.allInnerTexts())
                .map(value => value.replace('\n', ''))
            ).toEqual(actors.results.map(actor => actor.name));
        })
    })
})