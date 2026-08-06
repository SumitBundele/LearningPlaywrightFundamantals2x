import { test, expect } from '@playwright/test';
import path from 'path';
import { readMySQL, getMockLoginData, MySQLConfig } from './util/mysqlReader';

test.describe('DDT MySQL', () => {

    // For Playwright test discovery, data must be available synchronously at module load time.
    // Use getMockLoginData() here. When a real MySQL DB is available, you can either:
    //   1) Export query results to a JSON file before running tests, or
    //   2) Load via Playwright's globalSetup (see playwright.config.ts).
    let loginData = getMockLoginData();

    test.beforeAll(async () => {
        // Example: fetch live data from MySQL (async — use in hooks or inside tests)
        let config: MySQLConfig = {
            host: process.env.MYSQL_HOST || 'localhost',
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || '',
            database: process.env.MYSQL_DATABASE || 'testdb',
            port: Number(process.env.MYSQL_PORT) || 3306,
        };

        try {
            let liveData = await readMySQL(config, 'SELECT * FROM login_data');
            console.log('MySQL live data rows:', liveData.length);
            // You could assign liveData to a shared variable for use inside tests
        } catch (error) {
            console.warn('MySQL connection failed (expected in demo env):', (error as Error).message);
        }
    });

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
            //     await expect(page.getByText(data.expectedError)).toBeVisible();
            // }
        });

    }

});
