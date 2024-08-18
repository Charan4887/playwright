const{test,expect}=require('@playwright/test');

test("register1page", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");

    await page.waitForTimeout(2000);

    await expect(page).toHaveTitle('Demo Web Shop');

   const have = await page.locator("input[value='Search']");
   
   await expect(have).toBeVisible();

});

test("register2page", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");

   await page.locator("#pollanswers-1").click();

   await page.locator(".ico-register").click();

   await expect(page).toHaveURL("https://demowebshop.tricentis.com/register");

   await expect(page).toHaveTitle("Demo Web Shop. Register");
});

test("register3page", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/register");

    const locator = page.locator(".column.information");

    await expect(locator).toHaveClass("column information");



});

test("register4page", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/register");

   await page.locator("#gender-male").click();

   await page.fill("#FirstName","john");
   
   await page.fill("#LastName","allem");
   
   await page.fill("#Email","allem13@gmail.com");

});

test("register5page", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/register");

   await page.fill("#Password","john@123");
   
   await page.fill("#ConfirmPassword","john@123");

   await page.locator("#register-button").click();

});





