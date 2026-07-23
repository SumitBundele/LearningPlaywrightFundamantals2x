import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Verify Frame Locator', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");
    let mainFrame: FrameLocator = await page.frameLocator('[name=main]');
    const headerText = await mainFrame.locator('h2').innerText();
    console.log(headerText);


    //we can view all frames using await page.locator('//frame').all();
    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log('Total Number of Frames:' + allFrames.length);

    for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ':', await frame.getAttribute('src'));

    }
    //output
    // Main frame — practice playground
    // Total Number of Frames:3
    // side : ./side-frame.html
    // main : ./main-frame.html
    // footer : ./footer-frame.html

    let sideFrame: FrameLocator = await page.frameLocator('[name=side]');
    await sideFrame.getByTestId('side-link-registration').click();



});