/**
 *
 */
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Only change code below this line
    for (let j = 0; j < callback.length; j++) {
        // console.log(j);
        if (callback[j] > 0) {
            // console.log(callback[j])
            newArray.push(callback[j]);
        }
    }
    // Only change code above this line
    return newArray;
};

const new_s = s.myMap(function (item) {
    return item * 2;
});
// console.log(new_s);