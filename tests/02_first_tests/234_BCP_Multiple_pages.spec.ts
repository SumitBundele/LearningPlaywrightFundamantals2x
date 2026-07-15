import { test, expect } from "@playwright/test";

test("Multiple tabs inside a single context", async ({ browser }) => {
    let context = await browser.newContext();

    // Tab 1
    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");
    console.log("Tab 1: Login");
    await expect(page1).toHaveURL(/login/);

    // Tab 2 — same context, shares cookies with Tab 1
    let page2 = await context.newPage();
    await page2.goto("https://app.vwo.com/#dashboard");
    console.log("Tab 2: Dashboard");
    // Unauthenticated users are redirected to login; assert the page loaded
    await expect(page2).toHaveURL(/login|dashboard/);

    await context.close();
});
