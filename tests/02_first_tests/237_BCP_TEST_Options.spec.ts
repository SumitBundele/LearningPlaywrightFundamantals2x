import { test, expect } from "@playwright/test";
test("Context with Option", async ({ browser }) => { //inject browser 
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        locale: 'fr-FR',
        timezoneID: 'Europe/Paris',
        gelolocation: { latitude: 48.8566, longitude: 2.3522 },
        permission: ['geolocation']
    });

    const page = await context.newPage();
    await page.goto('https://app.vwo.com/#login');
    await context.close()

});