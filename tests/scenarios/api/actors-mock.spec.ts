import { test } from '../../fixtures/api-fixtures'
import { expect, Page } from '@playwright/test'
import { ActorDetails } from '../../model/dto/ActorDetails'
import { Utils } from '../../util/Utils'

test('[API] Actor API Mock example', async ({ context, apiBaseUrl }) => {
    const page = await test.step(`Prepare mocked data`, async () => {
        const actor: ActorDetails = {
            name: 'Mike Jones',
            height: '17',
            mass: '',
            hair_color: 'black',
            skin_color: 'white',
            eye_color: 'brown',
            birth_year: '1983',
            gender: 'Male',
            homeworld: 'Earth',
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            created: '',
            edited: '',
            url: '',
        }
        const page: Page = await context.newPage()
        await page.route(`${apiBaseUrl}/people/1/`, async (route) => {
            const response = await route.fetch()
            const json = JSON.stringify(actor)
            await route.fulfill({ status: 200, body: json })
        })
        return page
    })

    await test.step(`Get Response from "**/people/1/" endpoint`, async () => {
        const response = await page.goto(`${apiBaseUrl}/people/1/`)
        const jsonResponse = (await response!.json()) as unknown as ActorDetails
        expect(jsonResponse.name, ` ${jsonResponse.name}`).toBe('Mike Jones')
        Utils.attachJson(JSON.stringify(jsonResponse), "ActorDetail's Response")
    })
})
