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