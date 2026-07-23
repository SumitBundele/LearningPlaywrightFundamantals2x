import { test, expect, FrameLocator } from '@playwright/test';

test('Verify I Frame example 002 TC', async ({ page }) => {

    await page.goto("https://selectorshub.com/iframe-scenario/");
    //await page.pause();
    let Frame1: FrameLocator = await page.frameLocator("#pact1").first();
    let Frame2: FrameLocator = await Frame1.frameLocator("#pact2");
    let Frame3: FrameLocator = await Frame2.frameLocator("#pact3");

    await Frame1.locator('#inp_val').fill("Preeti Zinta");
    await page.waitForTimeout(5000);
    await Frame2.locator('#jex').fill('wife');
    await page.waitForTimeout(5000);
    await Frame3.locator('#glaf').fill("Millioner");





});