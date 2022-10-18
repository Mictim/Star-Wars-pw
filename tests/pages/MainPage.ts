import { Locator, Page } from "@playwright/test";
import { Actors } from "../model/dto/Actors";
import { Starships } from '../model/dto/Starships';
import { test } from '@playwright/test';

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
        this.actorsLinkBtn = page.getByTestId('nav-actors');
        this.modalWindow = page.locator('div.modal');
    }

    async openActorsPage(): Promise<Actors> {
        return await test.step('Open Actors page', async() => {
            const [response] = await Promise.all([
                this.page.waitForResponse('**/people/', {timeout: 15000}),
                this.actorsLinkBtn.click(),
            ])
            if (response.status() === 200) {
                return response.json() as unknown as Actors;
            } else {
                throw new Error(`Response for people endpoint is failed with status: ${response.status()}`);
            }
        })
    }

    async openStarshipsPage(): Promise<Starships> {
        const [response] = await Promise.all([
            this.page.waitForResponse('**/starships/', {timeout: 15000}),
            this.actorsLinkBtn.click(),
        ])
        if (response.status() === 200) {
            return response.json() as unknown as Starships;
        } else {
            throw new Error(`Response for failed with status: ${response.status()}`);
        }
    }
}