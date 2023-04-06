import { test, expect } from '@playwright/experimental-ct-react17'
import SearchForm from '../../src/components/SearchForm/SearchForm'

test.describe('[Component] Test examples', async () => {
    test('[Component] SearchForm component testing', async ({ mount }) => {
        const props = {
            openLoginModal: true,
            openRegisterModal: true,
            logged: {
                display: 'Nobody',
                login: true,
            },
            setLogin: {
                display: '',
                login: false,
            },
        }
        const searchFromComponent = await mount(
            <SearchForm
                openLoginModal={true}
                openRegisterModal={props.openRegisterModal}
                logged={props.logged}
                setLogged={props.setLogin}
            />
        )
        expect(await searchFromComponent.getByTestId('logged-user')).toHaveText(
            props.logged.display
        )
        await searchFromComponent.getByTestId('search-input').fill('Yavin')
        expect(
            (await searchFromComponent
                .getByTestId('search-input')
                .inputValue()) === 'Yavin'
        ).toBeTruthy()
    })
})
