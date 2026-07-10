import { expect, test } from "@playwright/test"

test('Salesforce Application', async ({ page }) => {


    await page.goto("https://login.salesforce.com/");   //URL

    await page.locator('//input[@id = "username"]').fill("dilipkumar.rajendran@testleaf.com");  //UserName

    await page.locator('//input[@id = "password"]').fill("TestLeaf@2025");  //Password

    await page.locator('//input[@id = "Login"]').click();  //Login button

    await page.locator('//button[@class= "slds-button slds-context-bar__button slds-icon-waffle_container slds-show"] / div').click(); //click waffle icon

    await page.getByRole('button', { name: 'View All Applications' }).click(); //click view all



    await page.locator('one-app-launcher-app-tile[data-name="Sales"]').click();



    await page.getByRole('link', { name: 'Leads' }).click();// Click on Leads tab   



    await page.getByRole('button', { name: 'New' }).click();//click on new button

    await expect(page.getByRole('heading', { name: /New Lead/i })).toBeVisible();


    // Open the Salutation dropdown


    await page.locator('button[aria-label="Salutation"]').click();



    // Select Mrs.
    await page.getByRole('option', { name: 'Mrs.' }).click();



    //Last Name
    await page.locator('input[name="lastName"]').fill('Nanthini');

    //Company Name
    await page.locator(('input[name="Company"]')).fill('Capus');

    //Save
    await page.locator('button[name="SaveEdit"]').click();

    //Edit
    await page.locator('button[name="Edit"]').click();

    //update the company name
    await page.locator(('input[name="Company"]')).fill('Test');

    //Save
    await page.locator('button[name="SaveEdit"]').click();
    await page.waitForTimeout(8000);



}
)

