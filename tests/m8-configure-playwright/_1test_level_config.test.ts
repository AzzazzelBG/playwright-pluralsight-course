import { test, chromium } from '@playwright/test';

test('Playwright: top-level API', async ({ playwright }) => {

    const firefoxType = await playwright.firefox.launch();
    const ctx = await firefoxType.newContext();
    const page = await ctx.newPage();

    await page.goto('');

    const chromium = await playwright.chromium.launch();
});

test('Config of Browser / Context', async () => {

    const browser = await chromium.launch({
        headless: false,
        slowMo: 2000,
        downloadsPath: 'your/path'
    });

    const context = await browser.newContext({
        baseURL: 'https://google.com/',
        timezoneId: 'America/New_York',
        locale: 'es-ES',
        geolocation: { longitude: 12.492507, latitude: 41.889938 },
        viewport: { width: 600, height: 400 },
        javaScriptEnabled: true,
        acceptDownloads: true
    });

    const page = await context.newPage();
    await page.goto('');
    await page.getByRole('button', { name: 'Aceptar todo' }).click();
})