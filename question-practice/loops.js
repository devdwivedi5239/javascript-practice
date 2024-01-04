// For Loops:
// Counting Up:
// Use a for loop to log numbers from 1 to 5 to the console.
// for (let i = 1; i <=5 ; i++) {
//     console.log(i);
// }

// Counting Down:
// Use a for loop to log numbers from 5 to 1 to the console.
// for (let i = 5; i > 0 ; i--) {
//     console.log(i);
// }

// Even Numbers:
// Use a for loop to log even numbers from 2 to 10 to the console.
// for (let i = 1; i < 11 ; i++) {
//     if(i % 2 === 0) console.log(i);
// }


// While Loops:
// Sum of Numbers:
// Use a while loop to calculate the sum of numbers from 1 to 5.
// let i = 0
// let sum = 0;
// while (i <= 5){
//     sum += i;
//     i++;
// }
// console.log(sum);

// Countdown:
// Use a while loop to log numbers from 5 to 1 to the console.
// i = 5;
// while (i > 0){
//     console.log(i);
//     i--;
// }


// Nested Loops:
// Multiplication Table:
// Use nested for loops to log a multiplication table for numbers 1 to 5 (e.g., 1x1 to 5x5).
// for (let i = 1; i < 6; i++){
//     for (let j = 1; j < 11; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("\n");
// }


// Loop Control Statements:
// Skip Even Numbers:
// Use a for loop with continue to log only odd numbers from 1 to 10.
// for (let i = 1; i < 11; i++){
//     if(i % 2 === 0) continue;
//     console.log(i);
// }

// Break on Condition:
// Use a while loop with break to log numbers from 1 until a randomly generated number is greater than 8.
// while (true) {
//     let randomNum = Math.floor(Math.random()*10) + 1;
//     if (randomNum > 8) break;
//     console.log(randomNum);
// }


// Looping Over Arrays:
// Array Sum:
// Use a for loop to calculate the sum of elements in an array of numbers.
const numArr = [1,2,3,4,5];
let sum = 0;
for (let i = 0; i < numArr.length; i++){
    sum += numArr[i];
}
// console.log(sum);

// Array Modification:
// Use a for loop to double each element in an array of numbers.
for (let i = 0; i < numArr.length; i++){
    numArr[i] = numArr[i] * 2;
}
console.log(numArr);