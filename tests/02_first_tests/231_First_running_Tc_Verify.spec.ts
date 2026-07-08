// import { test, expect } from '@playwright/test'

// test('Verify our first test case', async ({ page }) => {
//     await page.goto("https://app.vwo.com");
//     await expect(page).toHaveTitle("Login - Wingify");
//     const logo_img = page.getByAltText('Wingify', { exact: true });
//     await expect(logo_img).toBeVisible();

// })

import { test, expect } from '@playwright/test'

test('Verify our first test case', async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
    const logo_img = page.getByAltText('Wingify', { exact: true });
    await expect(logo_img).toBeVisible();
})