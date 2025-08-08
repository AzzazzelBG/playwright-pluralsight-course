import { test, chromium, devices } from '@playwright/test';

const iPad = devices['iPad Pro 11'];

const slowAndHeadless = { headless: false, slowMo: 2000 }

interface LocationData {
    latitude: number;
    longitude: number;
}

const locationCoordinates: Record<string, LocationData> = {
    London: { latitude: 51.509865, longitude: -0.118092 },
    Rome: { latitude: 41.9027835, longitude: 12.4963655 }
};

const london = locationCoordinates['London'];
const rome = locationCoordinates['Rome'];

test('Test 1', async () => {

    const browser = await chromium.launch(slowAndHeadless);

    const context = await browser.newContext({
        geolocation: { longitude: london.longitude, latitude: london.latitude }
    });
});

test('Test 2', async () => {

    const browser = await chromium.launch(slowAndHeadless);

    const context = await browser.newContext({
        viewport: iPad.viewport,
        userAgent: iPad.userAgent,
        deviceScaleFactor: iPad.deviceScaleFactor,
        locale: 'en_GB',
        geolocation: { longitude: london.longitude, latitude: london.latitude },
        permissions: ['geolocation']
    });

    const page = await context.newPage();

    await page.goto('https://maps.google.com');
    await page.getByRole('button', { name: 'Accept all' }).click();
    await page.getByRole('button', { name: 'Stay on web' }).click();
    await page.screenshot({ path: 'London-iPad.png' });
});