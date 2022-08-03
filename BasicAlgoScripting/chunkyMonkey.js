/**
 * Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

 */
function chunkArrayInGroups(arr, size) {
    let result = [];

    for(let k =0; k<arr.length; k+=size){
        result.push(arr.slice(k,k+size));
    }
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));