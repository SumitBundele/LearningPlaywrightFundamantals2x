import { test, expect, Locator } from '@playwright/test';

test('Hover and click required option', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    //await page.pause();

    // Hover on "Add-ons" to reveal submenu
    await page.getByTestId('nav-add-ons').hover();

    // Get all submenu items inside the Add-ons dropdown
    const allsubmenu: Locator[] = await page.locator('[data-testid="nav-add-ons"] .submenu a').all();
    console.log('Total Number of Submenu: ' + allsubmenu.length);

    // Print each submenu text
    for (const item of allsubmenu) {
        const text = await item.innerText();
        console.log('Submenu item: ' + text);
    }

    // Click on Wi-Fi option
    await page.getByTestId('test-id-Wifi').click();

});