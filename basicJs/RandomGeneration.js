// random numbers generation.
//Math.random(); generates random fraction numbers.
function randomNumber(){
    console.log(Math.random());
}

//Rounding of to nearest whole number.
//Math.floor(); rounds number to nearest whole number
function roundOff(){
    return Math.floor(Math.random() *20);
}

//generating random numbers within a range.
console.log("@@@@@@@@@@@@@@@@@@@@@@@");
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}

randomNumber(10,20)