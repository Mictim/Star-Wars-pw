import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=SIGN UP
  await page.locator('text=SIGN UP').click();

  // Fill [placeholder="First Name"]
  await page.locator('[placeholder="First Name"]').fill('Han');
  
  // Fill [placeholder="Last Name"]
  await page.locator('[placeholder="Last Name"]').fill('Solo');

  // Fill [placeholder="Email Address"]
  await page.locator('[placeholder="Email Address"]').fill('han.solo@gmail.com');


  // Fill [placeholder="Display Name"]
  await page.locator('[placeholder="Display Name"]').fill('HanSolo');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('HS1234');

  // Click text=Create Account
  await page.locator('text=Create Account').click();

  await page.locator('button[data-testid="modal-close-btn"]').click();

  // Click text=LOG IN
  await page.locator('text=LOG IN').click();

  // Fill [placeholder="Username or Email Address"]
  await page.locator('input[data-testid="name"]').fill('HanSolo');
  
  // Fill [placeholder="Password"]
  await page.locator('input[data-testid="password"]').fill('HS1234');

  // Click [aria-label="Sign in"]
  await page.locator('[aria-label="Sign in"]').click();

  // Click li:has-text("STARSHIPS")
  await page.locator('li:has-text("STARSHIPS")').click();
  await expect(page).toHaveURL('/starships');

  // Click [data-testid="element-2"]
  await page.locator('[data-name="Star Destroyer"]').click();
  await expect(page).toHaveURL('/starships/3');

  // Click text=ACTORS
  await page.locator('text=ACTORS').click();
  await expect(page).toHaveURL('/actors');

  // Click li:has-text("R2-D2")
  await page.locator('li:has-text("R2-D2")').click();
  await expect(page).toHaveURL('/actors/3');

  // Click text=LOG OUT
  await page.locator('text=LOG OUT').click();
  await expect(page).toHaveURL('http://localhost:3000/');

});