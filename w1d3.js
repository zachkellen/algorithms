var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

// Concatenation
// Adding of two strings together

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);

// I should bring: sunglasses, a coat, and a smile!

// Loops don't always have to increment, can decrement
for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");


var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for (var i = 0; i < numbers.length; i++) {          // Roll through the array
    if (numbers[i] > 0) {                           // Check if that value is greater than value
        countPositives++;                           // Incrememnt var if the number is positive
    }
}

console.log("there are " + countPositives + " positive values");
