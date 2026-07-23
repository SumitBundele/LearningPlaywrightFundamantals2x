import { test, expect } from '@playwright/test';

test('Hover and click requirect option', async ({ page }) => {

    await page.goto("https://www.spicejet.com");
    await page.pause();
    await page.getByText("Add-ons", { exact: true }).hover();
    await page.getByTestId('test-id-FlyEarly').click();

});
