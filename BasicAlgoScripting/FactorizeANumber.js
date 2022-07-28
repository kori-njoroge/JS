/**
 * Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

 */
function factorialize(num) {
    if (num == 0) {
        return 1
    } else {
        for (let k = num - 1; k > 1; k--) {
            num = num * k;
        }
        return num;
    }
}

console.log(factorialize(5));

console.log(factorialize(4));

//solution 2
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

console.log(factorialize(5));