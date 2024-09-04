// install a third-party module(e.g., lodash) using npm, import and use a function from module in a script.
const {chunk}=require('lodash');
const arr=[1,2,3,4,5];
const array=chunk(arr,2);
console.log(array)
