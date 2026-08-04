import { test, expect } from '@playwright/test';

test('visiable enabled disabeld check', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');

    const checkbox1 = await page.getByTestId('tool-uft');
    //checkbox1.isVisible();
    await checkbox1.check();
    //await expect(checkbox1).not.toBeChecked();


    const submitButton = page.getByTestId('profile-submit');
    await expect(submitButton).toBeEnabled();
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeDisabled();

    await expect(page).toHaveTitle(/QA Profile/);

    const appURL = await page.url();
    expect(appURL).toContain('thetestingacademy');

    await page.pause();


});