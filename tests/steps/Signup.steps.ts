import { test, expect, Page } from '@playwright/test';
import { SignupPage } from '../pages/Signup.page';
import { User } from '../model/User';
import { LoginSteps } from './Login.steps';

export class SignupSteps extends SignupPage {
    readonly loginSteps: LoginSteps;

    constructor(page: Page) {
        super(page);
        this.loginSteps = new LoginSteps(page);
    }

    async createUser(newUser: User): Promise<User> {
        const user: User = 
            await test.step(`Signup to the application with the user: ${newUser.displayname}`, async() => {
                await this.signupBtn.click();
                await this.fillSignUpForm(newUser);
                return newUser;
            })
        return user;
    }

    async signin(user: User): Promise<User> {
        return await test.step(`Sign in to webpage from Sign up modal window for user: ${user.displayname}`, async() => {
            await this.signupBtn.click();
            await this.signinLinkBtn.click();
            await this.loginSteps.fillLoginForm(user);
            return user;
        })
    }
    
    async fillSignUpForm(newUser: User): Promise<void> {
        await this.firstNameInput.fill(newUser.firstname!);
        await this.lastNameInput.fill(newUser.lastname!);
        await this.emailInput.fill(newUser.email!);
        await this.usernameInput.fill(newUser.displayname);
        await this.passwordInput.fill(newUser.password);
        await this.createAccountBtn.click();
        await expect(this.modalWindow.locator('h1'), `Check if user: ${newUser.displayname} was created successfully`).toHaveText('Registration Completed');
        await this.closeModalWindowBtn.click();
                
    }
}