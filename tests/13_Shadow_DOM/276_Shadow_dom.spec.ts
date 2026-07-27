import { test, expect, Locator } from '@playwright/test';

const URL = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";

test.describe('Verify Practice Shadow Dom', () => { //describr yout test suit 

    test.beforeEach(async ({ page }) => {
        //apply beforEach Hooks function calling URL
        console.log("Before running any Test Case");
        await page.goto(URL);
    })

    //now you can create your test cases

    test("TC001 Finf Shadow Dom And Click", async ({ page }) => {

        const card = page.getByTestId('card-account');
        await card.locator('input[name ="email"]').fill('student@thetestingacademy.com');
        await card.locator('input[name ="password"]').fill('Pwd');
        await card.getByTestId('card-account-submit').click();
        await expect(page.getByTestId('card-account-status')). 
            toContainText('student@thetestingacademy.com');

        await page.waitForTimeout(15000);

        //in shadowdom -just find teh parent element  locator and directly click thme 






    });
});
