//Array: An array is a collection of multiple values

//1. Storing the values within the array
console.log("Storing the values within the array");
let fruits: string[] = ["apple", "banana", "Mango","orange"];
let prices: number[] = [300,60,28,700];
let fruitsAndPrices : (string | number)[] = ["apple",300, "banana",60, "Mango",28,"orange"];
 
//2. Access the values from the array
//print the mango from fruits and price of mango from the prices and banana from fruites and prices
console.log("Access the values from the array");
console.log(fruits[2]);
console.log(prices[2]);
console.log(fruitsAndPrices[2]);

//3. Adding additional values to existing array at the end
console.log("Adding additional values to existing array at the end");
fruits.push("grapes");
console.log(fruits);

//4. Deleting values from existing array at the end
console.log("Deleting values from existing array at the end");
fruits.pop();
console.log(fruits);

//5. Adding additional values to existing array at the beginning
console.log("Adding additional values to existing array at the beginning");
fruits.unshift("grapes");
console.log(fruits);

//6. Deleting values from existing array at the beginning
console.log("Deleting values from existing array at the beginning");
fruits.shift();
console.log(fruits);

//7. Adding additional values to existing array at specific index
console.log("Adding additional values to existing array at specific index");
//splice(index, number of values to be deleted, value to be added)
fruits.splice(2,1,"grapes");
console.log(fruits);

//8. create new array by extracting some values from existing array
console.log("create new array by extracting some values from existing array");
let citrusFruits: string[] = fruits.slice(1,3); //slice(start index, end index)
console.log(citrusFruits);

//9. Create new array by concatenating two or more arrays
console.log("Create new array by concatenating two or more arrays");
let veggies: string[] = ["carrot", "potato", "tomato"];
let fruitsAndVeggies: string[] = fruits.concat(veggies);
console.log(fruitsAndVeggies);

//10. Find the index of specific value within the array
console.log("Find the index of specific value within the array");
console.log(fruits.indexOf("grapes"));
console.log(fruits.indexOf("papaya"));// returns -1 if the value is not found within the array

//11. Iterate all the values from the array
console.log("Iterate all the values from the array");
for(let fruit of fruits){
    console.log(fruit);
}

//12. Reverse the values within the array
console.log("Reverse the values within the array");
let vegetables:string[] = ["carrot", "potato", "tomato"];
console.log(vegetables);
vegetables.reverse();
console.log(vegetables);

//13. sort the values within the array
console.log("sort the values within the array");
let numbers: number[] = [300,60,28,700];
numbers.sort((a,b) => a-b); //sort in ascending order
console.log(numbers);
numbers.sort((a,b) => b-a); //sort in decending order
console.log(numbers);