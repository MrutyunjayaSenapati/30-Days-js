// write a program to check if a number is positive ,negative or zero and log the result to the console.
function posOrneg(a){
    if(a>0){
        console.log(" It is a +ve number");
    }
    else if(a==0)
        {
            console.log("It is 0");
        }
    else{
        console.log("It is a -ve number");
    }
}
posOrneg(-5)

// switch case
switch (4){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}
// Leap Year
function Year(Y){
    if((Y%4==0 && Y%100!=0) || (Y%400==0))
        {
            console.log("It is leap year");
        }
    else{
        console.log("It is not a leap Year");
    }
}
Year(2012);
