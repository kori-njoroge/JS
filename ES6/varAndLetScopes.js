let printNumTwo;
for (let i = 0; i < 3; i++) {
if (i === 2) {
printNumTwo = function() {
    return i;
};
}
}
console.log(printNumTwo());
console.log(i);

// output undefined because I is not delacred globally
//boundaries my man

function checkScope() {
let i = 'function scope';//global declaration
if (true) {
    let i = 'block scope';//local declaration in the if function loop
    console.log('Block scope i is: ', i);
}
console.log('Function scope i is: ', i);
return i;
}