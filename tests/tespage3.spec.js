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