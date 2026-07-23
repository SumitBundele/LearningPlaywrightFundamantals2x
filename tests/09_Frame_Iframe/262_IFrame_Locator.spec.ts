import { test, expect, FrameLocator } from '@playwright/test';

test('Verify Frame Locator', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    let vehicalFrame: FrameLocator = await page.frameLocator("#frame-one");//find framelocator

    //find a Frame -Whenever you find a frame it becomes a framelocator Automatically 

    //for mai page u have to use page .locator 
    //for iframe use framelocator

    //RESULT_TextField - 1

    await vehicalFrame.locator('#RESULT_TextField-1').fill("XUV 3X0");



    await vehicalFrame.locator('#RESULT_TextField-2').fill("Sumit Bundele");
    await vehicalFrame.locator('#RESULT_TextField-3').fill("2024");

    await vehicalFrame.locator('#RESULT_RadioButton-1').selectOption("SUV");

    await vehicalFrame.locator('#RESULT_TextField-4').fill("2024");
    //RESULT_TextArea-1

    await vehicalFrame.locator('#RESULT_TextArea-1').fill("Amazing Family Car ");

    await vehicalFrame.getByText('Submit registration').click();

    let output = await vehicalFrame.locator("#vehicle-output").innerText();
    console.log(output);
    await page.pause();




});