import { test, expect } from "@playwright/test";

test("Multi-user test with separate browser contexts", async ({ browser }) => {
    // Admin user context
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login");
    console.log("Admin: on login page");
    await expect(adminPage).toHaveURL(/login/);

    // Viewer user context
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/login");
    console.log("Viewer: on login page");
    await expect(viewerPage).toHaveURL(/login/);

    await adminContext.close();
    await viewerContext.close();
});
