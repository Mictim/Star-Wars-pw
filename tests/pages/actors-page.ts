import { Page, Locator } from "@playwright/test";


export class ActorsPage {
    readonly actorsLink: Locator;

    constructor(private page: Page) {
        this.actorsLink = page.getByTestId('actor-link');
    }

    getActorByName(name: string): Locator {
        return this.actorsLink.getByText(name, {exact: true});
    }
}