// ARRAY FUNCTIONS


// MAP
// 1. Double the Numbers:
// Given an array of numbers, use the map function to create a new array where each number is doubled.
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.map((n)=> {return n*2});
// console.log(arr2);

//2. Square the Numbers:
// Given an array of numbers, use the map function to create a new array where each number is squared.
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.map((n)=> {return n*n});
// console.log(arr2);

//3. Convert to Uppercase:
// Given an array of strings, use the map function to create a new array where each string is converted to uppercase.
// const arr1 = ["apple", "ball", "cat"]
// const arr2 = arr1.map((e)=>{
//     return e.toUpperCase();
// })
// console.log(arr2);

// 4. Append Index to Elements:
// Given an array of strings, use the map function to create a new array where each element is appended with its index.
// const arr1 = ["apple", "ball", "cat"]
// const arr2 = arr1.map((e, i)=>{
//     return `${e}-${i}`
// })
// console.log(arr2);

// 5. Convert Temperatures:
// Given an array of temperatures in Celsius, use the map function to create a new array where each temperature is converted to Fahrenheit (use the formula: F = C * (9/5) + 32).
// const celArr = [0, 10, 25, 35]
// const fahrArr = celArr.map((t)=>{
//     return t * (9/5) + 32;
// }) 
// console.log(fahrArr);


// FIND
// Find Even Number:
// Given an array of numbers, use the find function to find the first even number in the array.
// const arr1 = [21, 35, 31, 32, 46];
// console.log(arr1.find((n) => n % 2 === 0));

// Find Prime Number:
// Given an array of numbers, use the find function to find the first prime number in the array.
// const arr1 = [21, 35, 31, 32, 46, 3];
// console.log(arr1.find((n)=>{
//     for(let i=2; i<=Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true;
// }));

// Find Specific String:
// Given an array of strings, use the find function to find the first string that contains the word "JavaScript".
// const stringArr = ["python is a language", "java is a language", "JavaScript is a language"];
// console.log(stringArr.find(e => e.includes("JavaScript")));

// Find Longest Word:
// Given an array of words, use the find function to find the longest word in the array.
// const arr = ["alpha", "beta", "gama"];
// function findLongest(array) {
//     longest = "";
//     let arrLen = 0
//     for (let i = 0; i < array.length; i++){
//         if (array[i].length > arrLen) {
//             arrLen = array[i].length;
//             longest = array[i];
//         }
//     }
//     return longest;
// }

// console.log(findLongest(arr));


// Filter Function:

// Filter Even Numbers:
// Given an array of numbers, use the filter function to create a new array containing only even numbers.
// let arr1 = [1,2,3,4,5,6,7];
// let arr2 = arr1.filter((n)=>{
//     return n % 2 === 0
// })
// console.log(arr2);


// Filter Words by Length:
// Given an array of words, use the filter function to create a new array containing only words with a length greater than or equal to 5.
// const strArr = ["this", "is", "a","massive", "sentence"]
// const newStrArr = strArr.filter(e => {
//     return e.length >= 5;
// })
// console.log(newStrArr);

// Filter Positive Numbers:
// Given an array of numbers, use the filter function to create a new array containing only positive numbers.
// const numArr = [-1,-32,42,32,-34,-432,3243];
// const newNumArr = numArr.filter(n => n>0)
// console.log(newNumArr);

// Filter Palindromes:
// Given an array of strings, use the filter function to create a new array containing only palindrome words.
// const strArr = ["apple", "ball", "cat", "dad", "level"]
// const palindrome = strArr.filter(e => {
//     const reversed = e.split('').reverse().join('');
//     return e === reversed;
// }) 
// console.log(palindrome);