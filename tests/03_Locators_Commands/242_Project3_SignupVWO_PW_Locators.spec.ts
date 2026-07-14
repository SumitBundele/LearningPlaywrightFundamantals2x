import { test, expect } from '@playwright/test';

test('Verify VWO signr Up has an error with incorrect email id', async ({ page }) => {

    await page.goto("https://vwo.com/free-trial/");
    await page.getByRole('textbox', { name: "email" }).fill("abcd");

    //or  use await page.locator("page-v1-step1-email").fill("abcde");
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: "Create a Free Trial Account" }).click();

    //page.getByText("The email address you entered is incorrect."); ---this messga can chnage by using playwright locater 
    //  let error_msg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent(); //in such case we have to use CSS or Xpath locater
    let error_msg = await page.locator("xpath =//div[contains(@class,'invalid-reason')]").first().textContent();
    expect(error_msg).toContain("The email address you entered is incorrect.");

});