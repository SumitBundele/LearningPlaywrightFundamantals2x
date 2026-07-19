import { test, expect } from '@playwright/test';

test('Verify Element By Filter', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter"); //find as and Array
    const forgottenPasswordLink = page.locator("a.list-group-item").filter({ hasText: 'Forgotten Password' });
    await forgottenPasswordLink.click();

    await page.pause();


    //its like inbuit assertiosn eg toHaveCount ,toHaveAttribute
    const accountLink = page.locator("a.list-group-item");
    await expect(accountLink).toHaveCount(13);


    const privacylink = page.locator('footer a').filter({ hasText: 'Privacy Plicy' });
    await expect(privacylink).toHaveAttribute('href', '#privacy-plicy');

    ////td[text()="Aarav.Sharma"]/preceding-sibling::td/input[@type="checkbox"]




});