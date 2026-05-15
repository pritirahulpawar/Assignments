// ================== Assignment - 2 ===============================
import test, { expect } from '@playwright/test';

test ('Assignment 2' , async({page}) =>{
    // 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    await page.goto('https://demoqa.com/automation-practice-form');

    // 2. Wait for Page-load
    const header = page.locator('.text-center');
    await expect(header).toHaveText('Practice Form');
    console.log('Header of the application displayed sucessfully');

    // 3. Enter First name and Last name
    const firstName = page.locator('input#firstName');
    await firstName.fill('Priti');
    const lastName = page.locator('input#lastName');
    await lastName.fill('Pawar');
    console.log("Username and password entered sucessfully");

    // 4. Enter Email
    const emailAddress = page.locator('input#userEmail');
    await emailAddress.fill('priti.rahul.pawar@gmail.com');
    console.log("email is entered sucessfully");

    // 5. Select Gender (Male)
    await selectGender(page, 'Female');

    // 6. Enter mobile number
    const mobileNumber = page.locator('input#userNumber');
    await mobileNumber.fill('1234567890');
    console.log("mobile number is entered sucessfully");

    // 7.Select DOB (1-Feb-1991)
    const dateElement = page.locator('input#dateOfBirthInput');
    await dateElement.fill('1-Feb-1991');
    const value = await dateElement.getAttribute('value');
    console.log(value);

    // 8.Search and Select Computer Science and English
    const comboBox = page.locator('input#subjectsInput');
    await comboBox.fill('Computer Science');
    await comboBox.press('Enter');
    console.log("Computer Science is entered sucessfully");
    await comboBox.fill('English');
    await comboBox.press('Enter');
    console.log("English is entered sucessfully");

    // 9.Select Hobbies as Sports and Reading
    // const selectSports = await page.locator('input#hobbies-checkbox-1');
    // await selectSports.check();
    // const selectReading = await page.locator('input#hobbies-checkbox-2');
    // await selectReading.check();

    // await selectHobbies(page, "Sports");
    // await selectHobbies(page, "Reading");

    // 10.Upload photo
    const uploadPhoto = page.locator('input#uploadPicture');
    uploadPhoto.setInputFiles('/Users/pankajparande/Desktop/logo.png');

    // 11.Submit Details
    //await page.locator('button#submit').click();
});

async function selectGender(page : any , valueToSelect : string){
    const gender = page.locator(`//label[text()="${valueToSelect}"]`);
    await gender.check();
    console.log(`Selected gender is: ${valueToSelect}`);

}
async function selectHobbies(page:any ,hobby: string){
    const hobbyElement = await page.locator(`//label[text()="${hobby}"]`);
    const isChecked = await hobbyElement.isChecked();
    if (!isChecked) {
        await hobbyElement.check();
    }
    console.log(`Selected hobby is: ${hobby}`);
}


