// Arrays  ----> It is a collection of items

// let marks = [97, 82, 75, 64, 36];
// console.log(marks)
// console.log(marks.length)  // length is property


// let heroes = ["thor", "captain", "antman", "spider", "ironman", "hulk"];
// console.log(heroes);
// console.log(typeof(heroes));

// Array indices

// let number = [1, 2, 3, 4, 5, 6, 7];
// console.log(number);
// console.log(number[0]);
// console.log(number[4]);
// console.log(number[1] = 10);;
// console.log(number)

// Looping over an array

// for using for loop
// let heroes = ["thor", "captain", "antman", "spider", "ironman", "hulk"];
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i])
// }

// For-in loop
// let heroes = ["thor", "captain", "antman", "spider", "ironman", "hulk"];
// for (let val in heroes) {
//     console.log(heroes[val])
// }

// For-of loop
// let heroes = ["thor", "captain", "antman", "spider", "ironman", "hulk"];
// for (let hero of heroes) {
//     console.log(hero)
// }

// let cities = ["delhi", "mumbai", "hyderabad", "pune", "bangalore", "chennai"];
// for (let city of cities) {
//     console.log(city)
//     // console.log(city.toUpperCase());
// }

// practice question

// For a given array with marks of students --> [85, 97, 44, 37, 76, 60] find the average marks of the entire class?

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);



// Arrays in javascript

// Array Methods

// 1. Push ---> add value to the end in array

// let food = ["pizza", "burger", "chinese", "dominos"];
// food.push("popcorn");
// console.log(food);

// 2. Pop ---> delete from end in the array and return the value

// let food = ["pizza", "burger", "chinese", "dominos", "popcorn"];
// let foodItems = food.pop();
// console.log(food);
// console.log("deleted", foodItems);

// 3. toString ---> converts array to string

// let food = ["pizza", "burger", "chinese", "dominos", "popcorn"];
// food.toString();
// console.log(food);

// let marks = [24, 34, 65, 76, 23, 87, 45];
// let marksItems = marks.toString();
// console.log(marksItems);

// 4. Concat ---> join multiple arrays and return result

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let array = arr1.concat(arr2);
// console.log(array);
// console.log("arr1 value =",arr1);
// console.log("arr2 value =",arr2);

// let arr3 = [11, 12, 13, 14, 15];
// let arr4 = [16, 17, 18, 19, 20];
// let arr5 = [21, 22, 23, 24, 25];
// let array1 = arr3.concat(arr4, arr5);
// console.log(array1);
// console.log("arr3 value =",arr3);
// console.log("arr4 value =",arr4);
// console.log("arr5 value =",arr5);

// 5. unshift ---> add value to start in the array

// let marvelHeroes = ["thor", "ironman", "spiderman", "antman", "hulk"];
// marvelHeroes.unshift("captainAmerica");
// console.log(marvelHeroes);

// 6. shift ---> delete from start and return

// let heroes = ["thor", "ironman", "spiderman", "antman", "hulk", "captainAmerica"];
// let hero = heroes.shift();
// console.log(heroes);
// console.log("deleted value", hero);

// 7. slice ---> returns a piece of the array and it is syntax is slice(startIndex, endIndex)

// let heroes = ["thor", "ironman", "spiderman", "antman", "hulk", "captainAmerica"];
// heroSlice = heroes.slice(1, 4);
// console.log(heroes);
// console.log(heroSlice);

// 8. splice ---> change original array (add, remove, replace) and it is syntax is splice(startIndex, deleteCount, newElement)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("old array =",arr);
// arr.splice(3, 2, 201, 202, 203, 204);
// console.log("new array =",arr);

// let arr1 = [1, 2, 3, 4, 5, 6, 7];  // add element
// arr1.splice(3, 0, 101, 102); 
// console.log(arr1);

// let arr2 = [1, 2, 3, 4, 5, 6, 7];  // delete element
// arr2.splice(4, 1);
// console.log(arr2);

// let arr3 = [1, 2, 3, 4, 5, 6, 7];   // replace element
// arr3.splice(6, 1, 8, 9, 10, 11);
// console.log(arr3);

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