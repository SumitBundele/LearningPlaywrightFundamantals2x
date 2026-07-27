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
        await page.locator('input[name="q"]').fill("macmini");

        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click()

        const titleResults: Locator = page.locator('//div[contains(@data-id,"CPU") or contains(@data-id,"ACC") or contains(@data-id,"COM") or contains(@data-id,"MP") ]//div/a[2]')
        //Tile Xpath -//div[contains(@data-id,"CPU") or contains(@data-id,"ACC") or contains(@data-id,"COM") or contains(@data-id,"MP") ]//div/a[2]
        const count: number = await titleResults.count();
        for (let i = 0; i < count; i++) {
            const title: string | null = await titleResults.nth(i).textContent();
            console.log(title);
        }
        await page.pause();

    });

    //     Navigate to the https://www.flipkart.com/search



    // Search for the “macmini”



    // Print the titles of all the results.



    // Find the cheapest price mac mini and print it. (on first page)


})

// Command to run
// npx playwright test tests/12_Handle_SVG/272_SVG_ex.spec.ts