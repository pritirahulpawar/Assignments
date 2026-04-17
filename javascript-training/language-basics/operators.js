//Syntax to store data : Declaration variable : data ; 

//Operators => Operators are special char used to perform operations in js

//There are 5 types of operators in js

//1. Arithmetic operators
//2. Assignment operators
//3. Comparison operators
//4. Logical operators
//5. Ternary operators

//1. Arithmetic operators : the special characters used to perform mathematical operation in js(+, -,*, /, %)
//+ addition
//- substraction
//* multiplication
// /division
//% modulus(returns the remainder of division operation)(9%3=0)(10%3=1)
//++ increment(increase a variable's value by 1)
//-- decrement(decrease a variable's value by 1)

let a = 10;
let b = 20;

// a++ => post-increment => post execution of current line, increase the value by 1
console.log("Post increment: "+ (a++));
console.log("Next line of post increment: "+ (a));

// ++b => pre-increment => increase the value by 1 before execution of current line
console.log("Pre Increment: "+ (++b));
console.log("Next line of pre increment: "+ (b));

// a-- => post-decrement => post execution of current line, decrease the value by 1
console.log("Post decrement: "+ (a--));
console.log("Next line of post decrement: "+ (a));

// --b => pre-decreament => decrease the value by 1 before execution of current line
console.log("Pre decrement: "+ (--b));
console.log("Next line of pre decrement: "+ (b));

//2. Assignment Operators =>Special characters used to assign the values to the variable(=, += , -=, *=, /=, %=)
let c = 20;
console.log("Initial value of c: " + c);

c += 10; // c = c + 10 => c = 20 + 10 => c = 30
console.log("After using += operator: "+ c);

c -= 10; // c = c - 10 => c = 30 - 10 => c = 20
console.log("After using -= operator: "+ c);

c *= 10; // c = c * 10 => c = 20 * 10 => c = 200
console.log("After using *= operator: "+ c);

c /= 10; // c = c / 10 => c = 200 / 10 => c = 20
console.log("After using += operator: "+ c);

//3. Comparison operators => Special characters used to compare the values and return a value(true or false)
//== Represents loose equality => used to compare the value only not the type of the data
//=== Represents strict equality = used to compare the value and type of the data
let x = 10;
let y = "10"; // when we use quotes(single/double/backticks), it will be trated as text

console.log("Loose euqlity with == : "+ (x==y));
console.log("Strict euqlity with === : "+ (x===y));
console.log("Not equals with != : "+ (x!=y));
console.log("Greater than with > : "+ (x>y));
console.log("less than with < : "+ (x<y));
console.log("Greater than or equal to with >= : "+ (x>=y));
console.log("less than or equal to with <= : "+ (x<=y));

//4. Logical operators => special characters used to perform logical operation on boolean values(&& , ||, !)
// && represents logical AND => it returns true if both operands are true, otherwise it returns false
// || represents logical OR => it returns true if at least one of the operands true otherwise it returns false
// ! represents logical NOT => it returns true if operand is false, and it returns false if operand is true

let i = 10;
let j = 20;
console.log((i<j) && (i==j)) // true and false => false
console.log((i<j) || (i==j)) // true or false => true
console.log(!((i<j) && (i==j))) // not(true and false) => not(false) => true

//5. Ternary operator => special character used to perform a conditional operation.(?)
//let result = (condition) ? valueIfTrue : valueIfFalse ; 
let age = 17;
let result = (age >= 18) ? "Eligible to vote" : "Not eligible to vote" ; 
console.log(result);
