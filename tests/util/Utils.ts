import { MainPage } from '../pages/Main.page';
import { Page, test, expect, Locator } from '@playwright/test';

export class Utils {

    /**
     * Attach JSON to the report
     * @param body - Body for attached JSON, e.g. Response from endpoint 
     * @param description - name/description of the JSON
     */
    static attachJson(body: any, description: string) {
        test.info().attach(description, {contentType: "application/json", body: body});
    }

}