// Error Handling
// Basic Error Handling with Try-catch
// 1. Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console
// function catchError(){
// try{
//     console.log(age);
// }
// catch(err){
//     console.log(err.name);
//     console.log(err.message);
// }
// const a=2*4;
// console.log(a);
// }
// catchError();

// 2.Create a function that divides two numbers and throws an error if the denominator is zero. use a try-catch block to handle this error.
// function divTwo(x,y){
//     try{
//         if(y===0){
//             throw new Error("Divison by zero is not allowed.");
//         }
//         let z=x/y;
//         console.log(z);
//     }
//     catch(err){
//         console.log(err.name);
//         console.log(err.message);
//     }
// }
// divTwo(5,0);
// 
// Finally Block
// Write a script that includes a try-catch block and a finally block.log messages in the try,catch, and finally block to observe the execution flow.
// try{
//     const res=prompt("Are you a robot");
//     if(res==="Y"){
//         throw new Error("Robot found");
//     }
// }
//     catch(err){
//         console.log(err.name, err.message);
//     }
//     finally{
//         console.log("It is finally block");
//     }
// Custom Error Objects
// Create a custom error class that extends the built-in Error class.Throw an instance of this custom error in a function and handle it using a try-catch block.
try{
    newFile()

}catch(e){
    console.log(e)
}