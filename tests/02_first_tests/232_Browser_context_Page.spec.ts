import { chromium, Browser, BrowserContext, Page } from "playwright";
//all above interface are imported form Playwright itself
//this concept is only for learning perpose -will not be used in Testing or create test case like this 
async function run() {
    //Level 1 - Launch a Browser-heavest operation
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser Launched ", browser);

    //every browser have multiple context -from Browser we can create contects 
    //Level 2 - Create context Fresh Sessopn Isolated cookies
    let context1: BrowserContext = await browser.newContext();
    console.log("Context Created ", context1);

    let context2: BrowserContext = await browser.newContext();
    console.log("Context Created ", context2);
    //Level 3 -- a Tab inside Contexts 
    let page: Page = await context1.newPage();
    console.log("Page One");

    await page.goto("https://app.vwo.com");
    console.log("Title:", await page.title());


    //Cleanup Reverse Order 
    await page.close();
    await context1.close();
    await context1.close();
    await browser.close();







}

run();