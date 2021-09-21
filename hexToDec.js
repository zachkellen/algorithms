//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466
const hexStrToDec = (str) => {
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        if(isNaN(str[i]) == false){
            // console.log("We got a number")
            sum += str[i] * Math.pow(16, str.length - i - 1)
        }
        if(str[i] == "A"){
            sum += 10 * Math.pow(16, str.length - i - 1)
        }
        if(str[i] == "B"){
            sum += 11 * Math.pow(16, str.length - i - 1)
        }
        if(str[i] == "C"){
            sum += 12 * Math.pow(16, str.length - i - 1)
        }
        if(str[i] == "D"){
            sum += 13 * Math.pow(16, str.length - i - 1)
        }
        if(str[i] == "E"){
            sum += 14 * Math.pow(16, str.length - i - 1)
        }
        if(str[i] == "F"){
            sum += 15 * Math.pow(16, str.length - i - 1)
        }
        console.log(str[i] , sum)
    }
    return sum;
}

console.log(hexStrToDec("1D2"));
console.log(hexStrToDec("2C1"));

//given an integer, return a string representing the 
//hexadecimal value
//given 108, return "6C"
const decToHexStr = (val) => {
    let output = ''
    const values = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    while(val > 0){
        output = values[val%16] + output;
        val = Math.floor(val/16)
    }
    return output;
}

// console.log(decToHexStr(108));
// console.log(decToHexStr(420));