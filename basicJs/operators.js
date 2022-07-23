// boolean ++ if statements
/*
if (condition is true) {
    statement is executed
}
  */
console.log("*********")
// corey is a condition

function dudette (corey){
    if (corey == 10){
        return"Dude he fiiiine"
    }
        return"Dude he finest"
}

console.log(dudette(10));

console.log("*********")
//if wonte
function equalityTest (valarie){
    if(valarie == 20){
        return "Equal";
    }
        return "False"
}

console.log(equalityTest(20));

//typeof sytax
console.log("*********")

console.log(typeof "3");
//
console.log("*********")


// strictly equal
function strictEquality( check, me){
    if (check === me){
        return "Nigga Good";
    }
    return "Nigga Real Good"
}

console.log(strictEquality(23,2));
//
console.log("*********")
//


// strictly not equal.
function strictlyNotEqual(kori, maiko){
    if(maiko !== kori){
        return "maiko nugu";
    }
        return "maiko dongolila";
}

console.log(strictlyNotEqual(2,4));
//
console.log("*********");
//

/* Greater than and
less that*/
function testLessOrEqual(val) {
    if (val<= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
  }
  console.log(testLessOrEqual(10));
//
console.log("*********");
//
//&& operator

function testLogicalAnd(val) {
    // Only change code below this line
    if (val <= 50 && val >=25) {
      return "Yes"
    }
    // Only change code above this line
    return "No";
  }
console.log(testLogicalAnd(10));

//
console.log('\n' +"*********");
//

//  Short cut
function closeToEqual(d, k){
  return d === k;
}

console.log(closeToEqual(4,3));

//
console.log('\n' +"*********");
//
//returning functions

// Setup
function abTest(a, b) {
  if(a<0 || b<0){
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}

console.log(abTest(2,2));


//
console.log('\n' +"*********");
//
// Casino Cards
function cc(card){
  if (card >= 1){
    console.log( card +' Bet');
  }
  else if(card === 1){
    console.log(card +" Hold");
  }
  else if(card <1 ){
    console.log(card + ' Hold');
  }
  else{

  }
}

cc(-2); cc(3); cc(7); cc('K'); cc('A')

//
console.log('\n' +"*********");
//

//Counting Cards
let count = 0;

function cc(card) {
  // Only change code below this line  function cc(card){
    switch (card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count ++;
        break;

      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
        count --;
            }
    var holdBet;
    if (count>0) {
      holdBet = "Bet";
    }else {
      holdBet ="Hold"
    }
    return count +" " + holdBet;
  // Only change code above this line
}

console.log(cc(2)); cc(3); cc(7); cc('K'); cc('A');

//
console.log('\n' +"*********");
//
