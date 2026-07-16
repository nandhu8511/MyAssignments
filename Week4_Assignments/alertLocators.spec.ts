import {expect, test} from "@playwright/test"

test('W3Schools-Alert', async ({page}) => {


    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");   //URL

    page.on('dialog', async dialog => {

        await dialog.accept();

    });

     const frame1 = page.frameLocator('#iframeResult');      //Try button inside the frame
     await frame1.locator('//button[text()="Try it"]').click();     
    
    
    await expect(frame1.locator('#demo')).toHaveText('You pressed OK!'); // dialog box text assertion
    await page.waitForTimeout(5000); // for demo purpose
}
);
