// Syntax to store data in JS is : Declaration variable = Data ; 

// In javascript, we can declare the varibale using three different keywords

// 1. var (avoided in modern javascript)
// 2. let (used for variables that can be ressigned)
// 3. const (used for constant values that cannot be reassigned)

// These three difffernt variable declarations will differ maintly based on the four different importtant parameters

// 1. Initilization
// 2. Reassignment
// 3. Re-declaration
// 4. scope

// 1. Initialization => Initialization, meaning adding the value at the time of declaration
var a; //It is not mandatory to initialize at the beginning. you can add later as well
let b; //It is not mandatory to initialize at the beginning. you can add later as well
const c=10; //It is mandatory to initialize at the beginning

// 2. Reassignment => changing the value later
a = 10; // var will allow reassignment
b = 20; // let also allow reassignment
// c = 30; // const wont allow reassignment

// 3. Re-declaration => using same variable to store different data
var a = "Priti";  //Re-declaration is posible when it comes to var
// let b = "Amriti";  // Re-declaration is not possible
// const c = "Kruti";   // Re-declaration is not possible

// 4.scope => scope is all about where we can use this data

//let and const are block-scoped
//var is not block-scoped

{
    let x = 100;
    const y = 200;
    var z = 300;
    // console.log(x);
    // console.log(y);
    // console.log(z);
}
//console.log(x);
   // console.log(y);
    console.log(z);