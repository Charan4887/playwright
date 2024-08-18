const{test,expect}=require('@playwright/test');

test("loginpage1", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");
 
    await page.waitForTimeout(2000);
 
    await page.locator(".ico-login").click();

});

test("loginpage2", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/login");
 
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
 
    await expect(page).toHaveTitle("Demo Web Shop. Login");
 
    const title=await page.getByText("Welcome, Please Sign In!");
 
    await expect(title).toBeVisible;

});

test("loginpage3", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/login");

    const locator = page.locator(".topic-html-content-body");

    await expect(locator).toHaveText("Put your login / registration information here. You can edit this in the admin site.");

});

test("loginpage4", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");

    const value = { name: "Returning Customer" };

    expect(value).toBeTruthy();


});



test("loginpage5", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/login");
 
    await page.fill("#Email","allem12@gmail.com");
 
    await page.fill("#Password","john@123");
 
    await page.locator("input[value='Log in']").click();
 
   
 });