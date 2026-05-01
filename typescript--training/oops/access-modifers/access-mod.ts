// Access modifiers in the typescript
// Access modifiers are set of keywords that we can used to control the access of data and methods stored in the classes.

//1. Public / no-keyword => open access, we can access data and methods everywhere
//2. Protected => we can access the data and methods either within the class or its sub-classes or child class
//3. Private => we can access data and methods within the class only. not outside of the class

//Main class
class Person{
    //Data members

    name: string = "Priti Pawar";  //public data members(by default)
    // age : number = 35;
    city : string = "Pune";

    // protected name: string = "Priti Pawar";
    // protected age : number = 35;
    // protected city : string = "Pune";

    // private name: string = "Priti Pawar";
    private age : number = 0;
    // private city : string = "Pune";

    //Methods
    printEmpData(): void{
        console.log("*********Accessing the data within the class*********");
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }

    //Setter and getter for private data members
    //according to user requirements we can set data as it is private then ousider class can access data
    public setAge(age: number): void{
        this.age = age;
    }
    //By using this way we can access private information outside of the class
    public getAge(): number{
        return this.age;
    }
}

//Child class
class Child extends Person{
    //Method
    printEmpData(): void{
        console.log("*********Accessing the data within the child class*********");
        console.log(this.name);
        // console.log(this.age);
        console.log(this.city);
    }
}

//Outsider class
class Outsider{
    
    //Method
    printEmpData(): void{
        let person = new Person();
        console.log("*********Accessing the data within Outside of the class*********");
        console.log(person.name);
        // person.setAge(27);
        console.log(person.getAge());
        console.log(person.city);
    }
}

let obj1= new Person();
obj1.printEmpData();
let obj2= new Child();
obj2.printEmpData();
let obj3= new Outsider();
obj3.printEmpData();