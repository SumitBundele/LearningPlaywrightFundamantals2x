import { test, expect } from '@playwright/test';
import testData from './test-data/292_Test_Data.json';


test.describe('Login Tests', () => {

    test('Login with Valid User', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
        await page.locator("#email").fill(testData.validUser.username);
        await page.locator("#password").fill(testData.validUser.password);

        await page.getByTestId("login-button").click();


    });

    test('Login with Invalid User', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
        await page.locator("#email").fill(testData.invalidUser.username);
        await page.locator("#password").fill(testData.invalidUser.password);

        await page.getByTestId("login-button").click();


    });

});