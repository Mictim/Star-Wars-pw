import { NewUser } from '../model/NewUser';
import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';
import { User } from '../model/User';
import { LoginSteps } from './LoginSteps';

export class SignupSteps extends SignupPage {

    async createUser(newUser: NewUser): Promise<NewUser> {
        const user: NewUser = 
            await test.step(`Signup to the application with the user: ${newUser.displayname}`, async() => {
                await this.signupBtn.click();
                await this.fillSignUpForm(newUser);
                return newUser;
            })
        return user;
    }

    async signin(user: User): Promise<User> {
        return await test.step(`Sign in to webpage from Sign up modal window for user: ${user.username}`, async() => {
            await this.signupBtn.click();
            await this.signinLinkBtn.click();
            await new LoginSteps(this.page).fillLoginForm(user);
            return user;
        })
    }
    
    async fillSignUpForm(newUser: NewUser): Promise<void> {
        await this.firstNameInput.fill(newUser.firstname);
        await this.lastNameInput.fill(newUser.lastname);
        await this.emailInput.fill(newUser.email);
        await this.usernameInput.fill(newUser.displayname);
        await this.passwordInput.fill(newUser.password);
        await this.createAccountBtn.click();
        await expect(this.modalWindow).toHaveText('Registration Completed');
        await this.closeModalWindowBtn.click();
                
    }
}