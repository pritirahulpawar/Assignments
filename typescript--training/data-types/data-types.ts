// Syntax to store data in Typescript :  Declaration variable : DataType = Data;

// Data Types in typescipt are divided into two categories.

// 1. Primitive data types
// 2. Non-primitive data types

/****************************************************************/
/******************Primitive Data Types************************/
/****************************************************************/

//1. Number ==> The data type can be used to store numbers with decimals or without decimals
let num1 : number = 10;
let num2 : number = 10.55;
console.log(num1);
console.log(num2);

//2. String ==> The data tyoe can be used to store text value. we can store single quote, double quote or backticks.
let str1 : string = "she told me, 'Good morning'";
let str2 : string = 'I replied back with "Good Afternoon"';
console.log(str1);
console.log(str2);

//3. boolean ==> The can be used to store result of condition in the form true or false
let x : number = 10;
let y : number = 20;
let result : boolean = x > y;
console.log(result);

//4. undefined ==> undefined represents a variable that has been declared but not assigned any value
let age : undefined;
console.log(age);

//5. null ==> null represents a variable that has been declared and intentionally assigned empty value
let salary : null = null;
console.log(salary);

//6. union => Union represents more than one data type within the variables
let empAddress : string | number | boolean = "Pune";
console.log(empAddress);
empAddress = "Maharastra";
console.log(empAddress);
empAddress = 414103;
console.log(empAddress);

//7. any => any represents any data type is allowed within a variable.
let data: any ="Hello world";
console.log(data);
data =100;
console.log(data);
data = true;
console.log(data);

/**********************************************************************/
/****************** Non Priitmitive Data Types ************************/
/**********************************************************************/

// 1. Object => Object data type represents collection of key value pairs

interface personInfo{ 
    name : string,
    age : number,
    visaStatus : boolean,
    address : {
        city : string,
        state : string,
        zip : number
    }
}

let person : personInfo = { 
    name : "Priti",
    age : 27,
    visaStatus : true,
    address : {
        city : "Pune",
        state : "MH",
        zip : 414103
    }
}
console.log(person);

// 2. Array => Array represnts list of values

let fruits: string[] = ["apple", "banana", "Mango","orange"];
let prices: number[] = [300,60,28,700];
let fruitsAndPrices : (string | number)[] = ["apple",300, "banana",60, "Mango",28,"orange"];
console.log(fruits[1]);

// 3. tuples => tuple represents list of values in specific order

// Array:
//store emp name , emp phone number, emp visa status within the array
let empDetails : (string | number | string | boolean )[] = ["priti",true , 5677896789,"priti"];
console.log(empDetails);

//tuples
let empInfo : [string,number,boolean] = ["priti", 1234567789,true];
console.log(empInfo);

// 3. function => A function represents block of code or collection of statements to complete specific task
function launchBrowserAndLogin(browser_name:string, username:string, password:string):void{
    console.log(`Launch the ${browser_name} browser`);
    console.log("Enter the URL : https://www.icici.com/");
    console.log(`Enter the username as '${username}' and password as '${password}'`);
    console.log("Click on login button");
}

function logoutAndCloseBrowser():void{
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance():number{
    console.log("Navigate to account balance page");
    let accountBalance = 100000;
    return accountBalance;
}
// 4. set => A set represents a collection of unique values of any data type
let empIDS : Set<number>= new Set(); // creating the empty set will store data
empIDS.add(121);
empIDS.add(122);
empIDS.add(123);
empIDS.add(124);
empIDS.add(124);

console.log(empIDS);

// 5. Map => A map can store multiple values in the form of key-value.It will allow duplicate values but not duplicate keys

let empMap : Map<string,string|number>= new Map();
empMap.set("empID",121);
empMap.set("empName","Priti");
empMap.set("empAge",27);
empMap.set("empID",122);  //duplicate key
empMap.set("empLucyNumber",27); //duplicate value
console.log(empMap);

// 6. Date => A date data type represents specific point in time.
let currentDate = new Date();
console.log(currentDate);

// get current year
console.log(currentDate.getFullYear());

// get current month
console.log(currentDate.getMonth()+1);

// get current day
console.log(currentDate.getDay());  // day starts from 0 to 6 (0-sunday, 1-monday, 2-tuesday, 3-wednesday, 4-thursday, 5-friday, 6-saturday)

// get current date
console.log(currentDate.getDate()); 

// get current hours
console.log(currentDate.getHours()); 

// get current minutes
console.log(currentDate.getMinutes()); 

// get current seconds
console.log(currentDate.getSeconds()); 