// Polymorphism is concept of having single method with differnt implementation

//In other language, there are two different types of polymorphism

//1. compile time polymorphism (Method overloading)
//2. Run time polymorphism (Method overriding)

//In typescript, we can achive runtime polymorphism using method overriding

//1. compile time polymorphism (Method overloading)
// Creating multiple methods within the same class with the same name but different parameters

//whenever we run the program,  typescript code converted into javascript(no datatype) the js will not understand which methods need to call
//that's why compile time polymorphism  is not possible in ts

//2. Run time polymorphism
// Creating multiple methods with same name and same parameters between parent and child classes with different implementations

class Calculator{
    // add(a: number, b: number): number{
    //     return a + b;
    // }
    // add(a: string, b: string): string{
    //     return a + b;
    // }

    add(a: any, b: any): any{
        return a + b;
    }
}


class AdvancedCalculator extends Calculator{
    add(a: any, b: any): any{
        return "Answer is: " + (a + b);
    }
}

// let obj = new Calculator();
// console.log(obj.add(1,2));

let advObj = new AdvancedCalculator();
console.log(advObj.add(1,2));

