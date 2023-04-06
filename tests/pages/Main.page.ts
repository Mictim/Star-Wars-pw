import { Locator, Page } from "@playwright/test";

export class MainPage {
    readonly page: Page;
    readonly loginBtn: Locator;
    readonly signupBtn: Locator;
    readonly logoutBtn: Locator;
    readonly loggedUser: Locator;

    readonly homeLinkBtn: Locator;
    readonly starshipsLinkBtn: Locator;
    readonly actorsLinkBtn: Locator;
    readonly modalWindow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginBtn = page.locator('button[data-testid="log-in-btn"]');
        this.signupBtn = page.locator('button[data-testid="signup-btn"]');
        this.logoutBtn = page.getByTestId('log-out-btn');
        this.loggedUser = page.locator('[data-testid="logged-user"]');

        this.homeLinkBtn = page.getByTestId('nav-home');
        this.starshipsLinkBtn = page.getByTestId('nav-starships');
        this.actorsLinkBtn = page.locator('a[data-testid="nav-actors"]');
        this.modalWindow = page.locator('div.modal');
    }
    
}