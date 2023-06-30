import { Locator, Page } from "@playwright/test";

export class SignupPage {
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly createAccountBtn: Locator;
    readonly closeModalWindowBtn: Locator;
    readonly signinLinkBtn: Locator;

    constructor(private page: Page) {
        this.firstNameInput = page.getByTestId('firstname');
        this.lastNameInput = page.getByTestId('lastname');
        this.emailInput = page.getByTestId('email');
        this.usernameInput = page.getByTestId('displayname');
        this.passwordInput = page.getByTestId('password');
        this.createAccountBtn = page.getByTestId('submit-btn');
        this.closeModalWindowBtn = page.getByTestId('modal-close-btn');
        this.signinLinkBtn = page.getByTestId('signin-link');
    }
}