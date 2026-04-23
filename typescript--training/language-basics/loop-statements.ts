//Loop statements : Loop of statements or execute same statement multiple times.

//Before Loop statements

let name : string = "Jyoti";
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);

//Loop statements are mainly two different categories

//1. for loop=> when we know total number of iterations to be executed before itself
//2. while loop=> when we don't know total number of iterations to be executed before

// for loop
//Syntax : for (condition-to-start; condition-to-end; increment/decrement){
// // statements to be executed
//}

for (let i:number =1; i<=10; i++){
    console.log(`${i} . ${name}` );
}

// while loop => when we don't know the total number of iterations
// Syntax
// while(condition-to-begin){
//     // statements to be executed
// }

let j: number = 1;
let isPageLoaded: boolean = false;

while (j>0){
    if(isPageLoaded || j>5){
        break ; //break the loop
    }
    console.log("Refresh the Page");
    j++;
}

//specific cases of loops

//1. for...of loop => for-of loop will be used to iterate over a predefined list- like array
//2. for...in loop => for-in loop will be used to iterate over the properties of an object
//3. do...while loop => do-while loop will be used to execute the statements at least once, even when the condition is false.

//1. for...of loop

//Array => Array represents a list of values
let fruits: string[] = ["apple", "banana", "orange","mango"];

//normal for loop
for(let i=0; i<fruits.length ;i++){
    console.log(fruits[i]);
}

//for...of loop => Each and every value of the given list
for(let fruit of fruits){
    console.log(fruit);
}

//2. for...in loop => for...in loop will be used to iterate over the properties of an object
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

//for...in loop
for(let key in person){
    console.log(key);
    console.log(person[key as keyof personInfo]);
}

//3. do...while loop => do-while loop will used to execute the statements at least once, even when the condition is false

// syntax:
// do{
//     //statements to be executed
// }
// while(condition-to-begin);

let x:number = 0;
do{
    console.log("Refresh the Page");
    x++;
}while(x>0);