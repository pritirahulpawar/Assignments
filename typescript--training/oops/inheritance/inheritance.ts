//Inheritance: Inheritance is the concept of extending parent class property into child class, without creating an object.

//Inheritance can happen in four different ways

// 1. Single Inheritance => Child extending parent properties
//Parent class
class Class2{
    empName: string ="Priti Pawar";
}

//Child class
class Class3 extends Class2{
    empSalary: number = 200000;
}

//creating object of child class
let obj = new Class3();

//Accessing properties from Parent class
console.log(obj.empName);
console.log(obj.empSalary);

// 2. Multiple Inheritance => Child class extending properties of more than one parent class
//Parent class
class Class_1{
    empId: number = 1234;
}
class Class_2{
    empName: string ="Priti Pawar";
}

//Child class
// class Class_3 extends Class2, Class_1{.   //Not possible
//     empSalary: number = 200000;
// }

//creating object of child class
// let emp = new Class_3();

// //Accessing properties from Parent class
// console.log(emp.empName);
// console.log(emp.empSalary);

// 3. Hierarchiccal Inheritance => More than one child class can access properties from Single Parent
//Parent class
class Classs2{
    empName: string ="Priti Pawar";
}

//Child class
class Classs3 extends Class2{
    empSalary: number = 200000;
}
//child class
class Classs4 extends Class2{
    empSalary: number = 200000;
}

//creating object of child class
let empObj = new Classs3();
let empObj1 = new Classs4();

//Accessing properties from Parent class
console.log(empObj.empName);
console.log(empObj.empSalary);

console.log(empObj1.empName);
console.log(empObj1.empSalary);


// 4. Multi level Inheritance => Child class is extending properties of parent class, parent is extending properties of grandparent class

//GrandParent class
class Class__1{
    empId : number= 1234;
}
//Parent  class
class Class__2 extends Class__1{
    empName: string ="Priti Pawar";
}

//Child class
class Class__3 extends Class__2{
    empSalary: number = 200000;
}

//creating object of child class
let obj__1 = new Class__3();

//Accessing properties from Parent & GrandParent class
console.log(obj__1.empId);
console.log(obj__1.empName);
console.log(obj__1.empSalary);

