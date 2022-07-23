// allows a function to take any no of urguments intended to be passwed eg.
//first example
function howMany(...args) {
return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

//second example.
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 100);
}

console.log(sum(45,34,23,12,8,0));
