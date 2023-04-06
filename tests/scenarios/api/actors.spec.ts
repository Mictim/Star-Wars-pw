import { test } from "../../fixtures/api-fixtures";
import { expect } from "@playwright/test";
import { Actors } from "../../model/dto/Actors";
import { Utils } from "../../util/Utils";

test.describe('[API] Tests examples', async () => {

    test('[API] Actors API tests example', async ({ context, apiBaseUrl }) => {
        const response = await test.step(`Get Response from "**/people" endpoint`, async () => {
            const response = await context.request.get(`${apiBaseUrl}/people`);
            expect(response.ok(), "Response to be OK").toBeTruthy();
            const jsonResponse = await response.json() as unknown as Actors;
            Utils.attachJson(JSON.stringify(jsonResponse), "Actor's Response");
            return jsonResponse;
        });
        expect(response.count === 82, "Verify the number of the all Actors").toBeTruthy();
    });

})