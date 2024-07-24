// Select an HTML element by its ID and change its text content
let x=document.getElementById("hey");
x.innerHTML="World";

// select an HTML element by its class and change its background color.
let elements=document.getElementsByClassName("hello");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "red";
}