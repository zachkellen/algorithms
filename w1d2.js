// JavaScript Variables

// A JS variable is like a cardboard box with a label n it. You can put whatever you want in this box.

// "Initializing" the variable
var firstName = "Zachary";

console.log(typeof firstName);

var age = 25;

var isSleeping = false;

// Rules for variables:
// No spaces
// Cannot begin with a number
// Cannot use hyphens ( - ) inside name

// Primitive datatypes:
// Strings - strings of characters
// Numbers - a number... duh. No distinction between floating and integer
// Boolean - true or false

// JavaScript built to run in the browser. Browsers have consoles 


// JavaScript Loops! Yay!
console.log(1);
console.log(2);
console.log(3);

// DRY Concept - Don't Repeat Yourself!
// Above is a very DRY concept, repeating over and over
// Use a For loop!

for (var i = 1; i <= 3; i++) {
    console.log(i);
}

// i = i + 1
// i += 1
// i++

// For Loops
// 1. Sentry
// 2. Where does it start
// 3. Where it ends
// 4. How it changes

var a = 25;
a = a - 13;
console.log(a / 2); //6

a = "hello";
console.log(a + " hello"); // hello hello

for (var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i); //Outside of the loop 12

function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0];

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);