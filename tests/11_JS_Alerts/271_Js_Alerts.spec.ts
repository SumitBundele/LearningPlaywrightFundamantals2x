import { test, expect } from '@playwright/test';

test('Verify JS Alerts ', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // 1. Handle JS Alert
    page.once('dialog', async dialog => {
        console.log('Alert Type:', dialog.type());
        console.log('Alert Message:', dialog.message());
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am a JS Alert');
        await dialog.accept();
    });
    await page.getByRole('button', { name: "Click for JS Alert" }).click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

    // 2. Handle JS Confirm
    page.once('dialog', async dialog => {
        console.log('Confirm Type:', dialog.type());
        console.log('Confirm Message:', dialog.message());
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept();
    });
    await page.getByRole('button', { name: "Click for JS Confirm" }).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');

    // 3. Handle JS Prompt
    const inputText = "Hello from Tester Sumit";
    page.once('dialog', async dialog => {
        console.log('Prompt Type:', dialog.type());
        console.log('Prompt Message:', dialog.message());
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('I am a JS prompt');
        expect(dialog.defaultValue()).toBe('');
        await dialog.accept(inputText);
    });
    await page.getByRole('button', { name: "Click for JS Prompt" }).click();
    await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);
});
