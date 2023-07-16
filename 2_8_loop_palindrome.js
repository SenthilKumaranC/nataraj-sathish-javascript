
function isPalindrome(word){
    const splitLetters = word.split("");
    const reverseArray = splitLetters.reverse();
    const reversedWord = reverseArray.join("");
    console.log(reversedWord);
    return reversedWord === word;
    //return word === word.split("").reverse().join("");
}

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

