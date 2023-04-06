// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';
import { SignupSteps } from './tests/steps/Signup.steps';
import { User } from './tests/model/User';

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL!, {timeout: 90000});

  const newUser: User = {
        firstname: "Han", 
        lastname: "Solo", 
        email: "Han@solo.com", 
        displayname: "HanSolo", 
        password: "HanSolo1"} as User;
  const signupSteps = new SignupSteps(page); 
  await signupSteps.signupBtn.click();
  await signupSteps.fillSignUpForm(newUser);
  await page.context().storageState({ path: "state.json" });
  await browser.close();
}

export default globalSetup;