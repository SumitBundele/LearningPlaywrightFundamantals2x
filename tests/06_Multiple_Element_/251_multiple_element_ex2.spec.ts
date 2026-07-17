import { test, expect } from '@playwright/test';

test('Verify one element out of Multiple Elemets', async ({ page }) => {


    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter"); //navigate to page
    //getByRole and getByText is not unique in this case
    await page.getByTestId('forgotten-password-link').click();
    await page.pause();




});