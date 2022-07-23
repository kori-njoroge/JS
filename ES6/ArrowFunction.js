/*
Use Arrow Functions to Write Concise Anonymous Functions

In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:
*/

const myFunc = function() {
const myVar = "value";
return myVar;
}
/*

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:
*/
const myFuncEquivalent = () => {
const myVar = "value";
return myVar;
}
/*
When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
*/
const myFunc3 = () => "value";
/*
This code will still return the string value by default.
*/

const myArray= function arr() {
    const f =[1,2,3,4];
    return f;
}
//is equivalent to
const myArray2 =() => Number[2,23,4];

//Passing parameters in an arrow function

const myArrowHead =(param1, param2) =>param1 * param2;
console.log(myArrowHead(2,3));

//concating arrays

const myConcat =(arr1,arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//default Parameters in arrow functions.
const koriFunc =(firstName =" Mellow") =>"hello" + firstName;
console.log(koriFunc());
//displays hello Mellow since no name parameter was provided during function calling.
console.log(koriFunc("Jakes"));
//Displays hello Jake

