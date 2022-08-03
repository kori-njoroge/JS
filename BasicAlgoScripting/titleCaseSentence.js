function titleCase(str) {
    // let individualStrings = str.toUpperCase();
    let myString = str.split(' ');
    let result = '';
    for (let k = 0; k < myString.length; k+=1) {
        let word = myString[k];
        for (let j = 0; j < word.length; j+=1) {
            if (j === 0) {
                result += word[j].toUpperCase();
            }else{
                result += word[j].toLowerCase();
            }
        }
            result +=' ';
    }
    return result.slice(0,result.length -1);

}

console.log(titleCase("I'm a little tea pot"));