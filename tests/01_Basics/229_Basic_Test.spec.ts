//this is test file ..playwright will recoganize  test with "spec.ts"

import { test, expect } from '@playwright/test';
test("Verify the Title", async ({ page }) => { //page is calles as fixture (injected by Palywright)
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");

});