//Conditional statements - Statements (lines of code ) along with conditions

// There are mainly two important conditional statements available in Javascript or Typescript.

//1. If-else conditional statement => used when we don't know the result of the condition before.
//2. Switch-case conditional statement => used when we have to choose one of the option among multiple

//1. If-else conditional statement

// Syntax of If-else conditional statement
/*
if(condiiton){
    //code to be executed when the condition is true
}
else if(condition){
    //code to be executed when the condition is true
}
    else if(condition){
    //code to be executed when the condition is true
}
else{
    //code to executed when all the above conditions are false
}
*/

//Syntax of nested if-else conditional statement 
/*
if(condiiton){
    //code to be executed when the condition is true
    if(condiiton){
    //code to be executed when the condition is true
    } 
    else{
    //code to be executed when the condition is false 
    }  
}
else{
    //code to executed when all the above conditions are false
}
*/

// Example of If-else conditional statement

let percentage : number = 98;
if(percentage >= 98){
    console.log("Grade A");
}
else if(percentage >= 80){
    console.log("Grade B");
}
else if(percentage >= 70){
    console.log("Grade C");
}
else{
     console.log("Grade D");
}

//Example of nested if-else conditional statement 
if(percentage >= 90){
    console.log("Grade A");
    if(percentage >= 95){
        console.log("Gold medal");
    }
    else{
        console.log("Silver medal");
    }
}
else if(percentage >= 80){
    console.log("Grade B");
}
else if(percentage >= 70){
    console.log("Grade C");
}
else{
     console.log("Grade D");
}

// Syntax of switch-case conditional statement
/*
switch(expression){
    case value1:
        break;
    case value2:
        break;
    case value3:
        break;
    default:
}
*/

//Exapmle of switch-case conditional statement

let env : string = "prod";

switch(env){
    case "dev":
        console.log("Launch the application with dev.amazon.com");
        break;
    case "qa":
        console.log("Launch the application with qa.amazon.com");
        break;
    case "prod":
        console.log("Launch the application with amazon.com");
        break;
    default:
        console.log("Please provide the correct environment");
}
