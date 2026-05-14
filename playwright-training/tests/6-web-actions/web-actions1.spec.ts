

import {test, expect} from '@playwright/test';

test ('Assignment1', async({page}) => {
    // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // 2.verify application logo is displayed
    const applicationLogo =  page.locator('img[title="ParaBank"]');
    await expect(applicationLogo).toBeVisible();
    console.log("Apllication Logo is displayed sucessfully");

    // 3.Verify application caption displayed as "Experience the difference"
    const caption =  page.locator('p[class="caption"]');
    await expect(caption).toHaveText('Experience the difference');
    console.log("Caption is displayed as expected");

    // 4.Enter invalid username
    const userName =  page.locator('input[name="username"]');
    await userName.fill("Invalid User");

    // 5.Enter empty Password
    const password =  page.locator('input[name="password"]');
    await password.fill(" ");

    // 6.Click on login button
    const button =  page.locator('input[class="button"]');
    await button.click();

    // 7.Verify the error message "Please enter a username and password."
    const errorMessage =   page.locator('p[class="error"]');
    await expect(errorMessage).toHaveText("An internal error has occurred and has been logged.");
    console.log("Error message is displayed sucessfully");

    // 8.Click on admin page link
    const adminPageLink =   page.locator('li > a[href="admin.htm"]');
    await adminPageLink.click();

    // 9.select the option "soap" from dba mode radio button
     await selectAccessMode(page, "soap");

    // 10.Scroll to element dropdown
    const dropdown =  page.locator('select[id="loanProvider"]');
    await dropdown.scrollIntoViewIfNeeded();

    // 11.Select the option web service from the dropdown
    await dropdown.selectOption({label:'Web Service'});
    console.log("Selected option 'Web Service' from the dropdown successfully.");

    // 12.click on submit button
    const submitButton = page.locator('form[id="adminForm"] > input[class="button"]');
    await submitButton.click();

    // 13.verify submission is successful by validating success message
    const successMessage = await page.locator('//b[text()="Settings saved successfully."]');
    await expect(successMessage).toBeVisible();
    console.log("Settings saved successfully message is displayed.");

    // 14.Click on services page link
    const servicesPageLink = await page.locator('//ul[@class="leftmenu"]//a[text()="Services"]');
    await servicesPageLink.click();
    console.log("Clicked on services page link successfully.");

    // 15.wait for service page
    const bookStoreServicesHeader = await page.locator('//span[text()="Bookstore services:"]');
    await expect(bookStoreServicesHeader).toBeVisible();
    console.log("Bookstore services header is visible.");

    // 16.Scroll down till bookstore services table
    await bookStoreServicesHeader.scrollIntoViewIfNeeded();

    // 17.get total rows of books store services table
    const rows = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr');
    const totalRows = await rows.count();
    console.log(`Total rows in bookstore services table: ${totalRows}`);

    // 18.get total columns of books store services table
    const columns = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]//td');
    const totalColumns = await columns.count();
    console.log(`Total columns in bookstore services table: ${totalColumns}`);

    // 19.Print table data (row wise and column wise data)
    for (let i = 1; i <= totalRows; i++) {
        for (let j = 1; j <= totalColumns; j++) {
            const cell = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[${i}]//td[${j}]`);
            const cellData = await cell.textContent();
            console.log(`Row ${i} Column ${j}: ${cellData}`);
        }

    }
});

async function selectAccessMode(page: any, mode: string) {
    const accessMode = await page.locator(`input[value="${mode}"]`);
    await accessMode.check();
    console.log(`Selected access mode: ${mode}`);
}