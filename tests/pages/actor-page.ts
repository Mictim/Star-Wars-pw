import { Locator, Page } from "@playwright/test";


export class ActorPage {
    readonly name: Locator;
    readonly height: Locator;
    readonly mass: Locator;
    readonly hairColor: Locator;
    readonly skinColor: Locator;
    readonly birthYear: Locator;
    readonly gender: Locator;

    constructor(private page: Page) {
        this.name = page.getByTestId('actor-name').locator('h3');
        this.height = page.getByTestId('actor-height').locator('span');
        this.mass = page.getByTestId('actor-mass').locator('span');
        this.hairColor = page.getByTestId('actor-hair-color').locator('span');
        this.skinColor = page.getByTestId('actor-skin-color').locator('span');
        this.birthYear = page.getByTestId('actor-birth').locator('span');
        this.gender = page.getByTestId('actor-gender').locator('span');
    }
}