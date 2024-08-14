const { test, expect } = require('@playwright/test');

test('cloud that', async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.getByPlaceholder("Username or email").fill('xyz@gmail.com');
    await page.getByPlaceholder("Password").fill("123");
   
    await page.locator("#loginbtn").click()
})