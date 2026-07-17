import { chromium, expect, test } from "@playwright/test";

test("Learning Frames", async ({ page }) => {

      await page.goto(" https://dev419732.service-now.com/");

      //Login -admin
      await page.locator('//input[@id ="user_name"]').fill("admin");

      //Password user_password
      await page.locator('//input[@id ="user_password"]').fill("xcAK8%DT6x^x");

      //Login
      await page.locator('//button[@id= "sysverb_login"]').click();

      //Click All 
      await page.getByText("All", { exact: true }).first().click();
      const filter = page.getByPlaceholder("Filter");
      await filter.click();

    
      await filter.pressSequentially("Service Catalog", { delay: 100 });
      await page.keyboard.press("Enter");

      await page.getByText('Service Catalog', { exact: true }).first().click();      
      await page.waitForLoadState("domcontentloaded");     

      // Click Mobiles       
      const frame = page.frameLocator("#gsft_main");
      await frame.locator("a.category_title_link").filter({ hasText: "Mobiles" }).click();

      //Click Apple iPhone 13     
      await frame.getByRole('link', { name: 'Apple iPhone 13', exact: true }).click();

      //Click No for ‘Is this a replacement for a lost or broken iPhone?’ - 
      await frame.locator('input[value="no"]').click();
      
      //Select 500 MB [$1.00] from the Monthly data allowance and get the count of items present 
      const dropdown = frame.locator('select.form-control.cat_item_option');
      await expect(dropdown).toBeVisible();
      console.log(await dropdown.count());

      await frame.locator('select.form-control.cat_item_option').selectOption({ value: '500MB' });
      await page.waitForTimeout(5000);

      //Get the count and print of all the values 
      const dropDownValues = frame.locator('select.form-control.cat_item_option option');
      console.log(await dropDownValues.count());

      //Assert and choose Starlight from the colour - 
      const starlight = frame.locator('label.radio-label').filter({ hasText: 'Starlight' });
      await expect(starlight).toBeVisible();
      await starlight.click();

      //Assert Choose the second option for the storage -
      const storage256 = frame.locator('label.radio-label').filter({ hasText: '256 GB' });

      await expect(storage256).toBeVisible();
      await storage256.scrollIntoViewIfNeeded();
      await storage256.click();
      await page.waitForTimeout(5000);
      
      //Click Order Now button 
      await frame.locator('#oi_order_now_button').click();
      await page.waitForTimeout(3000);

      //Assert the order status, title and url of the page 
      const successMsg = frame.getByText('Thank you, your request has been submitted', { exact: true });
      await expect(successMsg).toBeVisible();

      const orderStatus = page.locator('span.experience-title');
      await expect(orderStatus).toContainText('Order Status: REQ');

      await expect(page).toHaveTitle(/Order Status/);
      await expect(page).toHaveURL(/servicecatalog_checkout_view_v2/);

});







