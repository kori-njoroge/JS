function confirmEnding(str, target) {
        let targetLength = target.length;
        let targetToMatch = str.slice(str.length - targetLength, str.length);
        console.log(targetToMatch);
        if(targetToMatch === target){
            return true;
        }
    return false;
    }



console.log(confirmEnding("Open sesame", "same"));