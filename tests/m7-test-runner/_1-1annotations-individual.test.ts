import { test, expect } from '@playwright/test';

test.skip('Will not run', async () => {

    console.log('This should not be printed!')
});

test('Skip (un)conditionally', async ({ page, browserName}) => {

    test.skip(browserName === 'chromium', 'Does not work on Chromium, tiucket ABC-123');

    test.skip(await page.getByTestId('someId').count() === 0, 'Skipping because at least 1 element X must be visible');
});