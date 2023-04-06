import { selectors, test as base } from '@playwright/test'
import { User } from '../model/User'
import { LoginPage } from '../pages/Login.page'
import { MainPage } from '../pages/Main.page'
import { SignupPage } from '../pages/Signup.page'
import { LoginSteps } from '../steps/Login.steps'
import { SignupSteps } from '../steps/Signup.steps'
import { ActorsPage } from '../pages/Actors.page'
import { PageUtils } from '../util/PageUtils'
import { ActorsSteps } from '../steps/Actors.steps'

type TestOptions = {
    defaultUser: User
    newUser: User
    signupPage: SignupPage
    signupSteps: SignupSteps
    loginPage: LoginPage
    loginSteps: LoginSteps
    mainPage: MainPage
    utils: PageUtils
    actorsPage: ActorsPage
    actorsSteps: ActorsSteps
    apiBaseUrl: string
}

export const test = base.extend<TestOptions>({
    page: async ({ browser, baseURL, defaultUser }, use) => {
        selectors.setTestIdAttribute('data-testid')
        const context = await browser.newContext({
            storageState: 'state.json',
            recordHar: {
                path: './tests/resources/har/login.har',
                urlFilter: '**/api/**',
            },
        })
        const page = await context.newPage()
        await page.goto(baseURL!)
        await page.getByTestId('log-in-btn').click()
        await page.getByTestId('name').fill(defaultUser.displayname)
        await page.getByTestId('password').fill(defaultUser.password)
        await page.getByTestId('signin-btn').click()
        await use(page)
        await context.close()
    },
    defaultUser: ({}, use) => {
        use({ displayname: 'HanSolo', password: 'HanSolo1' } as User)
    },
    newUser: ({}, use) => {
        use({
            firstname: 'Luke',
            lastname: 'Skywalker',
            email: 'Luke@Skywalker.com',
            displayname: 'LukeSky',
            password: 'TheForce',
        } as User)
    },
    signupPage: async ({ page }, use) => {
        await use(new SignupPage(page))
    },
    signupSteps: async ({ page }, use) => {
        await use(new SignupSteps(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    loginSteps: async ({ page }, use) => {
        await use(new LoginSteps(page))
    },
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page))
    },
    actorsPage: async ({ page }, use) => {
        await use(new ActorsPage(page))
    },
    utils: async ({ page }, use) => {
        await use(new PageUtils(page))
    },
    actorsSteps: async ({ page }, use) => {
        await use(new ActorsSteps(page))
    }
})

export { expect } from '@playwright/test'
