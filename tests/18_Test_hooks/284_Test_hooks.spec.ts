import { test, expect } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter.html';

test('testing for title', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox', 'Skipping test for firefox');
    await page.goto(URL);
    await expect(page).toHaveTitle(/Multiple Element Filter/, { timeout: 15000 });

});

test('test email is vissiable(sloe on firefox', async ({ page, browserName }) => {
    test.slow(browserName === 'firefox', 'firefox is slow on this layout');
    await page.goto(URL);

    await expect(page.getByRole('textbox', { name: 'Email Address' })).toBeVisible();

});

test.fixme('passowrd is vissiable broken in safari ,fix me', async ({ page }) => {
    // test.slow(browserName === 'firefox', 'firefox is slow on this layout');
    await page.goto(URL);

    await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();

});