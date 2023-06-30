import { Page, test, expect } from "@playwright/test";
import { MainSteps } from "./main-steps";
import { ActorPage } from "../pages/actor-page";
import { ActorsPage } from "../pages/actors-page";
import { ActorDetails } from "../model/actor-details";


export class ActorsSteps extends MainSteps {
    readonly actorsPage: ActorsPage;
    readonly actorPage: ActorPage;

    constructor(protected page: Page) {
        super(page);
        this.actorPage = new ActorPage(page);
        this.actorsPage = new ActorsPage(page);
    }

    async openActorsPage(name: string = "Luke Skywalker"): Promise<void> {
        await test.step('Open Actors page', async () => {
            await this.mainPage.actorsBtn.click();

            await expect(await this.actorsPage.getActorByName(name)).toBeVisible();
        });
    }

    async openActorByName(name: string): Promise<void> {
        await test.step(`Open information card for ${name} actor`, async () => {
            await this.actorsPage.getActorByName(name).click();

            await expect(await this.actorPage.name).toHaveText(name);
        });
    }

    async verifyDataForActor(actor: ActorDetails): Promise<void> {
        await test.step(`Verify data for starship: ${actor.name}`, async () => {
            await expect.soft(await this.actorPage.height, "Verify actor's height").toHaveText(actor.height);
            await expect.soft(await this.actorPage.mass, "Verify actor's mass").toHaveText(actor.mass);
            await expect.soft(await this.actorPage.hairColor, "Verify actor's hair color").toHaveText(actor.hairColor);
            await expect.soft(await this.actorPage.skinColor, "Verify actor's skin color").toHaveText(actor.skinColor);
            await expect.soft(await this.actorPage.birthYear, "Verify actor's birth year").toHaveText(actor.birthYear);
            await expect.soft(await this.actorPage.gender, "Verify actor's gender").toHaveText(actor.gender);
        })
    }

}