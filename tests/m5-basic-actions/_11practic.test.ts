import { test, expect } from '@playwright/test';

test('Test form validation messages reset', async ({ page }) => {
    
    await page.goto('');
    
    await page.getByRole('button', { name: 'Register' }).click();

    const feedback = page.locator('.invalid-feedback');

    await expect(feedback).toHaveCount(3);

    await page.reload();

    const invalidFirstName = page.getByText('Valid first name is required')

    await expect(invalidFirstName).toBeVisible({ visible: false });
})