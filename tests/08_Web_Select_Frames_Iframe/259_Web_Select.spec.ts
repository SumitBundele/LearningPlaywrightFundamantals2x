import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Select option', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown", "option 2");
    await page.pause();





});