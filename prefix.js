//most math you do might look like this: x + y,
//but what about +xy?
//infix is the notation you are most familiar with,
//but we will calculate prefix notation
//given an array of operands, represented as characters,
//and integers simplify the expressions and return the result
//use built in functions if you feel the need! just get it solved!

//given ['+', 5, 10] return 15
//given ['+','*',6,4,20] return 44
const calcPrefix = (arr) => {
    while(isNaN(arr[0])){
        for(let i = 0; i < arr.length; ++i){
            if(isNaN(arr[i]) && !isNaN(arr[i+1]) && !isNaN(arr[i+2])){
                // console.log(`${arr[i]} followed by ${arr[i+1]} and ${arr[i+2]}`);
                let result;
                if(arr[i] === "+"){
                    result = arr[i+1] + arr[i+2];
                }
                else if(arr[i] === "-"){
                    result = arr[i+1] - arr[i+2];
                }
                else if(arr[i] === "*"){
                    result = arr[i+1] * arr[i+2];
                }
                else{
                    result = arr[i+1] / arr[i+2];
                }

                
                arr.splice(i,3,result);
                // console.log(arr);                
            }
        }
    }

    return arr[0];
}

console.log(calcPrefix(['+', 5, 10]));
console.log(calcPrefix(['+','-',6,4,20]));
console.log(calcPrefix(['+','*',6,4,20]));
console.log(calcPrefix(['+','*',8,4,'/',20,5]));