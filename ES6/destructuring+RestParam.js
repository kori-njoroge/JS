//example 1.
const [a, b, ...arr2] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);


//example 2.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [k,j,...arr1] = list; // Change this line
  // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
//consider
/*
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}
*/
//the equivalent
const profileUpdate = ({ name, age, nationality, location }) => {
}

//example 2
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

  // Only change code below this line;
    function half({ max, min }) {
    return (max + min) / 2.0;
}
  // Only change code above this line


