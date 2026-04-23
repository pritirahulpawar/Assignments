// Jumping Statements in loops

//1. break => break the loop and come out of the loop
//2. continue => Skip the current iteration and move to the next iteration

for(let i: number = 1 ; i<=10 ; i++){
    if(i==5){
        //break; //break the loop and come out of the loop
        continue; //Skip the current iteration and move to the next iteration
    }
    console.log(i);
}