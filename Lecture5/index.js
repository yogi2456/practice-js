// Functions in javascript
// Block of code that performs a specific task, can be invoked whenever needed

// function syntax
// function name() {
//   code here
//}
// name()   // function call

// function myFunction() {
//     console.log("javascript");
// }

// myFunction();

// function myValue(msg) {     // parameters
//     console.log(msg)
// }
// myValue("java");   // arguments

// function sumNumbers(a, b) {
//     console.log(a + b)
// }

// sumNumbers(23, 34);

// function sum(a, b) {
//     s = a + b;
//     return s;
// }

// console.log(sum(2, 5));

// Arrow Functions
// Arrow Syntax
// () => {}

// const arrowSum = (a, b) => {
//     console.log(a + b)
// }
// arrowSum(3, 7);

// const arrowMultiple = (a, b) => {
//     console.log(a * b);
// }
// arrowMultiple(9, 3);


// For each loops in array  ---> arr.forEach(callbackFunction)
// CallbackFunction: Here, it is a function to execute for each element in the array
// A callback is a function passed as an argument to another function
// for each will be use in arrays only

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function myArr(val) {
//     console.log(val)
// })

// let arr1 = [1, 2, 3, 4, 5];
// arr1.forEach((val) => {
//     console.log(val)
// })


// Array Methods

// Map creates a new array with the results of some operation. The value its callback returns are used to form new array
// map syntax is arr.map(callbackFnx(value, index, array))

// let nums = [23, 45, 76];

// let newArr = nums.map((val) => {
//     return val * 2;
// })

// console.log(newArr);


// Filter creates a new array of elements that give true for a condition/filter.

// let array = [23, 45, 33, 24, 88, 2, 8, 4, 7];
// let newArr = array.filter((val) => {
//     return val % 2 === 0;
// })

// console.log(newArr);


// Reduce Performs some operations & reduces the array to a single value. It returns that single value
// prev --> 1 | 3 | 6 | 10 --> output
//          + | + | + |
// curr --> 2 | 3 | 4 |

// let array = [1, 2, 3, 4];
// let output = array.reduce((prev, curr) => {
//     return prev + curr;
// })

// console.log(output);


// prev --> 2 | 4 | 7  | 45 | 45 | 67 | 67 | 67 | 67 | 67 ---> output
//          > | > | >  | >  | >  | >  | >  | >  | >  |
// curr --> 4 | 7 | 45 | 1  | 67 | 34 | 23 | 21 | 12 |

// let array = [2, 4, 7, 45, 1, 67, 34, 23, 21, 12];
// let output = array.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })

// console.log(output);

// // prev --> 2 | 2 | 2  | 2  | 1  | 1  | 1  | 1  | 1  | 1 ---> output
// //          < | < | <  | <  | <  | <  | <  | <  | <  |
// // curr --> 4 | 7 | 45 | 1  | 67 | 34 | 23 | 21 | 12 |

// let array1 = [2, 4, 7, 45, 1, 67, 34, 23, 21, 12];
// let output1 = array1.reduce((prev, curr) => {
//     return prev < curr ? prev : curr;
// })

// console.log(output1);


// practice question
// we are given array of marks of students. Filter out of the marks of students thar scored 90+

// let students = [36, 45, 54, 66, 74, 85, 90, 93, 23, 95, 12, 97];
// let grade = students.filter((val) => {
//     return val >= 90;
// })

// console.log(grade);


// Take a number n as input from user. create an array of numbers from 1 to n.

let n = prompt("enter your number:");

let array = [];
for(let i = 1; i <= n; i++) {
    array[i - 1] = i;
}

console.log(array);

// use the reducer method to calculate sum of all numbers in the array.

let sum = array.reduce((prev, curr) => {
    return prev + curr;
})

console.log("sum =", sum);

// use the reduce method to calculate product of all numbers in the array.

let factorial = array.reduce((prev, curr) => {
    return prev * curr;
})

console.log( "factorial =",factorial);