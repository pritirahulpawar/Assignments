let age:number = 17;

if(age < 18){
    //intentinally stop the execution as per requirements if 'not eligible to vote'
    throw new Error("You are not eligible to vote");
}else{
    console.log("Eligible to vote");
}
console.log("Execution Completed");