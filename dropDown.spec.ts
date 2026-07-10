import { test } from "@playwright/test"

test('Leafground Application-Dropdown', async ({ page }) => {

    await page.goto("https://leafground.com/select.xhtml");   //URL

    //Select your favorite UI automation tool using the different select options 
    await page.selectOption('//select[@class = "ui-selectonemenu"]', { index: 2 })


    //Get the count and print of all the values 
    const dropDownValues = page.locator('//select[@class = "ui-selectonemenu"]/option');
    const dropDownCount = await dropDownValues.count();

    for (let index = 1; index < dropDownCount; index++) {
        console.log(await dropDownValues.nth(index).innerText());

    }

    //Choose your preferred Country 
    await page.locator('//label[@id="j_idt87:country_label"]').click();
    await page.locator('//li[text() = "India"]').click();


    //Confirm Cities belongs to Country is loaded 

    //Choose any three courses from the dropdown 
    await page.locator('//input[@id="j_idt87:auto-complete_input"]').click();

    const input = page.locator('//input[@id="j_idt87:auto-complete_input"]');
    await input.type('Sel');
    await page.locator('//li[@data-item-label = "Selenium WebDriver"]').click();

    await input.type('Play');
    await page.locator('//li[text() = "Playwright"]').click();

    await input.type('Post');
    await page.locator('//li[text() = "PostMan"]').click();
    // Close the dropdown
    await page.keyboard.press('Escape');

    //Choose a language and print all the values from the dropdown. 
    await page.locator('//label[@id="j_idt87:lang_label"]').click();
    await page.locator('//li[text()="English"]').click();

    //Select 'Two' irrespective of the language chosen

    await page.locator('#j_idt87\\:value_label').click();

    await page.locator('//li[normalize-space()="Two"]').click();
    await page.waitForTimeout(5000); // for demo purpose

}
)