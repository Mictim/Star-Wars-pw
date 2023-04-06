import { Page, Locator, test, expect } from "@playwright/test";
import { ActorDetails } from "../model/dto/ActorDetails";
import { Actors } from "../model/dto/Actors";
import { ActorsPage } from "../pages/Actors.page";
import { PageUtils } from "../util/PageUtils";
import { MainSteps } from "./Main.steps";

export class ActorsSteps extends ActorsPage {
  readonly page: Page;
  readonly mainSteps: MainSteps;
  readonly utils: PageUtils;

  constructor(page: Page) {
    super(page);
    this.mainSteps = new MainSteps(page);
    this.utils = new PageUtils(page);
  }

  async selectActorById(index: number): Promise<ActorDetails> {
    return this.selectActorByValue(index);
  }

  async selectActorByName(name: string): Promise<ActorDetails> {
    return this.selectActorByValue(name);
  }

  async verifyAllActorsPageElements(): Promise<void> {
    const actors = await this.utils.getResponse<Actors>("**/people/", this.actorsLinkBtn);
    await test.step("Verify actors names on the Actors Page", async () => {
      await expect
        .soft(
          (
            await this.actorLink.allInnerTexts()
          ).map((value) => value.replace("\n", ""))
        )
        .toEqual(actors.results.map((actor) => actor.name));
    });
  }

  private getActorLocator(value: string | number): Locator {
    if (typeof value === "string") {
      return this.actorLink.locator(`[data-name=${value}]`);
    } else {
      return this.actorLink.nth(value - 1);
    }
  }

  private async selectActorByValue(
    value: string | number
  ): Promise<ActorDetails> {
    const [response] = await Promise.all([
      this.page.waitForResponse(RegExp("/people/[0-9]/")),
      this.getActorLocator(value).click(),
    ]);
    if (response.ok()) {
      return response.json();
    } else {
      throw new Error(`Response failed with status: ${response.status()}`);
    }
  }
}
