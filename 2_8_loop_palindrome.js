
function isPalindrome(word){
    const splitLetters = word.split("");
    const reverseArray = splitLetters.reverse();
    const reversedWord = reverseArray.join("");
    console.log(reversedWord);
    return reversedWord === word;
    //return word === word.split("").reverse().join("");
}

"race"

console.log(isPalindrome("race"))


function getCharacters(word){

    const len = word.length;

    /* for(let index=0;index<len;index=index+1){
        console.log(word.charAt(index))
    } */

    for(let index=len-2;index>=0;index=index-1){
        //console.log(word.charAt(index))
    }

}


const chars = getCharacters("mada");

///race

//racer

//racear

//racecar

//mada

//madam

String.prototype.isPalindrome = function () {
    const word = this.slice(0);
    console.log("line 47",this,word);
    const splitLetters = word.split("");
    const reverseArray = splitLetters.reverse();
    const reversedWord = reverseArray.join("");
    console.log(reversedWord,word)
    return reversedWord === word;
}

const word = "race";

console.log("isPalindrom",word.isPalindrome());

//Hi senthil. if possible, please upload all these to GITHUB when you get time. thanks.