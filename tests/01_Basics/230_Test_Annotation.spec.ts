
import { test, expect } from '@playwright/test';
test("Has Title", async ({ page }) => { //page is calles as fixture (injected by Palywright)
    await page.goto("https://playwright.div/");
    await expect(page).toHaveTitle(/Playwright/);

});

//Skip Test 

test.skip('Skip Test', async ({ page }) => {
    //this test is skipped

});


//Only run this test 
test.only('Focused Test', async ({ page }) => {
    //Only this test runs

});

//Mark as Failed Test
test.fail('expected to fail', async ({ page }) => {
    //This test is expected to Fail

});

//Slow test 3x Timeout
test.slow('Slow Test', async ({ page }) => {
    //Has extended timeout

});
//Conditional Skip 

test('conditional', async ({ page }) => {
    test.skip(browserName === 'firefox', 'Not supported in Firefox');
});