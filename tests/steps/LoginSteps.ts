import { User } from "../model/User";
import {test} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { NewUser } from '../model/NewUser';
import { SignupSteps } from './SignupSteps';

export class LoginSteps extends LoginPage {
    async login(user: User): Promise<User> {
        return await test.step(`Login to webpage as ${user.username}`, async() => {
            await this.loginBtn.click();
            await this.fillLoginForm(user);
            return user;
        })
    }

    async signup(newUser: NewUser): Promise<NewUser> {
        return await test.step(`Create a new user from login Page for user: ${newUser.displayname}`, async() => {
            await this.loginBtn.click();
            await this.newAccountCreateBtn.click();
            await new SignupSteps(this.page).fillSignUpForm(newUser);
            return newUser;
        })
    }

    async fillLoginForm(user: User) {
        await this.usernameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
        await this.signinBtn.click();
    }
}