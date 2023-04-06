import { MainPage } from '../pages/MainPage';
import { Page, expect } from '@playwright/test';
export class Utils {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkIfUserLogged(): Promise<boolean> {
        return new MainPage(this.page).loginBtn.isHidden();
    }
    
    async logoutWhenUserLoggedIn(): Promise<void> {
        const mainPage = new MainPage(this.page);
        if (await this.checkIfUserLogged()) {
            await mainPage.logoutBtn.click();
        }
        await expect.soft(mainPage.loggedUser).not.toBeVisible();
        await expect.soft(mainPage.loginBtn).toBeEnabled();
    }
}