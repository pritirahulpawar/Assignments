// create Employee class to store employee ID, employee name, and employee project details

class Employee{

    //default constructor
    constructor(){

    }

    //storing the data inside the class
    empID : number = 1234;
    empName : string = "Priti";

    //storing method inside the class

    // function =>  function will returns outside of the class in typescript or javascript
    // methods => method will return inside of the class

    empProjectDetails():void {
        console.log("Employee project details are: Typescript Training");
    }
}

//access the data from the class
let obj = new Employee(); // new + constructor() = object

console.log(obj.empID);
console.log(obj.empName);
obj.empProjectDetails();