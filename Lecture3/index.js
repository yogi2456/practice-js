// loops in javascript 
// ** loops are used to execute a piece of code again & again

// For Loop

// for (let i = 1; i <= 5; i++) {
//     console.log("for loop")
// }

// in this for loop there are 3 statement first is initialize, second is stopping condition, third is updation.

// calculate sum of 1 to n

// let sum = 0;
// let n = 10;

// for (let i = 1; i <= n; i++) {
//     sum = sum + i
// }

// console.log("sum is", sum)


// for (let i = 1; i <= 5; i++) {
//     console.log("for loop")
// }

// console.log(i)

// infinte loop --->  A loop that never ends, we should never do it in program 


// while loop 

// let i = 1;

// while(i <= 8) {
//     console.log("i =", i);
//     i++;
// }

// let i = 20;
// while(i <= 10) {
//     console.log("while loop");
//     i++;
// }

// do-while loop

// let i = 20;

// do{
//     console.log("do while loop")
//     i++;
// } while(i <= 10);


// let i = 1;
// do{
//     console.log("i =", i);
//     i++;
// } while(i <= 10);

//For-of loop ---> This is used for strings and arrays

// let str = "javascript";

// for(let i of str) {
//     console.log("i =", i)
// }

// let str = "frontend"
// let size = 0;

// for(let i of str){
//     console.log("i=", i)
//     size++;
// }
// console.log("string size =", size)

//For-in loop ---> This is used for objects and arrays also

// let student = {
//     name: "Rahul Kumar",
//     age:20,
//     cgpa: 7.5,
//     isPass: true,
// };

// for(let key in student) {
//     console.log("key =", key)
//     console.log("value =", student[key])
// }


// prctice Questions
// print all even numbers from 0 to 100?

// for (let i = 0; i <= 100; i++) {
//     if(i % 2 === 0) { // even number statement
//         console.log("even number =", i)
//     }
// }

// print all odd numbers from 0 to 100?

// for(let i = 0; i <= 100; i++) {
//     if(i % 2 != 0) {  // odd number statement
//         console.log("oddnumber =", i)
//     }
// }


// 2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value?

// let gameNum = 30;
// let userNum = prompt("Enter the guess number");

// while(userNum != gameNum) {
//     userNum = prompt("You entered the wrong number, guess again.");
// }
// console.log("Congratulations you entered the right number")


// Strings --> string is a sequence of characters used to represent text.

// create a string 

// let str = "javascript";
// let str2 = 'javascript lecture';
// console.log(str)
// console.log(str2)

// string length property

// let str = "javascript";
// let str2 = "javascript lecture";
// console.log(str.length)
// console.log(str2.length)

// string indices

// let str = "javascript";
// let str2 = "javascript lecture";

// console.log(str[3])
// console.log(str[9])

// Template Literals

// let obj = {
//     item: "pen",
//     price: 10,
// };

// console.log(`the cost of ${obj.item} is ${obj.price} rupees`)
// console.log("the cost of", obj.item, "is", obj.price, "rupees")

// escape characters ---> \n, \t

// console.log("javascript lecture")
// console.log("javacript \n lecture") // this \n print to the next line
// console.log("javascript \t lecture") // this \t giving space between these two words


// string methods

// toUpperCase()

// let str = "JavaScript";          // "abc" ---> ABC
// console.log(str.toUpperCase())  //JAVASCRIPT

// toLowerCase()

// let str = "JavaScript";          // "ABC" ---> abc
// console.log(str.toLowerCase())   //javascript


// trim()  first and end spaces removed

// let str = "     Javascript Program     ";
// console.log(str.trim())

//slice()

// let str = "abcdefghi";
// console.log(str.slice(1,4));  // bcd
// console.log(str.slice(0,6));  //abcdef
// console.log(str.slice(4));   // efghi

// concat()

// let str = "java";
// let str2 = "python";
// let result = str.concat(str2);
// console.log(result);

// replace()

// let str = "hello";
// console.log(str.replace("lo", "p"))

// charAt()

// let str = "javascript";
// console.log(str.charAt(6))


