// Binary Search

// Given a sorted array and a value, return whether
//  the array contains that value. Do not sequentially 
//  iterate the array. Instead 'divide and conquer'. 
//  Taking advantage of the fact that array is sorted. 


function binarySearch(arr, value){
    while(arr.length > 1){
        let middleIndex = Math.floor(arr.length/2)
        if(value == arr[middleIndex]){
            return true;
        }
        else if(value < arr[middleIndex]){
            arr = arr.slice(0, middleIndex)
        }
        else if(value > arr[middleIndex]){
            arr = arr.slice(middleIndex, arr.length)
            middleIndex = Math.floor((arr.length + middleIndex) / 2)
        }
        
    }
    if(arr.length == 1 && arr[0] == value){
        return true;
    }
    return false;
}

function binarySearchRecursive(input, target, startpoint=0, endpoint=input.length-1){

    var middle = Math.floor((startpoint + endpoint)/2);
    console.log(`Start: ${startpoint}, middle: ${middle}, end: ${endpoint}`)
    if(input[startpoint] == target || input[endpoint] == target) {
        return true;
    }
    if(target < input[startpoint] || target > input[endpoint]) {
        return false;
    }
    if(input[middle] == target) {
        return true;
    }
    if(input[middle] > target) {
        return binarySearchRecursive(input, target, startpoint, middle - 1)
    }
    if(input[middle] < target) {
        return binarySearchRecursive(input, target, middle + 1, endpoint)
    }

}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9));
// ---> 1 2 3 4 5  |  6 7 8 9 10
// ---> 6 7  |  8 9 10
// ---> 8  [9]  10  (found)

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,12,13], 1))    //TRUE
console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 0 ))    //True
console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 0 ))    // False
console.log(binarySearch([0, 2, 4, 6, 8, 12, 14, 16], 16 ))    //False
console.log(binarySearch([8], 8 ))   //False