/*

With input tag and attrtibute type="file"
Without input tag and attrtibute type="file"*/


import { test , expect } from "@playwright/test";
import path from "path"
import fs from "fs"
 import { fileURLToPath } from 'node:url'; 
import { dirname } from 'node:path'; 

test("Leanr to upload the file when you have input tag in DOM",async ({page}) => {    

    await page.goto("https://the-internet.herokuapp.com/upload");
  
    const _dirname = dirname(fileURLToPath(import.meta.url)); 

    console.log(_dirname);

    await page.locator('[type="file"]').nth(1).setInputFiles(path.join(_dirname,"../../Data/Sample.pdf"));
     console.log(path.join(_dirname,"../../Data/Sample.pdf")); // name 

    await page.waitForTimeout(3000);


})

test.only("Learn to handle fileUpload when you dont have input tag and type='file'",async ({page}) => {
    

    await page.goto("https://the-internet.herokuapp.com/upload");
    const _dirname = dirname(fileURLToPath(import.meta.url)); 

    console.log(_dirname);


    const fPromise = page.waitForEvent("filechooser");

    await page.locator('[id="drag-drop-upload"]').click();

    const fileUpload = await fPromise

    fileUpload.setFiles(path.join(_dirname,"../../Data/TestLeaf Logo.jpeg"))

    console.log("File uploaded successfully");

    await page.waitForTimeout(3000);


});