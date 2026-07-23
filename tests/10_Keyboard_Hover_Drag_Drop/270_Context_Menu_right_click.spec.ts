import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Verif Context Menu -Right Click and  Select option', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.locator('span.context-menu-one').first().click({ button: 'right' });
    //await page.getByRole('heading', { name: 'Review PR #21 — flaky test fix' }).dragTo(page.locator("[data-status='done']"));
    const allOptions: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log(allOptions);

    await page.pause();
    await page.getByRole('button', { name: 'Copy ⌘C' }).click();
});