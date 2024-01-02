// FUNCTIONS


// 1. Function Basics:
// Create a function called greet that takes a name as a parameter and returns a greeting message.
// function greet(name){
//     return `Hello ${name}`
// } 
// let sayHello = greet("Ved");
// console.log(sayHello);


// 2. Function Parameters:
// Write a function calculateArea that takes the radius of a circle as a parameter and returns its area (πr²).
// function calcArea(radius){
//     return 3.14*radius*radius
// }
// let area = calcArea(5);
// console.log(area);


// 3. Default Parameters:
// Modify the greet function to have a default parameter, so if the name is not provided, it defaults to "Guest."
// function greet(name){
//     if(name){
//         return `Hello ${name}`
//     } else{
//         return "Hello Guest"
//     }
// } 
// let sayHello = greet();
// console.log(sayHello);

// 4. Function Expression
// Create a function expression called multiply that multiplies two numbers and assigns it to a variable.
// const multiply = function (num1, num2) { return num1 * num2 };
// let newNum = multiply(4, 2);
// console.log(newNum);

// 5. Arrow Functions:
// Rewrite the calculateArea function using an arrow function.
// const calcArea = (radius) => 3.14*radius*radius; 
// console.log(calcArea(5));

// 6. Callback Functions:
// Create a function processData that takes an array and a callback function. Apply the callback to each element in the array and return the modified array.
// function processData(array, callback) {
//     let modifiedArray = []

//     for(let i=0; i<array.length; i++){
//         modifiedArray.push(callback(array[i]))
//     }
//     return modifiedArray;
// }

// let num = [1,2,3,4,5];

// function incrementByOne(number){
//     return number+1
// }

// let incremented = processData(num, incrementByOne);
// console.log(incremented);


// 7. Closure:
// Create a function counter that returns a function. The returned function should increment a counter variable each time it's called.
// function counter(){
//     let count = 0;
//     return ()=>{
//         count++;
//         return count;
//     };
// }

// let c = counter()
// console.log(c());
// console.log(c());
// console.log(c());