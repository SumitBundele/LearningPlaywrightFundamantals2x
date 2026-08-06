import { test, expect } from '@playwright/test';
import path from 'path';
import { readYAML } from './util/yamlReader';

test.describe('DDT YAML', () => {

    let loginData = readYAML(path.join(__dirname, '/test-data/login-data.yml'));

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
    });

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {

            let textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            let textboxPassword = page.getByRole("textbox", { name: "Password" })
                .or(page.locator("#password"))
                .or(page.locator("[name=\"password\"]"));
            let buttonLoginToPracticeAccount = page.getByRole("button", { name: "Login to Practice Account" })
                .or(page.getByTestId("login-button"))
                .or(page.getByText("Login to Practice Account"));

            await textboxEmailAddress.fill(String(data.username));
            await textboxPassword.fill(String(data.password));
            await buttonLoginToPracticeAccount.click();

            // if (data.shouldPass === true || data.shouldPass === "true") {
            //     await expect(page).not.toHaveURL(/multiple_element_filter/);
            // } else {
            //     await expect(page.getByText(String(data.expectedError))).toBeVisible();
            // }
        });

    }

});
