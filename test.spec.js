import { test, expect } from '@playwright/test';
import path from 'path';

test('Verify website has the correct title', async ({ page }) => {
  const filePath = path.resolve('index.html');
  await page.goto(`file://${filePath}`);
  await expect(page).toHaveTitle('My Awesome Website');
});

