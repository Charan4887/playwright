const{test,expect}=require('@playwright/test');

test("loginpage", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");
 
    await page.waitForTimeout(2000);
 
    await page.locator(".ico-login").click();
 
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
 
    await expect(page).toHaveTitle("Demo Web Shop. Login");
 
    const title=await page.getByText("Welcome, Please Sign In!");
 
    await expect(title).toBeVisible;
 
    await page.fill("#Email","allem12@gmail.com");
 
    await page.fill("#Password","john@123");
 
    await page.locator("input[value='Log in']").click();
 
   
 });