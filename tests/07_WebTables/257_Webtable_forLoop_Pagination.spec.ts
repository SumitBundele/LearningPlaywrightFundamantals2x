import { test, expect } from '@playwright/test';

test('Verify webtable Element by using xpath preceding sibling', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    //finding one person email and country where parson is on 3rd page
    //  if you know the total number of pages use for loop

    const pagecount = 3;
    const allEmails: string[] = [];

    for (let p = 1; p <= pagecount; p++) {
        await page.getByTestId(`page-${p}`).click();
        const emails = await page
            .locator('#employees-tbody tr td[data-col="email"]')
            .allInnerTexts();
        allEmails.push(...emails);
    }

    const priyaRows = page.locator('#employees-tbody tr').filter({ hasText: "Priya Kapoor" });//used css selector
    // const email = await priyaRows.locator('td[data-col ="email"]').innerText();
    // const country = await priyaRows.locator('td[data-col ="country"]').innerText();


    let name: string = "Camila Lopez";
    let Rows;
    while (true) {
        Rows = page.locator('#employees-tbody tr').filter({ hasText: name }); //try to find the row which has name declared in name veriable
        if (await Rows.count()) { //if u found the value in first page or any page the break 
            break;
        }

        //if value is not present in first page then click next Page
        const next = page.getByTestId('next-page');
        if (await next.isDisabled()) throw new Error("Row not found");
        await next.click();



    }

    const email = await Rows.locator('td[data-col ="email"]').innerText();
    const country = await Rows.locator('td[data-col ="country"]').innerText();

    console.log(email, country);
    await page.waitForTimeout(5000);
});

//this is called as pagination handeling 