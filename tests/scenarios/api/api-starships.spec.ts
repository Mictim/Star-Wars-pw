import {test, expect } from "@playwright/test";
import { StarshipsModel } from "../../model/starships-model";

test.describe('[API] Test Examples', async() => {
    test('[API] Starships API test examples', async({ context }) => {
        const response = await context.request.get('https://swapi.dev/api/starships/');
        expect(response.ok()).toBeTruthy();
        const jsonResponse = await response.json() as StarshipsModel;
        expect(jsonResponse.count).toBe(36); 
    })
})