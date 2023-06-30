import { Page, Locator} from "@playwright/test";

export class StarshipPage {
    readonly starshipName: Locator;
    readonly starshipModel: Locator;
    readonly starshipManufacturer: Locator;
    readonly starshipCost: Locator;
    readonly starshipLenght: Locator;
    readonly starshipSpeed: Locator;
    readonly starshipCrew: Locator;

    constructor(private page: Page) {
        this.starshipName = page.getByTestId('starship-name').locator('h3');
        this.starshipModel = page.getByTestId('starship-model');
        this.starshipManufacturer = page.getByTestId('starship-manufacturer');
        this.starshipCost = page.getByTestId('starship-cost');
        this.starshipLenght = page.getByTestId('starship-length');
        this.starshipSpeed = page.getByTestId('startship-speed');
        this.starshipCrew = page.getByTestId('starship-crew');
    }
}