import {test, expect} from '@playwright/test';

test('Web actions - Handling Frames' , async({page}) => {
 
    // 1. Enter the URL and Launch the application
    await page.goto('https://demoqa.com/frames');

    //2. Loacte the Main window element
    const mainWindowElement = page.locator("h1.text-center");

    //Locate the frame
    const frame = page.frameLocator('iframe#frame1');

    //3. Locate frame element
    const frameWindowElement = frame.locator('h1[id="sampleHeading"]');

    //4. Copy and Print the text from main window element
    console.log(await mainWindowElement.textContent());

    //5. Copy and Print the text from frame window element
    console.log(await frameWindowElement.textContent());



});