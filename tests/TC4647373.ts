import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click input[name="search"]
  await page.locator('input[name="search"]').click();

  // Fill input[name="search"]
  await page.locator('input[name="search"]').fill('curry');

  // Click text=CurrySpicy Asian or Asian-influenced dishes
  await page.locator('text=CurrySpicy Asian or Asian-influenced dishes').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Curry');

  // Click text=Random article
  await page.locator('text=Random article').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Kanto_Gakuin_University');

  // Click #toc >> text=Organization
  await page.locator('#toc >> text=Organization').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Kanto_Gakuin_University#Organization');

});