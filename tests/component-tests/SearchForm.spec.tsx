import { test, expect } from "@playwright/experimental-ct-react17";
import SearchForm from '../../src/components/SearchForm/SearchForm';

test('[Component] SearchForm Component testing', async({ mount}) => {
    const props = {
        openLoginModal: true,
        openRegisterModal: true,
        logged: {
            display: 'Nobody',
            login: true
        },
        setLogin: {
            display: '',
            login: false
        }
    };

    const searchFormComponent = await mount(
        <SearchForm
            openLoginModal={true}
            openRegisterModal={props.openRegisterModal}
            logged={props.logged}
            setLogged={props.setLogin}
        />
    )

    expect(await searchFormComponent.getByTestId('logged-user')).toHaveText(props.logged.display);

    await searchFormComponent.getByTestId('search-input').fill('Yavin');
    expect(await searchFormComponent.getByTestId('search-input').inputValue() === 'Yavin').toBeTruthy();
})