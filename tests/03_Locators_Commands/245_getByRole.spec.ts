import { test, expect } from '@playwright/test';

test('Verify lazy ,strict,and autowait', async ({ page }) => {

    page.goto("https://https://katalon-demo-cura.herokuapp.com/");

    await page.getByRole("link", { name: 'Make Appointment', disabled: false }).click();


});