import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify  Custom Dropdown', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
    await page.getByTestId("lang-trigger").click();
    await page.getByRole('option', { name: 'JavaScript' }).click();

    //await page.pause();

    //just find the dropdown ans select the vlaue thats all ..not explicit function is required here  
    await page.getByTestId('framework-trigger').click();
    await page.getByRole('option', { name: 'Next.js' }).click();


    await page.getByTestId('experience-trigger').click();
    await page.getByRole('option', { name: 'Senior (7+ years)' }).click();

    await page.pause();



});