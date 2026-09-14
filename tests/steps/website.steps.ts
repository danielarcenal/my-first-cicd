import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import path from 'path';

const { Given, Then } = createBdd();

Given('I open the local website file', async ({ page }) => {
  const filePath = path.resolve(__dirname, '../../../index.html');
  await page.goto(`file://${filePath}`);
});

Then('the browser page title should say {string}', async ({ page }, expectedTitle: string) => {
  await expect(page).toHaveTitle(expectedTitle);
});

