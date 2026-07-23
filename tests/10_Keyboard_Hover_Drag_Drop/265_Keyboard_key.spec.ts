import { test, expect } from '@playwright/test';

test('Verify Keyboard Keys', async ({ page }) => {
    await page.goto("https://keycode.info");
    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' })

    await page.keyboard.press('Arrowleft');
    await page.screenshot({ path: 'ArrowLeft.png' })

    await page.keyboard.press('shift+O');
    await page.screenshot({ path: 'O.png' })

    await page.keyboard.up('shift');
    await page.keyboard.down('shift');




});
