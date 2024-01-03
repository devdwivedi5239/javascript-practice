// ARRAYS

// 1. Array Basics:
// Create an array with the following elements: "apple", "banana", "cherry".
const myArr = ["apple", "banana", "cherry"]

// Access and log the second element of the array.
// console.log(myArr[1]);


// 2. Array Methods:
// Use the push method to add "orange" to the end of the array.
// myArr.push("orange");
// console.log(myArr);

// Use the pop method to remove the last element from the array.
// myArr.pop();
// console.log(myArr);


// 3. Array Iteration:
// Use a for loop to iterate through each element of the array and log them.
// for (let i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }

// Use the forEach method to achieve the same result.
// myArr.forEach((i)=> console.log(i));


// 4. Array Manipulation:
// Remove the element "banana" from the array.
myArr.splice(1,1);
// console.log(myArr);

// Add "grape" and "kiwi" to the array using the splice method.
myArr.splice(2,0, "orange", "kiwi");
// console.log(myArr);


// 5. Array Filtering:
// Create a new array containing only the elements that start with the letter "c".
// const newArr = myArr.filter((i)=>{
//     return i[0] === "c";
// })
// console.log(newArr);


// 6. Array Transformation:
// Create a new array by converting each element of the original array to uppercase.
// const newArr = myArr.map((i)=>{
//     return i.toUpperCase()
// })
// console.log(newArr);


// 7. Array Searching:
// Check if the array includes the element "cherry".
// console.log(myArr.includes("cherry")); // true

// Find the index of the element "orange" in the array.
// console.log(myArr.indexOf("orange"));


// 8. Array Concatenation:
// Create another array with the elements: "mango", "pear", "pineapple".
anotherArr = ["mango", "pear", "pineapple"]

// Concatenate the two arrays.
let newArr = myArr.concat(anotherArr);
// console.log(newArr);


// 9. Array Slicing:
// Create a new array by extracting a portion of the original array, including only elements from index 1 to index 3.
let newArr2 = newArr.slice(1, 4)
// console.log(newArr2);


// 10. Array Sorting:
// Sort the array alphabetically.
// newArr.sort();
// console.log(newArr);

// Sort the array in reverse order.
// newArr.sort();
// newArr.reverse();
// console.log(newArr);