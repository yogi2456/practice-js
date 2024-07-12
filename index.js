// let a = 5;
// let b = 3;


// operartors

// console.log(a + b) //7
// console.log(a - b) //3 * /  % ** 5 5*5 = 25
// console.log(a * b)
// console.log(a / b)
// console.log(a ** b) //5*5*5 = 125
// console.log(a % b)

// Assignment operators

// =, +=, -=, *=, %=, **=, /=


// let a = 5;
// let b = 3;

// // // a += 4; // a = a + 4; a = 5 + 4 = 9
// // // console.log(a)
// // // a -= 4;

// a *= 4;
// console.log(a)
// // a %= 4;

// // a **= 4;
// // a / 4

// {
//     let a = 4;
//     let b = 2;
// }

// {
//     let a = 8;
//     let b = 1;
// }

// console.log(a + b)

// comparison operators

// logical operator && OR                                                                                                                               

// let cond1 = 6 > 5; // true
// let cond2 = 6 == 5; // false

// console.log(cond1 && cond2)

// IF ELSE STATEMENT

// let num = 9;

// if(num % 2 == 0) {
//     console.log(num, "is even")
// } else {
//     console.log(num, "is odd")
// }


// Lecture 5

//practice question
// create a function using the function keyword that takes a string as an argument and returns the number of vowels in the string

// function vowelsCount(str) {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     for (let char of str) {
//         // console.log(char)
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count)
// }

// console.log(vowelsCount("aaa"))


// 2. For a given array of numbers, print the square of each value using the forEach loop

let array = [2, 4, 6, 5, 8, 9, 3];
array.forEach((num) => {
    console.log(num * num)
})


// Lecture 4

// practice questions
// create a array to store companies "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let shift1 = companies.shift();
// console.log(companies);

// let companies1 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let splice1 = companies1.splice(2,1,"Ola");
// console.log(companies1);

// let companies2 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let push1 = companies2.push("Amazon");
// console.log(companies2);


// practice question

// For a given array with marks of students --> [85, 97, 44, 37, 76, 60] find the average marks of the entire class?

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);


// Lecture 3

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

