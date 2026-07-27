import { test, expect, Locator } from '@playwright/test';

const URL = "https://app.thetestingacademy.com/playwright/widgets/svg";

test.describe('Verify Practice SVG', () => { //describr yout test suit 

    test.beforeEach(async ({ page }) => {
        //apply beforEach Hooks function calling URL
        console.log("Before running any Test Case");
        await page.goto(URL);
    })

    //now you can create your test cases

    test("TC001 Verify and handle SVG elements @smoke", async ({ page }) => {

        const CircleShape: Locator = page.locator("#circle-blue");
        await CircleShape.click();

        const output = await page.locator('#shapes-output').innerText();
        expect(output).toContain('Blue circle');


        await page.getByRole('button', { name: /Q3 bar/ }).click();
        //used aria lables which contain  name /Q3 bar/
        await page.getByRole('radio', { name: '4 stars' }).click();

        let allBars = await page.locator(".bar").all();
        for (const bar of allBars) {
            const q = await bar.getAttribute('data-quarter');
            const h = await bar.getAttribute('height');
            //Print Quarters and Height
            console.log(q);
            console.log(h);


        }


    });
});
