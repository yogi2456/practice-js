// DOM M anipulation

// Attributes  ---> getAttribute, setAttribute
// getAttribute( attr ) to get the attribute value

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para);

// let class1 = para.getAttribute("class");
// console.log(class1);


// setAttribute( attr, value ) to set the attribute val th

// let para = document.querySelector("p");
// console.log(para);

// let clas = para.setAttribute("class", "paragraph23");
// console.log(clas);


// Style 

// let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.fontSize = "30px";
// // div.style.visibility = "hidden";

// div.innerText = "Hello!";


// Insert Elements  // let el = document.createElement("div")

// node.append( el )  // adds at the end of node (inside)
// node.prepend( el )  // adds at the start of node (inside)
// node.before( el )   // adds before the node (outside)
// node.after( el )    // adds after the node (outside)

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// let div = document.querySelector("div");
// div.prepend(newBtn);

// let div = document.querySelector("div");
// div.before(newBtn);

// let div = document.querySelector("div");
// div.after(newBtn);

// newBtn.style.backgroundColor = "blue";

// let p = document.querySelector("p");
// p.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>";

// document.querySelector("body").prepend(newHeading);



// Delete Element

// node.remove()  remove the node

// let para = document.querySelector("p");
// para.remove()

// let heading = document.querySelector("h1");
// heading.remove()


// practice Question

// 1. Create a new button element. Give it a text "click me", background color of red & text color of white.
//    Insert th button as the first element inside the body tag

// let newBtn1 = document.createElement("button");
// newBtn1.innerText = "click me!";
// console.log(newBtn1);

// let body = document.querySelector("body");
// body.before(newBtn1);

// newBtn1.style.backgroundColor = "red";
// newBtn1.style.color = "white";
// newBtn1.style.border = "0";

// 2. careate a <p> tag in html, give it a class & some styling.
//    Now craete a new class in css and try to append this class to the <P> element
//    Did you notice, how you overwrite the class name when you add a new one? solve this problem using classList

// let para = document.createElement("paragraph");
// para.innerText = "This is a paragraph";

// let body1 = document.querySelector("body")
// body1.after(para)

// para.style.color = "blue";

// let clas = para.setAttribute("class", "newContent");
// console.log(clas);

// classlist.add ---> means adding number of classlist
// classlist.remove ---> means removing classlist

let para = document.querySelector("p");
let cls = para.classList.add("newContent")
para.classList.remove("newContent");