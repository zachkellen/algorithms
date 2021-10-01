// Remove Dupes
// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY

function removeDupe(arr) {
    for(let i = arr.length - 1; i >= 0; i--){
        for(let j = i - 1; j >= 0; j--){
            if(arr[i] == arr[j]){
                arr.splice(i , 1);
                // break;
            }
            // console.log(arr)
        }
    }
    return arr;
}

console.log(removeDupe([3,3,3,2,2,3,3,3,3,3,3,3,2,2,2,3]));