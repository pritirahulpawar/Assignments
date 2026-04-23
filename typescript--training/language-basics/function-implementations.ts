// function Implementations

// There are multiple ways that we can implement any function to complete specific task

//1. function without parameters and without return type
// creating a function, it will not take any parameter and will not return any output . we can use only void return type
function greet():void{
    console.log("Hello, Buddy");
}

//calling the function
greet();

// 2. function with parameter and without return type
// creating function, it will take parameters but not return any output, always use void return type

function greetPerson(name: string):void{
    console.log(`Hello , ${name}`);
}

// calling the function
greetPerson("Bhhomi");

//3. function with parameter and with return type
// creating function, it will take parameters as well as return some output, we need to specify return type of function.
function add(a: number, b:number):number{
    return a+b;
}

//calling the function
const sum = add(3,2);
console.log(`The sum is: ${sum}`);

//4. function without parameters and return type
function getGreeting():string{
    return "Hello, Buddy";
}

//calling the function
const greeting = getGreeting();
console.log(greeting);

//5. function with optional parameters
//creating function, it will take some input parameter but parameters are not mandatory. we can use the ? symbol to denote optional parameter
function printPersonDetails(name:string, age ?:number):void{
    if(age){
        console.log(`Name: ${name}, Age: ${age}`);
    }
    else{
        console.log(`Name: ${name}`);
    }

}
//calling the function
printPersonDetails("Priti",27);
printPersonDetails("Priti");

//6. function with default parameters
//creating function, it will take some input parameters and for some parameters we can add default value. if we have not update any value while calling the function, it will use default value always
function printEmpDetails(name: string, visaStatus: boolean = false){
    console.log((`Name: ${name}, Visa Status: ${visaStatus}`));
}

//calling the function
printEmpDetails("Priti", true);
printEmpDetails("Priti");

//7. function with rest parameters
//creating the function, it will take some input parameters but we are not sure about the number of parameters to be passed while calling the function
function sumOfNumbers(...numbers: number[]): number{
    let sum: number = 0;
    for(let num of numbers){
        sum += num;
    }
    return sum;

}

//calling the function
console.log(`The sum of numbers is: ${sumOfNumbers(1,2,3,4,5)}`);
console.log(`The sum of numbers is: ${sumOfNumbers(1,2)}`);
console.log(`The sum of numbers is: ${sumOfNumbers(1,2,3,4,5,6,7,8,9,10)}`);
