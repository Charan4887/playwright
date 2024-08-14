 

const { test, expect } = require('@playwright/test');
 
test("githubme", async ({page}) => {
  await page.goto("https://github.com/aryan1403");
 
  await expect(page).toHaveTitle(/aryan1403/)
})

  
  