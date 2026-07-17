import { test, expect } from '@playwright/test';

test('Verify how to handle multipe elements', async ({ page }) => {

    //Nevigate to page 
    //find the elements which gives all the elements and text
    //loop through it and find the one which we want to click 

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter"); //find as and Array
    const rightPanelLinksText: string[] = await page.locator("a.list-group-item").allInnerTexts(); //strinhg array return by allInnerText method
    console.log(rightPanelLinksText.length);

    //now loop through the array
    for (const linkText of rightPanelLinksText) {
        if (linkText === "Forgotten Password") {
            await page.getByText(linkText).first().click();
        }
    }

    const rightPanelLinksText2 = await page.locator("a.list-group-item").all();
    for (const links of rightPanelLinksText2) {
        console.log(await links.getAttribute("href"));

    }


});