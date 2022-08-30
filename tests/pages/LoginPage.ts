import { Locator, Page } from '@playwright/test';
import { MainPage } from './MainPage';
export class LoginPage extends MainPage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signinBtn: Locator;
    readonly newAccountCreateBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('data-testid=name');
        this.passwordInput = page.locator('data-testid=password');
        this.signinBtn = page.locator('data-testid=signin-btn');
        this.newAccountCreateBtn = page.locator('data-testid=create-acc-btn');
    }
}