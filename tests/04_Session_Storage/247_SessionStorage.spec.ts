import { test, expect } from "@playwright/test";

// Run tests in this file sequentially so the session is saved before it is reused
test.describe.configure({ mode: "serial" });

test("Save session storage after login", async ({ browser }) => {
    test.setTimeout(60000);

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://app.wingify.com/#/login");
    await page.waitForTimeout(2000);

    // Use robust locators that work on both app.vwo.com and app.wingify.com
    await page.locator('#login-username').fill("opg73@singleuseemail.site");
    await page.locator('input[type="password"]').first().fill("Wingify@4321");
    await page.waitForTimeout(1500);

    await page.locator('#js-login-btn, button:has-text("Sign in")').first().click();

    // Wait for login to actually complete before snapshotting storage —
    // otherwise the auth cookie isn't set yet and the saved state is empty.
    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 30000 });
    await page.waitForTimeout(3000);

    // When dashboard page is loaded we can store the session in ({ path: "./user-session.json" });
    await context.storageState({ path: "./user-session.json" });
    console.log("Session saved to user-session.json ✅");
    await page.waitForTimeout(2000);

    await context.close();
});

test("Load dashboard using saved session storage", async ({ browser }) => {
    test.setTimeout(60000);

    // Create a context that reuses the previously saved session state
    const context = await browser.newContext({
        storageState: "./user-session.json",
    });
    const page = await context.newPage();

    // Navigate directly to the dashboard — no login needed!
    await page.goto("https://app.wingify.com/#/dashboard");
    await page.waitForTimeout(3000);

    // Verify we landed on the dashboard (not redirected back to login)
    await expect(page).toHaveURL(/#\/dashboard/);

    // Example assertion: check that a dashboard element is visible
    // Adjust the selector to match an actual dashboard element on your site
    const dashboardHeader = page.locator("text=Dashboard").first();
    await expect(dashboardHeader).toBeVisible();

    console.log("Dashboard loaded successfully using saved session ✅");

    await context.close();
});
