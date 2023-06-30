import { Locator, Page, test } from "@playwright/test";

export class PageUtils {
    constructor(private page: Page) {
        
    }

    async getResponse<T>(endpoint: string, element: Locator): Promise<T> {
        return await test.step(`get response from endpoint: ${endpoint}`, async() => {
            const [response] = await Promise.all([
                this.page.waitForResponse(endpoint, {timeout: 30000}),
                element.click()
            ]);
            if(response.ok()) {
                test.info().attach(`Response for ${endpoint} endpoint`, 
                {
                    body: JSON.stringify(await response.json()), 
                    contentType:'application/json'
                });
                return response.json() as unknown as T;
            } else {
                throw new Error (`Response for ${endpoint} failed with status: ${response.status()}`);
            }
        });
    }
}