//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
const encode = (str) => {
    let finalString = '';
    for(let i = 0; i < str.length; i++){
        let counter = 1;
        while(str[i + 1] == str[i]){
            counter++;
            i++;
        }
        finalString += str[i] + counter;
    }
    return finalString;
}

// console.log(encode("aaabbcccc"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
    let newStr = '';
    let char = '';
    let multiplier = '';
    for(let i = 0; i< str.length; i++){
        if(str[i] === NaN){
            char = str[i];
            console.log(char)
        }
        else if(str[i] === !NaN){
            multiplier += str[i]
            console.log(multiplier)
        }
        else if(str[i] === NaN && char.length > 0){
            for(let j = 0; j < parseInt(multiplier); j++){
                newStr += char;
            }
            char = str[i];
            console.log(char)
        }
    }
    return newStr;
}

// let str = 'a31'
// let newStr = slice()
// console.log(parseInt('33'));

// console.log(decode("a3b2c4"));
console.log(decode("t2h10j4"));