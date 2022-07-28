function largestOfFour(arr) {
    let result = [];
    for(let j = 0; j < arr.length; j ++){
        let singleArray = arr[j];
        let largestNumber = -Infinity;
        for(let  k = 0; k <singleArray.length; k ++){
            if(largestNumber < singleArray[k]){
                largestNumber = singleArray[k];
            }
        }
        result.push(largestNumber);
        // console.log(singleArray);
    }
    return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));