import { Page, test } from "@playwright/test";
import { SignupPage } from "../pages/signup-page";
import { LoginPage } from "../pages/login-page";
import { MainPage } from "../pages/main-page";
import { UserDetails, defaultUser } from "../model/user-details";

export class MainSteps {

    readonly mainPage: MainPage; 
    readonly signupPage: SignupPage; 
    readonly loginPage: LoginPage; 

    constructor(protected page: Page) {
        this.mainPage = new MainPage(page);
        this.signupPage = new SignupPage(page);
        this.loginPage = new LoginPage(page);
    }

    async signupUser(user: UserDetails = defaultUser): Promise<void> {
        await test.step(`Create a new user: ${user.username}`, async() => {
            await this.signupUserStep(user);
        });
    }

    async loginAsUser(name: string, password: string): Promise<void> {
        await test.step(`Login as user: ${name}`, async() => {
            await this.mainPage.loginBtn.click();
            await this.loginPage.usernameInput.fill(name);
            await this.loginPage.passwordInput.fill(password);
            await this.loginPage.signinBtn.click();
        })
    };

    async signupUserStep(user: UserDetails) {
        await this.mainPage.signupBtn.click();
        await this.signupPage.firstNameInput.fill(user.firstname);
        await this.signupPage.lastNameInput.fill(user.lastname);
        await this.signupPage.emailInput.fill(user.email);
        await this.signupPage.usernameInput.fill(user.username);
        await this.signupPage.passwordInput.fill(user.password);
        await this.signupPage.createAccountBtn.click();
        await this.signupPage.closeModalWindowBtn.click();
    }

}