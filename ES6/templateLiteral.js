//exmaple one
/*
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
*/

//Creating strings
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
    };
    function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for(let i =0; i < arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    // Only change code above this line
}
    return failureItems;
    }

const failuresList = makeList(result.failure);
console.log(failuresList);

//Write Concise Object Literal Declarations Using Object Property Shorthand
//example
/*
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
*/
//the equivalent
const getMousePosition = (x, y) => ({ x, y });
