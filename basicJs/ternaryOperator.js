// susbstitute for if ...else.

//syntax.**let variableName = condition ? expressionIfTrue : expressionIfFalse;**
function checkEqual(a, b) {
return a === b? "Equal":  "Not Equal";
}

console.log(checkEqual(1, 2));

//using multiple ternary operators.
function checkSign(num) {
return num > 0 ? "positive"
:num < 0? "negative"
: "zero"
}

console.log(checkSign(10));

//another one
let authenticated = true;
let nextURL = authenticated
    ? (('You will redirect to admin area'), '/admin')
    : (('Access denied'), '/403');

// redirect to nextURL here
console.log(nextURL); // '/admin'

