import { Page, test } from "@playwright/test";
import { MainPage } from "../pages/Main.page";

export class MainSteps extends MainPage {

    constructor(page: Page) {
        super(page);
    }

}