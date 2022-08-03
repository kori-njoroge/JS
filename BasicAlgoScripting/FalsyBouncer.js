/**
 *
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

 */
function bouncer(arr) {
    let result = [];
    for(let j = 0; j < arr.length; j++){
        let singleArray = arr[j];
        if(singleArray){
            result.push(arr[j]);
        }
    }
    return result;
}

console.log(bouncer([7, "ate", "", false, 9]));