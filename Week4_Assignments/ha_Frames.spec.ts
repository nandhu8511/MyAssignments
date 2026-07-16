    import { chromium, expect, test } from "@playwright/test";

    test("Learning Frames", async ({ page }) => { 

    await page.goto("https://leafground.com/frame.xhtml");

    // Click Me button inside frame 

    const frameRef = page.frameLocator('[src="default.xhtml"]');

    await frameRef.locator("#Click").click();

    await page.waitForTimeout(3000)

    const label = await page.locator('//h5[contains(text(),"Click Me (Inside frame)")]').innerText()

    console.log(label);
    
    //Assert the text changed after clicking the button - 
     
    await expect(frameRef.locator('#Click')).toHaveText(' Hurray! You Clicked Me.');

    //Get the total count of frames present in the page - 

    const allframe = page.frames() 

    const frameCount = allframe.length

    console.log(`The number of frames is ${frameCount}`);

    //Interact with the Click Me button present inside the nested frames

    const frame_outerFrame = page.frameLocator('[src="page.xhtml"]');

    const frame_innerFrame = frame_outerFrame.frameLocator('[id="frame2"]');

    await frame_innerFrame.locator('#Click').click();

    console.log(await page.title());

    await page.waitForTimeout(3000)

    //Assert the text changed after clicking the button 

     await expect(frame_innerFrame.locator('#Click')).toHaveText(' Hurray! You Clicked Me.');


    });
