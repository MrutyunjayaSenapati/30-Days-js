// Selecting and Manipulating Elements
// Select an HTML element by its ID and change its text content

let x=document.getElementById("hey");
x.innerHTML="World";

// select an HTML element by its class and change its background color.

let elements=document.getElementsByClassName("hello");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "red";
}
// Creating and Appending Elements
// Create a new div element with some text content and append it to the body

const newDiv= document.createElement("div");
newDiv.innerText="This is a paragraph that can be add";
document.body.appendChild(newDiv);

// create a new li element and add it to an existing ul list
let newLi=document.createElement("li");
document.ul.appendChild(newLi)