import { test, expect, Page } from "@playwright/test";
import { StarshipModel } from "../../model/starships-model";

test.describe('[API] Mocking example', async() => {
    test('[API] Mock starship data', async({ context }) => {
        const starship: StarshipModel = {
            name: "USS George Bush",
            model: "Aircraft Fortress",
            manufacturer: "Lockheed Martins",
            cost_in_credits: "1000000000",
            length: "200",
            max_atmosphering_speed: "20",
            crew: "1000"
        };

        const page: Page = await context.newPage();
        await page.route('https://swapi.dev/api/starship/3', async(route) => {
            const response = await route.fetch();
            const jsonObj = JSON.stringify(starship);
            await route.fulfill({status: 200, body: jsonObj}) 
        });

        const response = await page.goto('https://swapi.dev/api/starship/3');
        const jsonResponse = await response?.json() as StarshipModel;
        expect(jsonResponse.name).toBe(starship.name);
        test.info().attach('Mocked Response', {body: JSON.stringify(jsonResponse), contentType: 'application/json'});
    })
})