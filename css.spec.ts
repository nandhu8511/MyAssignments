
import { test } from "@playwright/test"

test('CSS Selectors', async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");   //URL

    await page.locator('//input[@id = "username"]').fill("Demosalesmanager");  //UserName

    await page.locator('//input[@id = "password"]').fill("crmsfa");  //Password

    await page.locator('//input[@class = "decorativeSubmit"]').click();  //Login button

    await page.locator('//a[contains(text(),"FA")]').click();  //CRM/SFA link

    await page.locator('//a[text() = "Leads"]').click();  //Create Lead link

    await page.locator('//a[text() = "Create Lead"]').click();  // click create Lead

    await page.locator('//input[@id = "createLeadForm_companyName"]').fill("Capus Company");  //Fill the Company Name  

    await page.locator('//input[@id = "createLeadForm_firstName"]').fill("Nanthini");  // Fill the First Name  

    await page.locator('//input[@id = "createLeadForm_lastName"]').fill("Devi");  // Fill the Last Name 

    await page.locator('//input[@id = "createLeadForm_personalTitle"]').fill("Ms.");  // Fill the Salutation 

    await page.locator('//input[@id = "createLeadForm_generalProfTitle"]').fill("Sales Manager");  //  Fill the Title

    await page.locator('//input[@id = "createLeadForm_annualRevenue"]').fill("500000");  //  Fill the Annual Revenue 

    await page.locator('//input[@id = "createLeadForm_departmentName"]').fill("Sales");  //  Fill the Department

    await page.locator('//input[@id = "createLeadForm_primaryPhoneNumber"]').fill("123-456-7890");  // Fill the Phone number

    await page.locator('//input[@class = "smallSubmit"]').click();  //  Click Create Lead button 

    console.log("successfully created the lead");  // Print the success message

    const title = await page.title();  // Get the page title
    
    console.log(title);  // Print the page title

}
)
