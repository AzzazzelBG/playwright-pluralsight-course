import { test, expect } from '@playwright/test';

test('Fill test', async ({ page }) => {

    await page.goto('/');

    await page.getByLabel('First name').fill('Aleks');

    await page.getByLabel('Date of birth').fill('2023-10-10');
});