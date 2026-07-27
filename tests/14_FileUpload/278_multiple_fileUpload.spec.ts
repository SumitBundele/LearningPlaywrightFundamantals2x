import { test, expect } from '@playwright/test';
import path from 'path';

const URL = "https://the-internet.herokuapp.com/upload";

test.describe('Verify Multiple File upload function', () => { //describr yout test suit 

    test.beforeEach(async ({ page }) => {
        //apply beforEach Hooks function calling URL
        console.log("Before running any Test Case");
        await page.goto(URL);
    })

    //now you can create your test cases

    test("TC001 Single File Upload", async ({ page }) => {

        const filePath = path.join(__dirname, 'testdata.jpg');
        console.log('File Path:', filePath);

        // Upload the single file
        await page.locator('input#file-upload').setInputFiles(filePath);
        await page.locator('input#file-submit').click();

        // Verify upload success - "File Uploaded!" message appears
        await expect(page.locator('h3')).toHaveText('File Uploaded!');
        // Verify the uploaded filename is displayed
        await expect(page.locator('#uploaded-files')).toContainText('testdata.jpg');

    });

    test("TC002 Multiple File Upload using path", async ({ page }) => {

        // Use path.join to construct absolute paths for multiple files
        const file1 = path.join(__dirname, 'file1.jpg');
        const file2 = path.join(__dirname, 'file2.jpg');
        console.log('File 1 Path:', file1);
        console.log('File 2 Path:', file2);

        // Add 'multiple' attribute to file input via JavaScript to accept multiple files
        const fileInput = page.locator('input#file-upload');
        await fileInput.evaluate((el) => el.setAttribute('multiple', ''));

        // Upload multiple files using array of file paths
        await fileInput.setInputFiles([file1, file2]);
        await page.locator('input#file-submit').click();

        // Verify upload success
        await expect(page.locator('h3')).toHaveText('File Uploaded!');
        // Verify at least one of the uploaded filenames is displayed
        const uploadedFilesText = await page.locator('#uploaded-files').textContent();
        expect(uploadedFilesText).toContain('file2.jpg');

    });
});

//always find input box=<input html tag> in file upload /..as input box is responsiable for file upload
