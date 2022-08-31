import { Locator, Page } from "@playwright/test";
import { MainPage } from './MainPage';

export class SignupPage extends MainPage {
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly createAccountBtn: Locator;
    readonly closeModalWindowBtn: Locator;
    readonly signinLinkBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.firstNameInput = page.locator('data-testid=firstname');
        this.lastNameInput = page.locator('data-testid=lastname');
        this.emailInput = page.locator('data-testid=email');
        this.usernameInput = page.locator('data-testid=displayname');
        this.passwordInput = page.locator('data-testid=password');
        this.createAccountBtn = page.locator('data-testid=submit-btn');
        this.closeModalWindowBtn = page.locator('data-testid=modal-close-btn');
        this.signinLinkBtn = page.locator('data-testid=signin-link');
    }
}