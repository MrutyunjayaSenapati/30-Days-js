// Creating and Exporting Modules
// Creating a module that exports a function to add two number .import and use this module in another script.
// import {addition} from "./utility.js"
// const result=addition(3,4);
// console.log(result);
// Create a module that exports an object representing a person with properties and methods. import and use this module in another script.
// import person from "./person.js";
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);
// person.greet();
// person.updateAge(25);
// Named and Default Exports
// Create a module that exports multiple function using named exports. import and use these functions in another script.
// app.js

import { add, sub, mul } from './mathFunc.mjs';

const num1 = 9;
const num2 = 8;

console.log(`Add: ${add(num1, num2)}`);       // Output: Add: 17
console.log(`Subtract: ${sub(num1, num2)}`);  // Output: Subtract: 1
console.log(`Multiply: ${mul(num1, num2)}`);  // Output: Multiply: 72
