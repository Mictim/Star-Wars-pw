import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signinBtn: Locator;
    readonly newAccountCreateBtn: Locator;

    constructor(private page: Page) {
        this.usernameInput = page.getByTestId('name');
        this.passwordInput = page.getByTestId('password');
        this.signinBtn = page.getByTestId('signin-btn');
        this.newAccountCreateBtn = page.getByTestId('create-acc-btn');
    }
}