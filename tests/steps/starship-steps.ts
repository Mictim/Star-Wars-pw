import { Page, test, expect } from "@playwright/test";
import { MainSteps } from "./main-steps";
import { StarshipsPage } from "../pages/starships-page";
import { StarshipPage } from "../pages/starship-page";
import { StarshipDetails } from "../model/starships-details";
import { PageUtils } from "../utils/page-utils";
import { StarshipsModel } from "../model/starships-model";

export class StarshipSteps extends MainSteps{
    readonly starshipsPage: StarshipsPage;
    readonly starshipPage: StarshipPage;
    readonly utils: PageUtils;

    constructor(protected page: Page) {
        super(page);
        this.starshipsPage = new StarshipsPage(page);
        this.starshipPage = new StarshipPage(page);
        this.utils = new PageUtils(page);
    }

    async openStarshipsPage(name: string = "Star Destroyer"): Promise<void> {
        await test.step('Open Starships page', async() => {
            const response = await this.utils.getResponse<StarshipsModel>('**/api/starships/', this.mainPage.starshipsBtn);
            await expect.soft(response.count).toBe(36);
            await expect(await this.starshipsPage.getStarshipByName(name)).toBeVisible();
        });
    }

    async openStarshipByName(name: string): Promise<void> {
        await test.step(`Open information card for ${name} starship`, async() => {
            await this.starshipsPage.getStarshipByName(name).click();

            await expect(await this.starshipPage.starshipName).toHaveText(name);
        });
    }

    async verifyDataForStarship(starship: StarshipDetails): Promise<void> {
        await test.step(`Verify data for starship: ${starship.name}`, async() => {
            await expect.soft(await this.starshipPage.starshipModel, "Verify starship's model").toHaveText(starship.model);
            await expect.soft(await this.starshipPage.starshipManufacturer, "Verify starship's manufacturer").toHaveText(starship.manufacturer);
            await expect.soft(await this.starshipPage.starshipCost, "Verify starship's cost").toHaveText(starship.cost);
        })
    }

}