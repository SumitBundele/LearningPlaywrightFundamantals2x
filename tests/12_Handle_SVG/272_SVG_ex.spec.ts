import { test, expect, Locator } from '@playwright/test';

const URL = "https://www.flipkart.com/search";

test.describe('Flipkart Search via SVG', () => { //describr yout test suit 

    test.beforeEach(async ({ page }) => {
        //apply beforEach Hooks function calling URL
        console.log("Before running any Test Case");
        await page.goto(URL);
    })

    //now you can create your test cases

    test("TC001 Verify and handle SVG elements @smoke", async ({ page }) => {
        //we cna tag the test smoke or regression using @tag ,@smoke,@Regression and
        // run required test case by using 'grep' in npx command 
        console.log("TC001")
    });

    test("TC002 Verify and handle SVG elements @Regression ", async ({ page }) => {
        console.log("TC002")
    });

})

// Command to run
// npx playwright test tests/12_Handle_SVG/272_SVG_ex.spec.ts