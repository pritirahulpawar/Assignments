// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

//Create class to calculate X raised to power n
class CalculatePowerOfNumber{
    // x : number = 0;
    // n : number = 0;

    //Method
    methodToCalculatePower(x: number, n: number){
        let power: number = Math.pow(x,n);
        console.log(`The ${x} raised to power ${n} is: ${power}`);
    }
}

//Calling method by creating object
let powerObject = new CalculatePowerOfNumber();
powerObject.methodToCalculatePower(2.00000,10);
powerObject.methodToCalculatePower(2.10000,3);
powerObject.methodToCalculatePower(2.00000,-2);