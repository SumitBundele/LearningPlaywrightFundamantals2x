import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Verify Advance Drag and Drop', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');
    await page.locator('#card-write-spec').dragTo(page.locator("[data-status='in-progress']"));
    await page.getByRole('heading', { name: 'Review PR #21 — flaky test fix' }).dragTo(page.locator("[data-status='done']"));

});