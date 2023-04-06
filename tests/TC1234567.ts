import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click input[name="search"]
  await page.locator('input[name="search"]').click();

  // Fill input[name="search"]
  await page.locator('input[name="search"]').fill('Playwright');

  // Click button:has-text("Search")
  await page.locator('button:has-text("Search")').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Playwright');

  // Click text=Main page
  await page.locator('text=Main page').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Main_Page');

  // Click text=Current events
  await page.locator('text=Current events').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Portal:Current_events');

});