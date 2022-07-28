//slit function => splits a string accordint to the given character,space of key symbol.


function findLongestWordLength(str) {
    let longestWord = "";
    let words = str.split(" ");
    for (let k = 0; k < words.length; k ++) {
        let individualWord = words[k]
        if (individualWord.length > longestWord.length){
            longestWord = individualWord;
        }
    }
    // console.log(words);
    return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
