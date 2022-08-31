import { Locator, Page } from "@playwright/test";
import { MainPage } from "./MainPage";
import { ActorDetails } from "../model/dto/ActorDetails";

export class ActorsPage extends MainPage {
  readonly listLinks: Locator;
  readonly actorLink: Locator;
  readonly viewMoreBtn: Locator;
  readonly backToTopBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.listLinks = page.locator('ul.list[aria-label="list"] a');
    this.actorLink = page.locator("data-testid=actor-link");
    this.viewMoreBtn = page.locator("data-testId=view-more-btn");
    this.backToTopBtn = page.locator("data-testid=to-top-btn");
  }

  async selectActorById(index: number): Promise<ActorDetails> {
    return this.selectAcctorByValue(index);
  }

  async selectActorByName(name: string): Promise<ActorDetails> {
    return this.selectAcctorByValue(name);
  }

  private async getActorLocator(value: string | number): Promise<Locator> {
    if(typeof value === 'string') {
        return this.actorLink.locator(`[data-name=${value}]`);
    } else {
        return this.actorLink.nth(value - 1);
    }
  }

  private async selectAcctorByValue(value: string | number): Promise<ActorDetails> {
    const [response] = await Promise.all([
        this.page.waitForResponse(RegExp("/people/[0-9]/")),
        (await this.getActorLocator(value)).click(),
      ]);
      if (response.status() === 200) {
        return response.json();
      } else {
        throw new Error(`Response failed with status: ${response.status()}`);
      }
  } 
}
