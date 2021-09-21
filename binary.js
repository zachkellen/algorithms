//create a function that accepts a string representing an int
//in binary notation, and returns the int
//you do not need to use parseInt
//should return integer >= 0

//given "1010101", return 85
//given "100011", return 35

const binToDec = (str) => {
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == 1){
            sum += Math.pow(2, str.length - i - 1)
        }
    }
    return sum;
}

// console.log(binToDec("1010101"));
// console.log(binToDec("100011"));
// console.log(binToDec("100"));
// console.log(binToDec("1000"));
// console.log(binToDec("1111"));
// console.log(binToDec("110101011"));