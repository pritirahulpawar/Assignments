// function in typescript => A function is a block of code or collection of statements to complete specific task.

// There are mainly three different types of functions available in Typescript.

//1. Named functions
//2. Anonymous functions
//3. Arrow functions

//1. Named functions => The functions declared explicitly with some name are called named functions

//Syntax
//function functionName(parameters): returnType{
// // function body
//}

// Example of named function
function launchBrowserAndLogin(browser_name:string, username:string, password:string){
    console.log(`Launch the ${browser_name} browser`);
    console.log("Enter the URL : https://www.icici.com/");
    console.log(`Enter the username as '${username}' and password as '${password}'`);
    console.log("Click on login button");
}

//2. Arrow function / Lamda function => the function is declared without any name and the implementation will be written using an arrow mark/

// Syntax
// let functionName = (parameters): returnType => {
// // function body
// }

// Regular function to calculate two numbers
function add (a: number,b:number){
     let c:number = a+b;
     return c;
} 

// Arrow function to calculate sum of two numbers
let sum = (a:number, b:number ) => a+b;
let square = (a:number) => a*a;

console.log(add(1,2));
console.log(sum(1,2));
console.log(square(3));

//3. Anonymous function = >  the function s declared without any name, anonymous function will be used as a parameter of other functions.
// syntax
//function(functionName) : returnType{
// function body
// }

// Example of anonymous function as a parameter of another function
function mainFunction(square : (a : number) => number):void{
    console.log(square(2));
}

// normal function to calculate square of two numbers
function mainFunction2(a: number): void {
    console.log(a*a);
}

//calling function
mainFunction(
    // anonymous function as parameter
    function (a:number):number{
        return a/a;
    }
)

//calling function
mainFunction2(4);
    
