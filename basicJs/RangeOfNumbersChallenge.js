function rangeOfNumbers(startNum, endNum) {
if( startNum === endNum){
    return[startNum];
}else{
    let arr = rangeOfNumbers(startNum,endNum-1);
    arr.push(endNum);
    return arr;
}
}

console.log(rangeOfNumbers(1,5));