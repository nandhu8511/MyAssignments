import {expect, test} from "@playwright/test"
test('CheckBox', async ({page}) => {

await page.goto("https://leafground.com/checkbox.xhtml");   //URL

await page.locator('//span[text()="Basic"]/preceding-sibling::div[contains(@class,"ui-chkbox-box")]').click();//basic checkbox


await page.locator('//span[text()="Ajax"]/preceding-sibling::div[contains(@class,"ui-chkbox-box")]').click();//"Notification Checkbox." 

//Verify that the expected message is displayed. 
const toast = page.locator('text=Checked');

await expect(toast).toBeVisible();
await expect(toast).toContainText('Checked');
//await page.waitForTimeout(7000); // for demo purpose


// favorite language (assuming it's related to checkboxes). 
await page.locator('//label[text()="Javascript"]/preceding-sibling::div').click();

//"Tri-State Checkbox." 
const triState = page.locator('//div[@id="j_idt87:ajaxTriState"]//div[contains(@class,"ui-chkbox-box")]');
await triState.click();

// Verify which tri-state option has been chosen. 
await expect(page.locator('//div[@id="j_idt87:ajaxTriState"]//span[contains(@class,"ui-chkbox-icon")]')).toHaveClass(/ui-icon-check/);

//8. Click on the "Toggle Switch." 
await page.locator('//div[@id = "j_idt87:j_idt100"]').click();
 

//9. Verify that the expected message is displayed. 
const toggleToast = page.locator('text=Checked');

await expect(toggleToast).toBeVisible();
await expect(toggleToast).toContainText('Checked');

//10. Verify if the Checkbox is disabled. 
const disabledCheckbox = page.locator('#j_idt87\\:j_idt102_input');
await expect(disabledCheckbox).toBeDisabled();


//11. Select multiple options on the page (details may be needed). 
await page.locator('//div[contains(@class,"ui-selectcheckboxmenu-trigger")]').click();
await page.waitForTimeout(7000);
// Select Miami
await page.locator('//label[text()="Miami"]/preceding-sibling::div').click();

// Select London
await page.locator('//label[text()="London"]/preceding-sibling::div').click();

// Select Paris
await page.locator('//label[text()="Paris"]/preceding-sibling::div').click();
await page.waitForTimeout(7000);

//12. Perform any additional actions or verifications required.

//13. Close the web browser when done. 
await page.close();


}
)
