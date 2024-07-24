<<<<<<< HEAD
// use template literals to create a string that includes variables for a persons's name and age, and log the string to the console
let myName="Mrutyunjaya Senapati";
let age=24;
console.log(`Hey my name is  ${myName} and I am ${age}`);

// Create a multi-line string using template literals and log it to the console.
let multiString= `Hello guys, 
How are you? I hope you are doing well.
This is my eighth day of working on Javascript.`;
 console.log(multiString);
//  use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const array=["a","b","c","d"];
const [firstValue, secondValue]=array;
console.log(firstValue,secondValue);
// use object destructuring to extract the title and author from a book object and log them to the console
const book={
    title:"2states",
    author:"chetan bhagat"
}
const {title,author}=book;
console.log(title,author);
// spread and rest operators
// use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const firstArray=[1,3,4];
const secArray=[...firstArray,8,9];
console.log(secArray);
// use the rest operator in a function to accept an arbitary number of an arguments, sum and return the result.
function sum(...nums)
{
    let total=0;
    for(const num of nums ){
        total +=num;
    }
return total;
}
console.log(sum(1,2,3,4));
// Write a function that takes two parameter and returns theit product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.

function mulitply(a,b=1){
    return a*b;
}
console.log(mulitply(4));
// Enhanced Object Literals

// Use enhanced Object literals to create an Object with methods and properties, and log the object to the console.

function bioData(name,college,year){
    return{
        name:name,
        college:college,
        year:year

    }
   
}
console.log(bioData("Mrutyunjaya senapati","cime","2024"));
// create an object with computed property names based on variables and log the object to the console.
const key1='name';
const key2='age';
const obj={
    key1:"Jay",
    key2:24

}
=======
// use template literals to create a string that includes variables for a persons's name and age, and log the string to the console
let myName="Mrutyunjaya Senapati";
let age=24;
console.log(`Hey my name is  ${myName} and I am ${age}`);

// Create a multi-line string using template literals and log it to the console.
let multiString= `Hello guys, 
How are you? I hope you are doing well.
This is my eighth day of working on Javascript.`;
 console.log(multiString);
//  use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const array=["a","b","c","d"];
const [firstValue, secondValue]=array;
console.log(firstValue,secondValue);
// use object destructuring to extract the title and author from a book object and log them to the console
const book={
    title:"2states",
    author:"chetan bhagat"
}
const {title,author}=book;
console.log(title,author);
// spread and rest operators
// use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const firstArray=[1,3,4];
const secArray=[...firstArray,8,9];
console.log(secArray);
// use the rest operator in a function to accept an arbitary number of an arguments, sum and return the result.
function sum(...nums)
{
    let total=0;
    for(const num of nums ){
        total +=num;
    }
return total;
}
console.log(sum(1,2,3,4));
// Write a function that takes two parameter and returns theit product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.

function mulitply(a,b=1){
    return a*b;
}
console.log(mulitply(4));
// Enhanced Object Literals

// Use enhanced Object literals to create an Object with methods and properties, and log the object to the console.

function bioData(name,college,year){
    return{
        name:name,
        college:college,
        year:year

    }
   
}
console.log(bioData("Mrutyunjaya senapati","cime","2024"));
// create an object with computed property names based on variables and log the object to the console.
const key1='name';
const key2='age';
const obj={
    key1:"Jay",
    key2:24

}
>>>>>>> 660a2308c7fcb9a50464a49d05cf7077573ebff1
console.log(obj);