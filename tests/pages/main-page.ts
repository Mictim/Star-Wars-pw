import { Page, Locator } from "@playwright/test";

export class MainPage {
    readonly signupBtn: Locator;
    readonly loginBtn: Locator;
    readonly starshipsBtn: Locator;
    readonly actorsBtn: Locator;

    constructor(private page: Page) {
        this.signupBtn = page.getByTestId('signup-btn');
        this.loginBtn = page.getByTestId('log-in-btn');
        this.starshipsBtn = page.getByTestId('nav-starships');
        this.actorsBtn = page.getByTestId('nav-actors');
    }
}