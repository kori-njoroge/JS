/*
Match All Letters and Numbers

Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

All four of these test calls would return true.

These shortcut character classes are also known as shorthand character classes.

Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

*/
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//Match Everything But Letters and Numbers
/*
Match Everything But Letters and Numbers

You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

The first match call would return the value ["%"] and the second would return ["!"].

Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

*/
let quoteSample2 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result2 = quoteSample.match(nonAlphabetRegex).length;

