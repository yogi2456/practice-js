// console.log("hello")

// alert("hello")

// window Object
// The window object represents an open window in a browser. It is browser's object (not javaScripts) & is automatically created by browser.
// It is a global object with lots of properties & methods.

// what is DOM?
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page
    //                                                   window
    //                                                     |
    //                                                   document
    //                                                      |
    //                                                     html
    //                     |                                                               |
    //                   head                                                             body
    //   |       |       |        |                                          |                         |
    // meta     meta    title    link                                       div                      script
    //                                                                 |     |    |    |
    //                                                                img   h1    p   div


// console.log(window)
// console.dir(document.body)
// console.log(window.document.body)


// document.body.style.background = "black";
// document.body.childNodes[3].innerText = "abcd";


// DOM Manipulation ---> manipulation ka matlab kuch change karna in html elements with javascript

// Selecting with Id:
// syntax of id is document.getElementById("myId")

// let header = document.getElementById("heading");
// console.dir(header);

// Selecting with Class:
// syntax of class is document.getElementByClassName("myClass")

// let headerClass = document.getElementsByClassName("heading-class");
// console.dir(headerClass);
// console.log(headerClass);

// Selecting with Tags:
// syntax of tags is document.getElementsByTagName("p/h1/div")

// let paras = document.getElementsByTagName("p");
// console.dir(paras);


// Query Selector
// document.querySelector("myId / myClass / tag")  --->  returns first element

// let firEle = document.querySelector(".heading-class");
// console.dir(firEle);

// console.dir(document.querySelector("div"));
// console.log(document.querySelector("div")).children;

// document.querySelectorAll("myId / myClass / tag")  ----> returns a NodeList

// let allEle = document.querySelectorAll(".heading-class");
// console.dir(allEle);


// Properties

// tagName : returns tag for element nodes

// let firEle = document.querySelector("p");
// console.dir(firEle);


// innerText : returns the text content of the element and all its children

// let div = document.querySelector("div");
// console.dir(div);                            // in console div.innerText

// let heading = document.querySelector("h1");
// console.log(heading);                     // in console  heading.innerText = "New Heading" 

// innerHTML : returns the plain text or HTML contents in the element

// let div = document.querySelector("div");
// console.dir(div);                          // in console div.innerHTML

// let heading = document.querySelector("h1");
// console.log(heading);                     // in console  heading.innerHTML = "<i>New Heading</i>"

// textContent : returns textual content even for hidden elements        hidden elements ka bhi text dhikai dhetha hai

// let heading = document.querySelector("h1");
// console.log(heading);



// practice questions 

// 1. create a h2 heading element with text - "Hello Javascript". Append "from Apna College Students" to this text using js


// let header2 = document.querySelector("h2");
// console.dir(header2.innerText);

// header2.innerText = header2.innerText + "from Apna College Students."

// 2. create 3 divs with common class name - "box". Access them & add some unique text to each of them

let divs = document.querySelectorAll(".box");
// console.log(divs.innerText);
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// let idx = 1;
// for (let div of divs) {
//     div.innerText = `unique value ${idx}`;
//     idx++;
// }