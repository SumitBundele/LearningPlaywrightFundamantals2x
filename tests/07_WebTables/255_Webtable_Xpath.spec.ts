import { test, expect } from '@playwright/test';

test('Verify webtable Element by using xpath preceding sibling', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").click();


    //if you know the users name = Aarav.Sherma
    ////td[text()="Aarav.Sharma"]/preceding-sibling::td/input[@type="checkbox"]


    //ulternate way css selector = Psudo class
    //tr:has(td:text('Rohan.Mehta'))



    //https://app.thetestingacademy.com/playwright/css-selector-cheatsheet ==> CSS Cheatsheet link 

    //https://app.thetestingacademy.com/playwright/xpath-master-cheatsheet ==> Xpath Cheatsheet link 





});