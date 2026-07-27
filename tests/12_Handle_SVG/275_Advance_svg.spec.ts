import { test, expect, Locator } from '@playwright/test';

const URL = "https://simplemaps.com/svg/country/in";

test.describe('Verify Practice SVG', () => { //describr yout test suit 

    test.beforeEach(async ({ page }) => {
        //apply beforEach Hooks function calling URL
        console.log("Before running any Test Case");
        await page.goto(URL);
    })

    //now you can create your test cases

    test("TC001 Generate the list of all States", async ({ page }) => {
        const states = await page.locator("//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='path' and contains(@class,'sm_state')]").all();
        for (const state of states) {
            const classState = await state.getAttribute('class');

            console.log(classState);
            if (classState?.includes("INUP")) {
                state.click();
            }
        }




    });
});
