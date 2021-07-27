// Algorithms part 1

var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);

// Part 2

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// Part 3 - While Loops
// 1. Sentry (usually i)
// 2. Where the sentry starts
// 3. Where it ends (conditional)
// 4. How it changes, increment, decrement

var start = 0;
var end = 12;

while (start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

// Part 4 - making a function to reverse an array

function forReverse(arr) {
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return arr
}

console.log(forReverse(["hello","hello1","hello2","hello3"]));


function whileReverse(arr) {
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

console.log(whileReverse([1,2,3,4,5,6,7,8,9]));
