// create an array of numbers from 1 to 5 and log the array
const arr=[1,2,3,4,5];
console.log(arr);

// Access the first and last element of the array and log them to the console
const arr=[1,5,4,2,9];
let n=arr.length;
console.log(arr[0],arr[n-1]);

// Use the push method to add a new number to the end of the array and log the updated array.
const arr=["a","b","c"];
console.log(arr);
arr.push("d");
console.log(arr);

// Use the pop method to remove the last element from the array and log the updated array
const arr=[1,2,4,3,8];
console.log(arr);
arr.pop();
console.log(arr);

// use the shift method to remove the first element from the array and log the udated array
const arr=[1,2,3,4,5];
console.log(arr);
arr.shift();
console.log(arr);

// use the unshift method to add a new number to the begining of the array and log the updated array
const arr=[1,2,3,4,5];
console.log(arr);
arr.unshift(5);
console.log(arr);

// use the map method to create a new array with only even numbers and log the new array
let arr=[1,2,3,4,5];
console.log(arr);
let newArr=arr.map(num=>num*2);

console.log(newArr);

// use the filter method to create a new array with only even numbers and log the new array
let arr=[1,2,3,4,5];
console.log(arr);
let newArr=arr.filter(num=>num%2===0);
console.log(newArr);

// use the reduce method to calculate the sum of all number in the array and log the result
let arr=[1,2,3,4,5];
let newArr=arr.reduce((acc,cur)=>{
   return acc+cur;
},0);
console.log(newArr);

// Use a for loop to iterate over the array and log each element to the console
let arr=[1,3,4,5,6];
for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }

// use a forEach method to iterate over the array and log each element to the console
const numbers=[1,5,3,5,3];
numbers.forEach(function(number){
    console.log(number);
});

// create a two dimensional array and log the entire array to the console.
let arr=[[1,4,5],[1,5,2],[1,9,3]];
console.log(arr);

// Access and log a specific element from the two-dimensional array.
const arr=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr[2][1]);