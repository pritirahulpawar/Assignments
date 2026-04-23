/*
1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0
*/

// creating array to store student names
let studentName : string[]= ["Suresh" , "Mahesh" , "Naresh"];
// creating array to store student marks
let studentMarks : number[] = [75, 80,82];

// variable to store total marks for average calculation
let total: number = 0;

//create new array to store updated marks;
let updatedMarks:number[] = [];

//Print heading before displaying updated marks
console.log("Updated Marks: ");

//Loop through student marks array using normal for loop
for(let i:number = 0; i<studentMarks.length; i++){
    // Add 10 marks to each student without modifying original array
    updatedMarks[i] = studentMarks[i]+10;

    // Add total marks to average calculation
    total+= updatedMarks[i];

    //print student name with updated marks
    console.log(`${studentName[i]}: ${updatedMarks[i]}`);
}
//Calculate average marks
let average = total / updatedMarks.length;

//Print average marks rounded to 1 decimal place
console.log(`Average Marks: ${average}`);