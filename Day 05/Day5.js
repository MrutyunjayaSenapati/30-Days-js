// Write a function to check if a number is even or odd and log the result to the console;
function checkEvenOdd(n){
    if(n%2==0)
        {
            console.log(n,"is even number");
        }
        else
        {
            console.log(n,"is odd number");
        }
}
checkEvenOdd(8);

// Write a function to calculate the square of a number and return the result
function square(n){
    console.log(n*n);
}
square(4);

// Write a function expression to find the maximum of two number and log the result to the console.


const maxNum= function(a,b){
    
    return a>b?a:b
};
console.log(maxNum(23,5));

// Write a function expression to concatenete two strings and return the result.
const mergeString=function(a,b){
    return a+b;
}
console.log(mergeString("jay","Senapati"));

// Write an arrow function to calculate the sum of two numbers and return the result.
let add=(a,b)=>a+b;
console.log(add(3,4));

// Write an arrow function to check if a string contains a specific character and return a boolean Value.
let stringCharacter=(str,char)=>{
    for(let i=0;i<str.length;i++)
        {
            if(str[i]===char)
                return true;

        }
        return false;

}
console.log(stringCharacter("Mrutyunjaya","z"));

// Write a function that takes two parameters and returns their product.provide a default value for the second parameter.
function productofNum(num1,num2=3)
{
    return num1*num2;
 }
 console.log(productofNum(5));

// write a function that takes a person's name and age and returns a greetings message. provide a default value for the age.
function perInfo(name,age){
    return `${name} is ${age} years old`;
}
console.log(perInfo("Gudu",24));

// Write a higher order function that takes a function and a number and a calls the function that many times.
function higherOrder(fun,num){
    for(let i=0;i<num;i++)
        {
            fun();
        }
        
}
const sayHello = () => console.log("Hello!");
higherOrder(sayHello,3);

// Write a higher order function that takes two functions and a value, applies the first function to the value and then applies the second function to the result.
function higherOrder(fun1,fun2,val)
{
    const result=fun1(val);
    const result2=fun2(result);
    return result2;

}
const plus= a=> a+5;
const mul=a=>a*6;
console.log(higherOrder(plus,mul,4));