import { test, expect } from '@playwright/test';
import path from 'path';

const URL = "https://the-internet.herokuapp.com/upload";

test.describe('Verify File upload function', () => { //describr yout test suit 

    test.beforeEach(async ({ page }) => {
        //apply beforEach Hooks function calling URL
        console.log("Before running any Test Case");
        await page.goto(URL);
    })

    //now you can create your test cases

    test("TC001 Locate FileUplad and Upload", async ({ page }) => {

        const filePath = path.join(__dirname, 'testdata.txt');
        console.log('File Path:', filePath);

        // Upload the file
        await page.locator('input#file-upload').setInputFiles(filePath);
        await page.locator('input#file-submit').click();

        // Verify upload success
        await expect(page.locator('h3')).toHaveText('File Uploaded!');

    });

    test("TC002 Multiple File Upload", async ({ page }) => {

        // Use path.join to construct absolute paths for multiple files
        const file1 = path.join(__dirname, 'file1.txt');
        const file2 = path.join(__dirname, 'file2.txt');
        console.log('File 1 Path:', file1);
        console.log('File 2 Path:', file2);

        // Upload multiple files using array of file paths
        await page.locator('input#file-upload').setInputFiles([file1, file2]);
        await page.locator('input#file-submit').click();

        // Verify upload success
        await expect(page.locator('h3')).toHaveText('File Uploaded!');

    });
});

//always find input box=<input html tag> in file upload /..as input box is responsiable for file upload