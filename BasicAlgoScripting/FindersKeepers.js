function findElement(arr, func) {
    let num = 0;
    for(let k = 0; k < arr.length; k++){
            if(func(arr[k])){
            return arr[k];
        }
    }
    return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))