// Basics of Objects:

// Object Creation:
// Create an empty object called person.
// const person = {};

// Object Properties:
// Add properties to the person object for name, age, and city. Set values accordingly.
// const person = {
//     name: "Dev",
//     age: 21,
//     city: "Rewa"
// };

// Accessing Object Properties:
// Log the name property of the person object to the console.
// console.log(person.name);


// Object Methods:

// Add a method called greet to the person object that logs a greeting using the name property.
// Modify the greet method to accept a parameter and use it to personalize the greeting.
// const person = {
//     name: "Dev",
//     age: 21,
//     city: "Rewa",
//     greet: function(greetWord){
//         console.log(`${greetWord} ${this.name}`);
//     }
// };
// person.greet("Heyyy!")


// Object Iteration:
// Create an object called car with properties like make, model, and year. Use a for...in loop to iterate over the properties and log them to the console.
// const car = {
//     make: "Tata",
//     model: "Punch",
//     year: 2020
// }
// for (let prop in car){
//     console.log(prop, car[prop]);
// }


// Object Nesting:
// Create an object called address with properties like street, city, and zipcode. Add the address object as a property to the person object.
const address = {
    street: "GEC",
    city: "Rewa",
    zipcode: 496002
}
const person = {
    name: "Dev",
    age: 21,
    city: "Rewa",
    greet: function(greetWord){
        console.log(`${greetWord} ${this.name}`);
    },
    address: address
};
// console.log(person.address.zipcode);

// Object Update:
// Update the age property of the person object to a new value.
person.age = 20;
// console.log(person.age);

// Object Deletion:
// Delete the city property from the person object.
delete person.city;

console.log(person);