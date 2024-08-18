const{test,expect}=require('@playwright/test');

test("browsingpage", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/apparel-shoes");
    
     await page.waitForTimeout(2000);
    
    await page.locator("ul[class='top-menu'] li:nth-child(4) a:nth-child(1)").click();
     
    await page.locator('#products-orderby').selectOption({index:1});
    
    await page.locator('#products-pagesize').selectOption({index:0});
    
    await page.locator(".individual-page").first().click();
    
    await page.locator('.button-2.product-box-add-to-cart-button').first().click();
    
    await page.getByRole('button',{name : "Add to cart" }).click();
    
    });

    test("browsingpage2", async ({page}) => {
        await page.goto("https://demowebshop.tricentis.com/apparel-shoes");

        await page.locator("a[class='ico-cart'] span[class='cart-label']").click();

    });


    test("browsingpage3", async ({page}) => {
        await page.goto("https://demowebshop.tricentis.com/cart");

        const locator = page.locator(".page-title");

        await expect(locator).toHaveText("Shopping cart");


    });

    test("browsingpage4", async ({page}) => {
        await page.goto("https://demowebshop.tricentis.com/cart");
    
        const value = { name: "Follow us" };
    
        expect(value).toBeTruthy();
    });


    test("browsingpage5", async ({page}) => {
        await page.goto("https://demowebshop.tricentis.com/login");
     
        await page.fill("#Email","allem488@gmail.com");
     
        await page.fill("#Password","john123@");
     
        await page.locator("input[value='Log in']").click();
     
        await page.locator("a[class='ico-cart'] span[class='cart-label']").click();

        

    });


