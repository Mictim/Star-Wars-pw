import { Locator, Page } from "@playwright/test";
import { MainPage } from "./Main.page";

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
}
