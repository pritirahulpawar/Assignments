//Object : object is data type that can help us to store multiple properties in the form of key and value pair

interface personInfo{ 
    name : string,
    age ?: number,
    visaStatus : boolean,
    salary ?: number,
    address : {
        city : string,
        state : string,
        zip : number
        country ?: string
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
// 2. access the data from the object

//Print a person's name from person object
console.log(person.name);
console.log(person["name"]);

//Print a person's zip from person object
console.log(person.address.zip);
console.log(person.address["zip"]);

//3. Adding new properties to existing object

//add salary as 200000 in main object and country in address object
person.salary  = 200000;
person.address.country = "India";
console.log(person);

//4. update existing propery in existing object

// update the person age from 27 to 26
person.age = 26;
console.log(person);

//5. delete the existing property from object
//delete age property from person object
delete person.age;
console.log(person);

//6. check whether paticular propery is available within the object
//verify whether ahe and name properties are available within the person object.
console.log("name" in person);
console.log("age" in person);

//7. Get all the keys from the object
console.log(Object.keys(person));
console.log(Object.keys(person.address));

//8. Get all the values from the object
console.log(Object.values(person));
console.log(Object.values(person.address));

//9. Get all the keys and values together from object
console.log(Object.entries(person));

//10. iterate all the keys from object
for(let key in person){
    console.log(key);
    console.log(person[key as keyof personInfo]);
}

//11. verify the data type of the property within the object
console.log(typeof person.name);
console.log(typeof person.address);

//12. Merging different object together
interface projectInfo{
    project: string,
    id: number
}

let project: projectInfo = {
    project: "amazon",
    id: 23456
}
console.group("--------------------------------")
let mergedObject = {...person , ...project};
console.log(mergedObject);