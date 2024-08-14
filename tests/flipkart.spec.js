const {test, expect} = require('@playwright/test');

test('filtering', async ({page}) => {
  
  
    await page.goto("https://demo.opencart.com/en-gb/catalog/smartphone");
    await page.locator(".list-grou-item")
      .filter({ hasText: 'components (2)' }).click()
  });
