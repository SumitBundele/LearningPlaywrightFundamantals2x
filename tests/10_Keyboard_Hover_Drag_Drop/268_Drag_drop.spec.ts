import { test, expect } from '@playwright/test';

test('Verify Drag and Drop', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const ColumnA = page.locator('#column-a');
    const ColumnB = page.locator('#column-b');

    await ColumnA.dragTo(ColumnB)
});
