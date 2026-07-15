import { test, expect } from "@playwright/test";

// This concept is only for learning purpose — will not be used in testing or creating test cases like this.
test("Browser → Context → Page hierarchy demo", async ({ browser }) => {
    // Level 1 - Launch a Browser (heaviest operation)
    console.log("Browser Launched ", browser);

    // Every browser has multiple contexts — from Browser we can create contexts
    // Level 2 - Create context (fresh session, isolated cookies)
    let context1 = await browser.newContext();
    console.log("Context 1 Created ", context1);

    let context2 = await browser.newContext();
    console.log("Context 2 Created ", context2);

    // Level 3 — a Tab inside Contexts
    let page = await context1.newPage();
    console.log("Page One");

    await page.goto("https://app.vwo.com");
    const title = await page.title();
    console.log("Title:", title);
    await expect(page).toHaveTitle(/Wingify|VWO/);

    // Cleanup Reverse Order (Playwright also auto-cleans, but explicit for learning)
    await page.close();
    await context1.close();
    await context2.close();
});
