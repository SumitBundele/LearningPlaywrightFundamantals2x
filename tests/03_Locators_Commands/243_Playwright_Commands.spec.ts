import { test, expect } from '@playwright/test';

test('Goto with different wait untill options', async ({ page }) => {

    await page.goto("https://app.com/page1", { waitUntil: "commit" });
    console.log("commit : Server Responded");

    //wait for HTML to be Parsed
    await page.goto("https://app.com/page1", { waitUntil: "domcontentloaded" });
    console.log("domcontentloaded : HTML Parsed");

    //Default - wait for everything -(img,css,scripts)
    await page.goto("https://app.com/page1", { waitUntil: "load" });
    console.log("load : All Resource Loaded");

    //Slowest wait for all network activity to Stop
    await page.goto("https://app.com/page1", { waitUntil: "networkidle" });
    console.log("networkidle : No Request for 500 ms");


});