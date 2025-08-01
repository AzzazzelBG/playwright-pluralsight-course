import { test, chromium } from '@playwright/test';

test('Test with Page fixture', async ({ page }) => {

    await page.goto('http://playwright.dev/');

    console.log("Text content: ", await page.title());
});

test('Other fixtures', async ({ browserName, browser, context, page }) => {

    const page1 = await context.newPage();
    const page2 = await context.newPage();

});
