// Syntax to store Data: Declaration variable = data;

// Data types in javascript are divided into two different categories.
// 1. Primitive Data Types (immutable data types)
// 1. Non - Primitive Data Types (mutable data types)

//immutable - we cannot change original value until we cannot reassigned
let a = 10; //stroring number
a+10; //adding 10
console.log(a);

//mutable
// let obj = {
//     name : "Priti",
//     id : 1235,

// }
// obj.name = "Prital";
// console.log(obj);


let b=[1,2,3,4];
b.push(4);
console.log(b);

/****************************************************************/
/******************Priitmitive Data Types************************/
/****************************************************************/

//1. Number ==> The data type can be used to store numbers with decimals or without decimals
let num1 = 10;
let num2 = 10.55;
console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

//2. String ==> The data tyoe can be used to store text value. we can store single quote, double quote or backticks.
let str1 = "she told me, 'Good morning'";
let str2 = 'I replied back with "Good Afternoon"';
console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

let empName = "Sakshi";
let location = "MH";
console.log("New employee name is "+empName+ " and location is "+ location);
console.log(`New employee name is ${empName} and location is ${location}`);

//3. boolean ==> The can be used to store result of condition in the form true or false
let x = 10;
let y = 20;
let result = x>y;
console.log(result);
console.log(typeof result);

//4. undefined ==> undefined represents a variable that has been declared but not assigned any value
let age;
console.log(age);

//5. null ==> null represents a variable that has been declared and intentionally assigned empty value
let salary = 10000;
salary = null;
console.log(salary);

//6.Symbol


/**********************************************************************/
/****************** Non Priitmitive Data Types ************************/
/**********************************************************************/

// 1. Object => Object data type represents collection of key value pairs

let person= { 
    name : "Priti",
    age : 27,
    visaStatus : true,
    address : {
        city : "Pune",
        state : "MH",
        zip : 414103
    }
}

//Print the name of the person
console.log(person.name);  //method1
console.log(person["name"]); //method2

//Print city of the person
console.log(person.address.city);
console.log(person.address["city"]);

// Print complete person details
console.log(person);

// 2. Array => Array represnts list of values

let fruits=["apple", "banana", "Mango"];
console.log(fruits[1]);

// 3. function => A function represents block of code or collection of statements to complete specific task
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

// 4. set => 