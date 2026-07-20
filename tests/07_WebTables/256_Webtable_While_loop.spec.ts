import { test, expect } from '@playwright/test';

test('Verify webtable Element by using xpath preceding sibling', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    //await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").click();


    //finding one person email and country where parson is on 3rd page

    const priyaRows = page.locator('#employees-tbody tr').filter({ hasText: "Priya Kapoor" });//used css selector
    // const email = await priyaRows.locator('td[data-col ="email"]').innerText();
    // const country = await priyaRows.locator('td[data-col ="country"]').innerText();


    let name: string = "Camila Lopez";
    let Rows;
    while (true) {
        Rows = page.locator('#employees-tbody tr').filter({ hasText: name }); //try to find the row which has name declared in name veriable
        if (await Rows.count()) { //if u found the value in first page or any page it will break 
            break;
        }

        //if value is not present in first page then click next Page
        const next = page.getByTestId('next-page');
        if (await next.isDisabled()) throw new Error("Row not found");
        //this is safeguard which  will make sure loop does not got o infinite loop if row is not found in all pages 
        await next.click();



    }

    const email = await Rows.locator('td[data-col ="email"]').innerText();
    const country = await Rows.locator('td[data-col ="country"]').innerText();

    console.log(email, country);
    await page.waitForTimeout(5000);
});

//this is called as pagination handeling 