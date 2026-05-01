//class with multiple methods related to employee

class Employee{
     
    //method 1
    printEmployeeDetails(empID:number, empName: string){
        console.log("Employee ID: "+ empID);
        console.log("Employee Name: "+ empName);

    }

    //method 2
    printEmployeeProjects(empID:number, empProject: string){
        console.log("Employee ID: "+ empID);
        console.log("Employee Project: "+ empProject);

    }

    //method 3
    printEmployeeRole(empID:number, empRole: string){
        console.log("Employee ID: "+ empID);
        console.log("Employee Project: "+ empRole);

    }
}

//Access the methods by creating the object of Employee class
let emp = new Employee();

emp.printEmployeeDetails(1234, "Priti");
emp.printEmployeeProjects(1234,"Creatio CRM");
emp.printEmployeeRole(1234, "SDET");

