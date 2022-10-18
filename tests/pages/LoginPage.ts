import { Locator, Page } from '@playwright/test';
import { MainPage } from './MainPage';

export class LoginPage extends MainPage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signinBtn: Locator;
    readonly newAccountCreateBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByTestId('name');
        this.passwordInput = page.getByTestId('password');
        this.signinBtn = page.getByTestId('signin-btn');
        this.newAccountCreateBtn = page.getByTestId('create-acc-btn');
    }
}