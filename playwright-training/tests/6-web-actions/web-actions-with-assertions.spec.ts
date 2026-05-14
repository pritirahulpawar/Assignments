//Web action all about default methods provided by playwright to interact with each and every element
//Assertion => it is all about default methods provided by playwright to verify expected result verses actual results

import {test, expect} from '@playwright/test';

test ('web actions with assertions', async({page}) => {
    //Launch the application
    await page.locator('https://www.example.com');

    //Locate the element 
    const element = page.locator('div#example');

    /****************************************************
              Common web element validations
    ****************************************************/

    //Check if element is dispalyed/visible 
    await expect(element).toBeVisible();  //if element is not displayed program will stop the execution

    //check if the element is enabled
    await expect(element).toBeEnabled();

    //check if the check box is checked already
    const checkbox = page.locator('input[type="checkbox"]');
    await expect(checkbox).toBeChecked();

    //check if the element is hidden or disappear
    const hiddenElement = page.locator('div#hidden');
    await expect(hiddenElement).toBeHidden();

    /****************************************************
              Button Element Validations
    ****************************************************/

    //Locate the element
    const button = page.locator('div#button');

    //verify the label of the button
    const buttonLabelText = await button.textContent(); // if button label is added as text value
    const buttonLabelValue = await button.getAttribute('value'); // if button label is added as attribute value

    await expect(buttonLabelText).toBe("Login"); //user defined
    //Playwright default methods we don't need to create
    await expect(button).toHaveText("Login");
    await expect(button).toHaveAttribute("value","Login");

    //click on the button
    await button.click();

    //double click on the button
    await button.dblclick();

    //right click on the button
    await button.click({button: 'right'});

    //mouse hover over the button
    await button.hover();

    //scroll till the button is getting displayed if the button is available somewhere at the bottom of the page
    await button.scrollIntoViewIfNeeded();

    //Force click on the button if button is not responding or in a disabled state or covered by some other element
    await button.click({force : true});

    /****************************************************
              Textbox Element Validations
    ****************************************************/

   //Locate the element
   const textbox = page.locator('div#textbox');

   //clear the existing text value from the textbox
   await textbox.clear();

   //verify the placeholder of the text box to identify the text box purpose
   const placeholder = textbox.getAttribute('placeholder');

   //Type the text within the text box
   await textbox.fill("Priti Pawar");

   //Press the function keys within the textbox
   await textbox.press('Control+A');
   await textbox.press('Backspace');

   //verify the value entered into the textbox
   const textEntered = await textbox.getAttribute('value');
   await expect(textEntered).toBe('Priti Pawar'); //option 1 for assertion
   await expect(textbox).toHaveValue('Priti Pawar'); //option 2 for assertion
   
});