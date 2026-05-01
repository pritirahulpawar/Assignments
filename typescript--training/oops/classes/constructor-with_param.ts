//class with multiple methods related to employee

class Employee{

    //declare common parameter at class level
    empId: number;
    //creating the construtor with parameter to update common parameter value
    constructor(id:number){
        this.empId = id;
    }

    //method 1
    printEmployeeDetails(empName: string){
        console.log("Employee ID: "+ this.empId);
        console.log("Employee Name: "+ empName);

    }

    //method 2
    printEmployeeProjects(empProject: string){
        console.log("Employee ID: "+ this.empId);
        console.log("Employee Project: "+ empProject);

    }

    //method 3
    printEmployeeRole(empRole: string){
        console.log("Employee ID: "+ this.empId);
        console.log("Employee Project: "+ empRole);

    }
}

//Access the methods by creating the object of Employee class
let emp = new Employee(1234);

emp.printEmployeeDetails("Priti");
emp.printEmployeeProjects("Creatio CRM");
emp.printEmployeeRole("SDET");

