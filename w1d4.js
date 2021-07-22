// Functions
// Code that hangs out, at the ready, until it's called into duty.
// Functions define a series of steps that accomplish a task.

// Function declaration!
// New keyword - function

// Functions may or may not have parameters - ingredients that a function needs to accomplish its task.
// Static function vs. dynamic functions
// 

function helloWorld(nameInput) {
    console.log("Hello " + nameInput);
}

// "Zach" is an 'argument'. Argument is when you call a function.
helloWorld("Zach");

// Return Statements
// What is it for?
// Return statements define a value for that statement as opposed to c.log

function addTwo(num1, num2) {
    var result = num1 + num2;
    return result;
}

var sum = addTwo(2, 2);
console.log(sum);

// Algo time!

var x = 5;

function setX(newValue) {
    x = newValue;
}

console.log(x); // Output - 5
setX(15);
console.log(x); // Output - 15

// Algo 2
var x = 5;

function addToX(amount) {
    return x + amount; // As soon as a function sees the return, it ends
    console.log("hello there"); // Everything after a return statement is null, 
}

console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

// Algo 3

function isPal(arr) {
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        if (arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
