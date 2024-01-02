// STRINGS

let myString = "masha and the bear";

// 1. string basics
// console.log(myString.length);
// console.log(myString.toUpperCase());
// console.log(myString.concat(" hehehe"))

// 2. String Methods
// console.log(myString.indexOf("t"));
// let str = myString.substring(6,14)
// console.log(str);
// console.log(str.replace("h","l"));
// console.log(myString.split(" "));

// 3. String Comparison
// let str1 = "1";
// let str2 = 1;
// console.log(str1 == str2);  //true
// console.log(str1 === str2);  //false
// let str3 = "kya";
// let str4 = "ayk"
// console.log(str3.localeCompare(str4));  //Compare two strings lexicographically.

// 4. String Manipulation
// a. Reverse a string without using the built-in reverse method.
// let myArr = myString.split("");
// let revArr = "";
// for (let i = 0; i < myArr.length; i++) {
//     revArr += myArr[i];
// }
// console.log(revArr);

// b. Remove leading and trailing whitespaces from a string.
// let str = "   hehehhe     ";
// console.log(str.trim());

// c. Check if a string is a palindrome.
// let str = "olo"
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
// } 
// if (str === revStr) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }

// d. Count the number of occurrences of a specific character in a string.
// console.log(myString.match(/h/g).length);

// 5. Template Literals:
// Use template literals to create a dynamic string.
// Embed variables within a template literal.
// str = `pehle bhi mai ${myString} mila hu.`
// console.log(str);

// 6. String Conversion:
// Convert a string to a number using parseInt and parseFloat.
// let str1 = "2344";
// let num1 = parseInt(str1);
// console.log(num1, typeof(num1));
// let str2 = "2344.23";
// let num2 = parseFloat(str2);
// console.log(num2, typeof(num2));

// Convert a number to a string using the toString method.
// let str1 = "2344";
// let num1 = parseInt(str1);
// let str3 = String(num1);
// console.log(str3, typeof(str3));

//7. String Iteration:
// Iterate through each character in a string and perform a specific action.
// Use a loop to reverse a string.
// let str = "olo"
// let revStr = "";
// for (let i = str.length -1; i >= 0; i--) {
//     revStr += str[i];
// } 
// console.log(str.length, revStr);

// 8. Regular Expressions:
// Use a regular expression to validate if a string is a valid email address.
// Use a regular expression to replace all occurrences of a word in a string.   ====> will do later after learning reg exp

// 9. String Challenges:
// a. Implement a function that capitalizes the first letter of each word in a sentence.
// const capitalizeFirstString = (str) => {
    //     console.log(str.charAt(0).toUpperCase() + str.slice(1));
    // }
    // capitalizeFirstString("flutes are very sweet to hear.")
    
    
// b. Implement a function that finds the longest word in a sentence.
// const longestWord = (str) =>{
    //     let arr = str.split(" ");
    //     let longest = ""
    //     let arrLen = 0;
    //     for (let i=0; i<arr.length; i++){
        //         if (arr[i].length > arrLen) {
            //             longest = arr[i];
            //             arrLen = arr[i].length;
            //         }
            //     } 
            //     return longest;
            // }
            // let output = longestWord("Such a tremendous work I do");
            // console.log(output);
