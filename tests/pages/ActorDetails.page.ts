import { Locator, Page } from '@playwright/test';
import { MainPage } from './Main.page';

export class ActorDetailsPage extends MainPage {
    readonly page: Page;
    readonly actorName: Locator;
    readonly actorHeight: Locator;
    readonly actorMass: Locator;
    readonly actorHairColor: Locator;
    readonly actorSkinColor: Locator;
    readonly actorBirth: Locator;
    readonly actorGender: Locator;

    constructor(page: Page) {
        super(page);
        this.actorName = page.getByTestId('actor-name').locator('h3');
        this.actorHeight = page.getByTestId('actor-height').locator('span');
        this.actorMass = page.getByTestId('actor-mass').locator('span');
        this.actorHairColor = page.getByTestId('actor-hair-color').locator('span');
        this.actorSkinColor = page.getByTestId('actor-skin-color').locator('span');
        this.actorBirth = page.getByTestId('actor-birth').locator('span');
        this.actorGender = page.getByTestId('actor-gender').locator('span');
    }
}