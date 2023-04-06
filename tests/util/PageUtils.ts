import { MainPage } from '../pages/Main.page';
import { Page, test, expect, Locator } from '@playwright/test';

export class PageUtils {
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

    /**
     * Method returns method casted to generic type of the response
     * @param endpoint Endpoint url(regex)
     * @param btn Button on which user click, to perform Request
     * @returns Serialized Object of class T
     */
    async getResponse<T>(endpoint: string, btn: Locator): Promise<T> {
        return await test.step('Open page', async() => {
            const [response] = await Promise.all([
                this.page.waitForResponse(endpoint, {timeout: 30000}),
                btn.click(),
            ])
            if (response.ok()) {
                return response.json() as unknown as T;
            } else {
                throw new Error(`Response for endpoint is failed with status: ${response.status()}`);
            }
        })
    }
}