//Assertions_classroom activity

import { expect, test } from "@playwright/test"

test('CSS Selectors', async ({ page }) => {

    await page.goto("https://leafground.com/input.xhtml");   //URL

    await expect(page.locator('//input[@id="j_idt88:j_idt93"]')).toBeDisabled(); //: Validate a Disabled Textbox 

    const textbox = page.locator('//input[@id="j_idt88:name"]');

    await expect(textbox).toBeEditable();
    
    await textbox.fill("Nanthini");
    
    await expect.soft(page.locator('//input[@id = "j_idt88:j_idt95"]')).toBeDisabled(); //soft assertion

    await page.locator('//input[@id = "j_idt88:j_idt97"]').fill("Playwright Learning");


}
)
