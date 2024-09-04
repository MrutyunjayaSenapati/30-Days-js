// write a program to print numbers from 1 to 10 using a for loop
const num=(n)=>{
    for(let i=1;i<=n;i++)
        console.log(i*5);
}
num(10);

// while loop
const numb=(n)=>{
    let sum=0;
    while(n>0)
        {
    sum=sum+n;
    n--;
        }
    return sum;
}
let x=numb(10)
console.log(x);

const printNum=(n)=>{
    while(0<n){
        console.log(n);
        n--;
    }
}
printNum(10);

// Do While loop
function printNum(n){
    let i=1;
    do{
        console.log(i)
        i++;

    }
    while(i<=n)
}
printNum(5)

printPattern
function printPattern(n){
    for(let i=1;i<n;i++){
        let row='';
        for(let j=1;j<=i;j++)
            {
               row+='*';

            }
            console.log(row)
    }
}
printPattern(6);

for(let i=1;i<10;i++)
    if(i===5)
        {
            continue;
            
        }
    else{
        console.log(i);
    }