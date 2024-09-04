
        // Basic Event Handling
        // Add a clickk event listener to a button that change the text content of paragraph
        function taskOne(){
           const one= document.getElementById("task1");
           one.innerText="Hello world";
        }
        // Add a double-click event listener to an image that toggles its visibility
        function taskTwo(){
            const two=document.getElementById("task2");
            
            two.style.display="none";
        }

        // Mouse Events
        // Add a mouseover event listener to an element that changes its background color.
        function changeBgColor(){
            const three=document.getElementById("Event");
            three.style.backgroundColor="black"
            three.style.color="white";
        }
        // Add a mouseout event listener to an element listener to an element that resets its background color 
        function changeBgColorr(){
            const threee=document.getElementById("Event");
            threee.style.backgroundColor="white";
        }
        // Keybord Events
        // Add keydown event listener to an input field that logs the key pressed to the console
        function pressKey(){
            const Key=document.getElementById("key").innerHTML="The key is pressed";

        }
        // Add keyup event listener to an input field that displays the current value in a paragraph
        function keyUpFun(){
            const inputValue=document.getElementById("inputField").value;
            document.getElementById("display").innerText=inputValue;
        }
        // Form Events
        // Add a submit event  listener to form that prevents the default submission and logs the form to the console
    
const form = document.getElementById('myForm');


form.addEventListener('submit', function(event) {
  
  event.preventDefault();

  
  console.log('Form data:', new FormData(form));
});
// Add a change event listener to a select dropdown that displays the selected value in a paragraph.

function myChange(){
    let v=document.getElementById("myId").value;
    let cv=document.getElementById("vehicle").innerHTML="You selected:"+v;

}
// Event Delegation
// Add a click listener to a list that logs the text content of the clicked list item using event delegation.
function myKey(){
    console.log("key up event...");
}
function myKeyDown(){
    console.log("My key down");
}
function keyPressEvent(){
    console.log("Key press  is triggered");
}
// 
const newX=document.getElementById("keyEvent");

// newX.addEventListener('mousemove',(k)=>{
//     console.log('key',k.clientX,k.clientY);
// })
const box1=document.getElementById("box1");
box1.addEventListener("click",()=>
{
    console.log("Clicked on box");
});
const container=document.getElementById("container");
// container.addEventListener("click",(e)=>
// {
//     console.log("clicked on container");

// },true)

container.addEventListener('click',function(e){
    if(e.target && e.target.parentNode===this){
        console.log(e.target.textContent);
    }
});
