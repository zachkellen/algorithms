//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    let currentWord = '';
    let finalArray= [];
    for(let i = 0; i < str.length; i++){
        if(str[i] != ' '){
            currentWord += str[i];
        }
        if(str[i] == ' ' && currentWord.length > 0){
            finalArray.push(currentWord);
            currentWord = '';
        }
        if(i + 1 == str.length && currentWord.length > 0){
            finalArray.push(currentWord);
        }
    }
    return finalArray
}

console.log(stringToWordArray("Did I shine my shoes today?      "));
console.log(stringToWordArray("two             words"));

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {
    let newArray = stringToWordArray(str);
    let finalArray = [];
    let finalString = '';
    for(let i = newArray.length - 1; i >= 0; i--){
        finalArray.push(newArray[i]);
    }
    for(let i = 0; i < finalArray.length; i++){
        if(i + 1 == finalArray.length){
            finalString += finalArray[i];
        } 
        else{
            finalString += finalArray[i] + ' ';
        }
    }
    return finalString;
}

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));