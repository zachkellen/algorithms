const upperCaseIt = (str) => {
    let newStr = "";
    for(let i = 0; i < str.length; ++i){
        let this_char = str[i];
        let code = str.charCodeAt(i);
        code >= 97 && code <= 122 && (this_char = String.fromCharCode(code - 32));
        newStr += this_char;
    }
    return newStr;
}
// console.log(upperCaseIt("wooOOOooOO let's freAKIN Go!!!"));
// console.log(upperCaseIt("r"));

//A pangram is a sentence or phrase that uses every letter of the alphabet
//Write a function to return if a string contains at least one of every
//letter(not case sensitive).
//return true or false
//no built in functions!! toUpperCase is OK
//if(str[0] >= "A" && str[0] <= "Z") can be useful
const isPangram = (str) => {
    const upper = str.toUpperCase();
    let reference = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i = 0; i < upper.length; i++){
        for(let j = 0; j < reference.length; j++){
            if(upper[i] == reference[j]){
                let temp = reference[j];
                reference[j] = reference[reference.length-1];
                reference[reference.length-1] = temp;
                reference.pop();
            }
        }
    }
    console.log(reference)
    if(reference.length == 0){
        return true;
    } else{
        return false;
    }
}

console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
console.log(isPangram("Downing shots of Mexican tequila, Billy Joe realized nirvana. Then puked."));

//Write a function to check if a string contains exactly one of every letter
//again, not case sensitive and it's ok to use toUpperCase
const isPerfectPangram = (str) => {
    const upper = str.toUpperCase();
    let reference = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i = 0; i < upper.length; i++){
        let isFirst = false;
        for(let j = 0; j < reference.length; j++){
            if(upper[i] == reference[j]){
                let temp = reference[j];
                reference[j] = reference[reference.length-1];
                reference[reference.length-1] = temp;
                reference.pop();
                isFirst = true;
            }
        }
        if(upper[i] != ' ' && isFirst == false){
            console.log(upper[i])
            return false;
        }
    }
    console.log(reference)
    if(reference.length == 0){
        return true;
    } else{
        return false;
    }
}

// console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
// console.log(isPerfectPangram("qrstu vwxyzabcd efghi jkLMNOP"));//should be true