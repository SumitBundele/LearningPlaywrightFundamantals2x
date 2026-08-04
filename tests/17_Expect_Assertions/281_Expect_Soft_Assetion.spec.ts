import { test, expect } from '@playwright/test';


test('3 soft assetion and Negation', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
    const firstName = page.getByTestId('first-name');
    //soft assertion -each line records its own failure and continues to execute the next line of code eitherway
    await expect.soft(firstName).toHaveAttribute('id', 'first-name');
    await expect.soft(firstName).toBeVisible();
    await expect.soft(firstName).toHaveValue('');
//hard assertion - if this line fails , the test will stop executing and will not execute the next line of code
    await expect(firstName).toHaveAttribute('id', 'first-name');
    //line no 14 will not be executed if line 13 fails
    await expect(firstName).toBeVisible();
    await expect(firstName).toHaveValue('');


})
