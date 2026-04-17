//Test case 1: Verify the home page
console.log("*************************** TEST CASE 1: VERIFY THE HOME PAGE *********************************");
launchBrowserAndLogin("chrome","Priti","Priti@123");
console.log("verify home page is displayed or not");
logoutAndCloseBrowser();

// Test case 2: verify the account balance
console.log("*************************** TEST CASE 2: VERIFY THE ACCOUNT BALANCE *********************************");
launchBrowserAndLogin();
console.log("verify home page is displayed or not");
console.log("Navigate to the account balance page");
console.log("Verify the account balance is displayed as "+ getAccountBalance());
logoutAndCloseBrowser();

// Test case 3: verify the account statement
console.log("*************************** TEST CASE 3: VERIFY THE ACCOUNT STATEMENT *********************************");
launchBrowserAndLogin();
console.log("verify home page is displayed or not");
console.log("Navigate to the account balance page");
console.log("Verify the account statement is displayed with the following details");
logoutAndCloseBrowser();


function launchBrowserAndLogin(browser_name, username, password){
    console.log(`Launch the ${browser_name} browser`);
    console.log("Enter the URL : https://www.icici.com/");
    console.log(`Enter the username as '${username}' and password as '${password}'`);
    console.log("Click on login button");
}

function logoutAndCloseBrowser(){
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance(){
    console.log("Navigate to account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

// function with parameter
// function without parameter
// function with return type
// function without return type