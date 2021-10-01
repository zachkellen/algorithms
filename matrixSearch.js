var big = [
    [67,34,45,56],
    [98,87,76,65],
    [56,67,78,89],
    [54,43,32,21]
];

var small = [
    [67,34],
    [98,87]
];

var anotherSmall = [
    // [89,89],
    // [32,21]
];


function matrixSearch (larger, smaller) {
    if(smaller.length == 0){
        return false;
    }
    for(let i = 0; i < larger.length; i++){
        for(let j = 0; j < larger[i].length; j++){
            if(smaller[0][0] == larger[i][j] && smaller[0][1] == larger[i][j + 1] && smaller[1][0] == larger[i + 1][j] && smaller[1][1] == larger[i + 1][j + 1]){
                return true;
            }
        }
    }
    return false;
}

console.log(matrixSearch(big, small));
console.log(matrixSearch(big, anotherSmall));