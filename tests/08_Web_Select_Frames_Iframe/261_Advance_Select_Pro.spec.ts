//Select box Variants Practice
//https://app.thetestingacademy.com/playwright/tables/select-boxes

//Type and sleect 

import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify  Custom Dropdown', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
    //Singale and Searchable 
    await page.getByTestId('rs-single').click();
    await page.getByRole('option', { name: 'Playwright' }).click();

    //2.Multi chip with Remove
    await page.getByTestId('rs-multi').click();

    await page.getByRole('option', { name: 'Pytest' }).click();
    await page.getByRole('option', { name: 'Mocha' }).click();
    await page.keyboard.press("Escape");

    //Creatable multitype and Enter

    await page.getByTestId('rs-creatable').click();

    await page.getByRole('option', { name: 'api-testing' }).click();
    await page.getByRole('option', { name: 'security' }).click();
    await page.keyboard.press("Escape");

    //⑤ Async — fetched on type

    await page.getByTestId('rs-async').click();

    await page.getByTestId('rs-async-input').fill("Pu")
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    await page.getByRole('option', { name: 'Pune' }).click();
    await page.keyboard.press("Escape");







    await page.pause();



});