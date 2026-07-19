import { test, expect } from "@playwright/test";
import * as fs from "fs";
//load Save session alreayd logged in

test.use({
    storageState: "./user-session.json"
});//this function will be automatically be calles by the page fixtures

test.afterEach(async ({ }, testInfo) => {
    const screenshotPath = testInfo.outputPath("test-finished-1.png");
    const failedScreenshotPath = testInfo.outputPath("test-failed-1.png");
    const videoPath = testInfo.outputPath("video.webm");

    if (fs.existsSync(screenshotPath)) {
        await testInfo.attach("Screenshot", { path: screenshotPath, contentType: "image/png" });
    }
    if (fs.existsSync(failedScreenshotPath)) {
        await testInfo.attach("Screenshot on Failure", { path: failedScreenshotPath, contentType: "image/png" });
    }
    if (fs.existsSync(videoPath)) {
        await testInfo.attach("Video", { path: videoPath, contentType: "video/webm" });
    }
});

test("Go Directly to Dashboard -No Login", async ({ page }) => {
    await test.step("Navigate to VWO Dashboard using saved session", async () => {
        await page.goto("https://app.wingify.com/#/dashboard?accountId=1227004", { waitUntil: 'domcontentloaded' });
    });

    await test.step("Verify Dashboard URL is loaded", async () => {
        await expect(page).toHaveURL(/dashboard/);
    });

    await test.step("Wait for dashboard to stabilize", async () => {
        console.log("Dashboard loaded -No Login Needed");
        await page.waitForTimeout(3000);
    });
});

test("Go Directly to Setting -No Login", async ({ page }) => {
    await test.step("Navigate to VWO Settings using saved session", async () => {
        await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227004", { waitUntil: 'domcontentloaded' });
    });

    await test.step("Verify Settings URL is loaded", async () => {
        await expect(page).toHaveURL(/settings/);
    });

    await test.step("Wait for settings page to stabilize", async () => {
        console.log("Setting Loaded -Still Logged In");
        await page.waitForTimeout(3000);
    });
});


//if cookies expires then run the storage session function again -cookies wil reamin only for 2hours it will expire after 2 hour