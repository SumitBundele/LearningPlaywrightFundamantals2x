import { test, expect } from '@playwright/test';

test('Verify lazy ,strict,and autowait', async ({ page }) => {

    page.goto("https://awesomeqa.com/practice.html");

    await page.locator('[name="firstname"]').pressSequentially("the testing academy sumit", { delay: 200 });
    await page.waitForTimeout(5000);

    await page.goto("https://app.vwo.com/login");
    await page.goBack();
    await page.waitForTimeout(5000);


});