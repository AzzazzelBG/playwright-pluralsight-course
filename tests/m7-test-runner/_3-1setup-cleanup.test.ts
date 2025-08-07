import { test, expect } from '@playwright/test';

test.beforeEach('Meaningful description', async ({page}) => {
    console.log('Before each setup');
    page.goto('');
})

test('Test 1', async ({ page }) => {
    console.log('Test 1');
    await expect(page.getByRole('button')).toHaveCount(3);
});

test('Test 2', async ({ page }) => {
    console.log('Test 2');
    await expect(page.getByRole('checkbox')).toHaveCount(1);
})