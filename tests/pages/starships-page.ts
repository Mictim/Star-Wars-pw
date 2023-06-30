import { Page, Locator} from "@playwright/test";

export class StarshipsPage {
    readonly starshipLink: Locator;

    constructor(private page: Page) {
        this.starshipLink = page.getByTestId('starship-link');
    }

    getStarshipByName(name: string): Locator {
        return this.starshipLink.getByText(name, {exact: true});
    } 
}