const person={
    name:"Mr Jay",
    age:24,
    gender:"Male",
    greet(){
        console.log(`my name is ${this.name}.`);
        },
updateAge(newAge){
    this.age=newAge;
    console.log(`My new Age is ${this.age}.`);
}

}
export default person;