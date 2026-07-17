import { test, expect } from '@playwright/test';

test.describe('Web Table Test', () => {

    test('Web_Table_Login Structured extraction', async ({ page }) => {
        await page.goto("https://awesomeqa.com/webtable1.html");

        const rows = page.locator("//table[@summary='Sample Table']/tbody/tr");
        const rowCount = await rows.count();
        console.log(rowCount);

        for (let i = 0; i <= rowCount; i++) {
            const rowData = await rows.nth(i).locator('td').allInnerTexts();//nth is playwright method and indexing starts with 0 index  henc 1=0
            console.log(`Row ${i + 1}:`, rowData);
        }




    });






});

////div[@class="oxd-table-card"]/div/div