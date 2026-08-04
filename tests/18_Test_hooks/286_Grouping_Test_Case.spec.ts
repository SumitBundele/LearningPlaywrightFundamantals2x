import { test, expect } from '@playwright/test';

test.describe('Login Feature', () => {
  test('User should be able to login and view dashboard', async ({ page }) => {
    await test.step('Navigate to login page', async () => {
      await page.goto('https://example.com/login');
      await expect(page).toHaveTitle(/Login/);
    });

    await test.step('Enter valid credentials and submit', async () => {
      await page.fill('#username', 'validUser');
      await page.fill('#password', 'validPassword');
      await page.click('#login-button');
    });

    await test.step('Verify user is redirected to dashboard', async () => {
      await expect(page).toHaveURL(/dashboard/);
      await expect(page.locator('h1')).toHaveText('Dashboard');
    });
  });
});
