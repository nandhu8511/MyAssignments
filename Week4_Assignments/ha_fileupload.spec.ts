import { test, expect } from '@playwright/test';
import fs from "fs";
import path from 'path';
 import { fileURLToPath } from 'node:url'; 
import { dirname } from 'node:path'; 
test.use({ storageState: 'Data/login_salesforce.json' }); // use the stored data for login


test('File Upload in Sales Force App', async ({ page }) => {

    await page.goto("https://orgfarm-6ee47859ef-dev-ed.develop.lightning.force.com/lightning/page/home");// homepage

    await page.locator('//button[@title="App Launcher"]').click(); // home page

    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'View All Applications' }).click(); //click view all

    await page.getByPlaceholder('Search apps or items...').fill('Accounts'); // search for Accounts

    await page.locator("//a[@data-label='Accounts']").click();
   
    await page.locator("//a[@role='button' and @title='New']").click();

    await page.locator("//input[@class='slds-input' and @name ='Name']").fill("test Account"); // fill account name

    // Click the Rating dropdown
    await page.getByRole('combobox', { name: 'Rating' }).click();

    // Select Warm
    await page.getByRole('option', { name: 'Warm' }).click();

    //Click the Type dropdown 
    await page.getByRole('combobox', { name: 'Type' }).click();

    const typeDropdown = page.getByRole('combobox', { name: 'Type' });

    // Get the currently selected value
    const selectedValue = await typeDropdown.getAttribute('data-value');

    if (selectedValue !== 'Prospect') {
        await typeDropdown.click();
        await page.getByText('Prospect', { exact: true }).click();
    }

    console.log(`Selected Type: ${selectedValue}`);

    //Click the Industry dropdown 
    await page.getByRole('combobox', { name: 'Industry' }).click();

    //select Banking option
    await page.getByText('Banking', { exact: true }).click();

    //Select Ownership dropdown
    await page.getByRole('combobox', { name: 'Ownership' }).click();

    //Select Public
    await page.getByText('Public', { exact: true }).click();

    // Click Save
    await page.locator("//button[@name='SaveEdit']").click();   

    // Assert the Account created
    const toast = page.locator("//span[contains(text(),'was created')]");

    await page.waitForTimeout(6000);

     await expect(toast).toHaveText('Account "test Account" was created.');
    
    await page.waitForTimeout(4000);

    // Upload files withougt input tag

     const fPromise = page.waitForEvent("filechooser");

    const _dirname = dirname(fileURLToPath(import.meta.url)); 

    await page.locator("//span[text()='Upload Files']").click();

    const fileUpload = await fPromise

    await fileUpload.setFiles(path.join(_dirname,"../../Data/Testleaf Logo.jpeg"))

    console.log("File uploaded successfully");

   // Click Done and assert the uploaded 

    await page.getByRole('button', { name: 'Done' }).click();
    
    await page.locator("//span[contains(text(),'was added to the Account')]");
     
    await expect(page.getByText("1 file was added to the Account.")).toBeVisible();
    
    
});
