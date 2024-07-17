// Events in js
// * The change in the state of an object is known as an event.
// * Events are fired to notify code of "interesting changes" that may affect code execution.

// * Mouse events (click, double click etc.)
// * Keyboard events (keypress, keyup, keydown)
// * Form events (submit etc.)
// * Print event & many more

// In events there are onclick, ondblclick, onmouseover, 

// syntax for event in javascript how to write  --> node.event = () => { code here }

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("button was clicked.")
//     let a = 24;
//     a++;
//     console.log(a);
// }

// let btn2 = document.querySelector("#btn2");
// btn2.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("Inside this div box")
// }

// inline handle event ko javascript se handle hua event ko most priority first to the javascript handle ko


// Event Object

// * It is a special object that has details about the event.
// * All event handlers have access to the Event Object's properties and methods.


// Event Listeners

// node.addEventListener( event, callback )
// node.removeEventListener( event, callback )


// add

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler1")
// })

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler2")
// })

// const handler3 = () => {
//     console.log("button was clicked - handler3")
// }

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler4")
// })


// //remove

// btn1.removeEventListener("click", handler3);


// practice question
// 1. create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let darkLight = document.querySelector("#dark-light");
let body = document.querySelector("body");
let currMode = "light";

darkLight.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark"
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light"
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})