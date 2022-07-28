function repeatStringNumTimes(str, num) {
    let result = '';
    if (num <= 0) {
        return "";
    }
    for (let g = 0; g < num; g++) {
        result += str;
    }
    return result;
}



console.log(repeatStringNumTimes("abc", 3));