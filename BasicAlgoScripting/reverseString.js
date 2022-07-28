/**
 * Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

 */

function reverseString(str) {
    //converting string to array.
    const arr = [...str]
    console.log(arr);
    arr.reverse();
    str = arr.toString();
    console.log(arr);

    return str.replace(/,/g, '');
}

console.log(reverseString("hello"));

//Solution 2.
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}