import { test, expect, Locator } from '@playwright/test';

const URL = "https://www.flipkart.com/search";

test.describe('Flipkart Mac Mini Search - Titles & Cheapest Price', () => {

    test.beforeEach(async ({ page }) => {
        console.log("Navigating to Flipkart search page...");
        await page.goto(URL);
    });

    test("TC003 Search macmini, print first 40 titles and find cheapest price", async ({ page }) => {
        // Step 1: Enter search term
        await page.locator('input[name="q"]').fill("macmini");
        console.log("Search term 'macmini' entered.");

        // Step 2: Click SVG search icon
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();
        console.log("Clicked SVG search button.");

        // Wait for search results to load
        await page.waitForLoadState('networkidle');

        // Step 3: Extract first 40 product titles only
        // Flipkart titles are inside anchor tags within product grid items
        const titleLocator: Locator = page.locator('//a[contains(@href,"/p/itm") and not(contains(@href,"/search"))]');
        const titleCount: number = await titleLocator.count();
        const limit = Math.min(titleCount, 40);
        console.log(`\n========== TOTAL PRODUCTS FOUND: ${titleCount} | PROCESSING FIRST 40 ONLY ==========\n`);

        const titles: string[] = [];
        for (let i = 0; i < limit; i++) {
            const titleText: string | null = await titleLocator.nth(i).textContent();
            if (titleText && titleText.trim().length > 0) {
                titles.push(titleText.trim());
            }
        }

        // Print first 40 titles
        console.log("========== FIRST 40 PRODUCT TITLES ==========");
        titles.forEach((title, index) => {
            console.log(`${index + 1}. ${title}`);
        });

        // Step 4: Extract prices for first 40 results and find the cheapest
        // Price links on Flipkart contain the ₹ symbol
        const priceLocator: Locator = page.locator('a:has-text("₹")');
        const priceCount: number = await priceLocator.count();
        const priceLimit = Math.min(priceCount, 40);

        let cheapestPrice: number = Infinity;
        let cheapestProductTitle: string = "N/A";
        const priceList: { title: string; price: number; rawText: string }[] = [];

        for (let i = 0; i < priceLimit; i++) {
            const priceElement = priceLocator.nth(i);
            const priceText: string | null = await priceElement.textContent();

            if (priceText) {
                // Extract numeric price from text like "₹84,900" or "₹18,150 ₹59,600 69% off"
                // The first ₹ value is the current selling price
                const priceMatches = priceText.match(/₹([\d,]+)/g);
                if (priceMatches && priceMatches.length > 0) {
                    // Clean and parse the first price (current price)
                    const cleanPrice = priceMatches[0].replace(/[₹,]/g, '');
                    const numericPrice = parseInt(cleanPrice, 10);

                    if (!isNaN(numericPrice) && numericPrice > 0) {
                        // Try to find the associated product title (parent container)
                        let productTitle = "N/A";
                        try {
                            const parentContainer = priceElement.locator('xpath=ancestor::div[contains(@data-id, "") or contains(@class, "_1AtVbE") or contains(@class, "_4ddWXP")]');
                            const titleLink = parentContainer.locator('a[href*="/p/itm"]').first();
                            const titleText = await titleLink.textContent();
                            if (titleText) {
                                productTitle = titleText.trim();
                            }
                        } catch {
                            // Fallback: use index-based title if available
                            if (titles[i]) {
                                productTitle = titles[i];
                            }
                        }

                        priceList.push({
                            title: productTitle,
                            price: numericPrice,
                            rawText: priceText.trim()
                        });

                        if (numericPrice < cheapestPrice) {
                            cheapestPrice = numericPrice;
                            cheapestProductTitle = productTitle;
                        }
                    }
                }
            }
        }

        // Print first 40 prices found
        console.log("\n========== FIRST 40 PRICES FOUND ==========");
        priceList.forEach((item, index) => {
            console.log(`${index + 1}. ${item.title.substring(0, 60)}... -> ₹${item.price.toLocaleString('en-IN')} (raw: ${item.rawText})`);
        });

        // Print cheapest product among first 40
        console.log("\n========== CHEAPEST MAC MINI (AMONG FIRST 40) ==========");
        if (cheapestPrice !== Infinity) {
            console.log(`Title: ${cheapestProductTitle}`);
            console.log(`Price: ₹${cheapestPrice.toLocaleString('en-IN')}`);
        } else {
            console.log("No valid prices found on the page.");
        }

        // Optional: Assert that we found at least one product
        expect(titles.length).toBeGreaterThan(0);
        expect(priceList.length).toBeGreaterThan(0);
    });

});

// Command to run this specific test:
// npx playwright test tests/12_Handle_SVG/273_Flipkart_svg_practice.spec.ts
// Or with headed mode for debugging:
// npx playwright test tests/12_Handle_SVG/273_Flipkart_svg_practice.spec.ts --headed
