import { test, expect, Page, Locator } from '@playwright/test';


async function findRowByName(page: Page, name: string): Promise<Locator> {
    while (true) {
        const Rows = page.locator('#employees-tbody tr').filter({ hasText: name }); //try to find the row which has name declared in name veriable
        if (await Rows.count()) { //if u found the value in first page or any page the break 
            return Rows;
        }

        //if value is not present in first page then click next Page
        const next = page.getByTestId('next-page');
        if (await next.isDisabled()) throw new Error("Row not found");
        //this is safeguard which  will make sure loop does not got o infinite loop if row is not found in all pages 
        await next.click();



    }

};

test('Verify webtable Element by using xpath preceding sibling', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name: string = "Luca Greco";
    // let Rows;
    const Rows = await findRowByName(page, 'Luca Greco');
    const email = await Rows.locator('td[data-col="email"]').innerText();
    const country = await Rows.locator('td[data-col="country"]').innerText();
    console.log(email, country);
    await page.waitForTimeout(5000);
});

//this is called as pagination handeling 

