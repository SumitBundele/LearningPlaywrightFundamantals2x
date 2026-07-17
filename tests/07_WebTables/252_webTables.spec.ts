import { test, expect } from '@playwright/test';



// First of all, go to the link of the web table, 
// find the correct Helen banquet, 
// and then use a for loop to find the following simple 

test('Verify single value from  Webtable ', async ({ page }) => {

    await page.goto("https://awesomeqa.com/webtable.html");

    //table[@id="customers"]/tbody/tr[5]/td[2] -xpath locator for Helen banquet
    //use for loop 
    // 5 - i , 1 to 7 ( 1 header) i=> 2 to 7
    // ]/td[
    // 2 - j , j -> 1,2,3
    // ]
    //where tr is i and td is j


    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const columns = await page.locator(" //table[@id='customers']/tbody/tr[2]/td").count();
    //go through every and find element  by for loop 
    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {

            const dynamicXpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            console.log(dynamicXpath);



            const data = await page.locator(dynamicXpath).innerText();
            console.log(data);
            if (data.includes('Helen Bannett')) {

                const countryPath = `${dynamicXpath}/following-sibling::td`; //following sibling of Helen banquet = UK
                const countryText = await page.locator(countryPath).innerText();
                console.log('------');
                console.log(`Helen Bennett is In - ${countryText}`);

            }

        }

    }
    // await page.pause();

});


//This code can be used every where to fine the element from webtab;e using same example