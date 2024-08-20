const {test,expect}=require('@playwright/test')

// test('types',async({page})=>{


//       await page.goto("https://testautomationpractice.blogspot.com/");

//       await page.locator("#male").check();

//       await page.locator('#sunday').click();

//       await expect(await page.locator("#male")).toBeChecked();



// });


//Bootstrap dropdown handling

test("bootstrap", async ({page})=>{


    await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2#google_vignette");

    await page.locator(".multiselect-selected-text").click();

    // const options=await page.locator("ul>li label input");
    
    // await expect(options).toHaveCount(11);

    const options=await page.$$("ul>li label ");

    for(let option of options){

       
        const value=await option.textContent();

        console.log(value);


        if(value.includes('Angular')||value.includes('Java')){

           await option.click();

        }
    }
    
    await page.waitForTimeout(5000);
});