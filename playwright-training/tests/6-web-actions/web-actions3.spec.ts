import {test} from '@playwright/test';

test ('Alert Assignment', async({page}) => {
    // 1. Enter URL and Launch the application (https://demoqa.com/alerts)
    await page.goto('https://demoqa.com/alerts');

    // 2. Locate Alert buttons to trigger the alerts
    await page.locator('button#alertButton').click();

    // 3. Click on the information alert and copy the alert message and then select OK button
    const alertButton = await page.locator('button#timerAlertButton');
    
    page.on('dialog', async dialog => {
        //copy the alert message
        const alertMessage = dialog.message();
        console.log("Information Alert Message: "+ alertMessage);

        //select OK button
        await dialog.accept();
    });
    alertButton.click();
    await page.waitForTimeout(5000);

    // 4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
    const confirmButton = await page.locator('button#confirmButton');
    
    page.on('dialog', async confirmAlert =>{
        //copy the alert message
        const confirmMessage = confirmAlert.message();
        console.log("Confirmation Alert Message: "+ confirmMessage);

        //select the cancel button
        await confirmAlert.dismiss();
    });
   confirmButton.click();
   await page.waitForTimeout(5000);

    // 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.
    const promptButton = await page.locator('button#promtButton');

    page.on('dialog' , async propmtAlert => {
        //copy the alert message
        const promptMessage = propmtAlert.message();
        console.log("Prompt Alert Message: "+ promptMessage);

        //Enter the text inside alert and select OK button
        await propmtAlert.accept("This is Prompt alert");
       
    });
    promptButton.click();
    await page.waitForTimeout(5000);

});