const { test, expect } = require('@playwright/test');
test("btnclick", async ({page}) => {
    await page.goto("https://www.google.co.in/");
   
    await expect(page.getByLabel("Search")).toBeTruthy()
})