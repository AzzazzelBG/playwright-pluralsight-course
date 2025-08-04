import { test, expect } from '@playwright/test';

test('Check test', async ({ page }) => {

    await page.goto('/');
    await expect(page).toHaveTitle('Credit Association');

    const checkbox = page.getByRole('checkbox');
    const textarea = page.locator('#textarea');
    const message = 'Recommended by a friend';

    await expect(textarea).toBeDisabled();
    await expect(textarea).toBeEmpty();

    await checkbox.check();
    await expect(textarea).toBeEnabled();

    await textarea.fill(message);
    await expect(textarea).toHaveValue(message);

    await page.getByRole('button', { name: 'Register' }).click();

    const feedback = page.locator('.invalid-feedback');
    await expect(feedback).toHaveCount(3);

    for(const message of await feedback.all()) {
        await expect(message).toBeVisible();
    }

    await expect(feedback.first()).toContainText('Valid first name is required');
});

test('Test with soft assertions', async ({ page }) => {

    await page.goto('/');

    await expect.soft(page.getByTestId('location')).toContainText('Mumbai');
    await expect.soft(page.getByTestId('location')).toContainText('Tokyo');

    await expect.soft(page.getByTestId('location')).toContainText('New York');
})