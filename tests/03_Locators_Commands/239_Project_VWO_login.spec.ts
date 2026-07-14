//https://app.vwo.com/#/login

import { test, expect } from '@playwright/test';
test(" TC #1 Verify that the app.vwo login is not working and gives you and erro with Lazy ,Strict,and autowait concepts. ", async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");

    //Default locators -- ID,name,className,tag, Custom Locator (via css selector)
    //CSS Selector -> every Browser have ->css Selector -help you to find the element
    //by using the default locators
    //id => #id
    //className => .
    //name => [name="value"]
    //tag =>[tag]



    //<input 
    // type="email"
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID"
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID">

    let userNameField = page.locator('#login-username');
    //this is calles lazy element -we have not found the element we have just created  the element 
    //<input type="password" class="text-input W(100%) Pend(36px)" vwo-html-translate-attr="placeholder" vwo-html-translate-placeholder="login:enterPassword" name="password"
    // id="login-password" data-qa="jobodapuxe" placeholder="Enter password">
    //login-password
    let passwordField = page.locator('#login-password');
    //id="js-login-btn"

    let loginButton = page.locator('#js-login-btn');


    //Now Playwright will find the element and act (auto wait)
    await userNameField.fill("admin@admin.com");
    await passwordField.fill("password@123");
    await loginButton.click();
    console.log("all Action completed");

    //id="js-notification-box-msg"
    let error_message = page.locator('#js-notification-box-msg');
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");







});