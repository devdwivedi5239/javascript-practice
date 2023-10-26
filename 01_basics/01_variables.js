const accountId = 1093232;
let accountEmail = "dev@dwivedi.com" //use of closing tag ";", is not necessary but is a good practice.
var accountPassword = "12334"
accountCity =  "Rewa" //variable can be created without any keyword but this shouldnt be done.
let accountState; //variables can also be created without giving them any values.

console.table([accountId, accountEmail, accountPassword, accountCity]) // console.table prints the given variable data in a tabular form.

let arr = ["one", "two", "three", "four", "five"];
console.table(arr);


/*      NOTES

1. Data in the const keyword can not be changed.
2. let should be prefered over var because problems with scopes.

*/
