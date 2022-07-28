//parseInt() converts the provided string to integer
function convertToInt(params) {
    return parseInt(params);
}

console.log(convertToInt("12133333334"));

//convert binary to int using parseInt("",radix);
//radix is the base to be converted to;

function convertToIntFromBinary(str) {
    return parseInt("str",36);
}

console.log(convertToIntFromBinary("100011"));