import { Locator, Page } from "@playwright/test";
import { MainPage } from './Main.page';

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