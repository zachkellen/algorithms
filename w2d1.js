var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();
var random = Math.floor(Math.random() * 11); //Only integers 0 - 10
var random = Math.floor(Math.random() * 9) + 2; // Only integers 2 - 10

console.log(floor);
console.log(ceiling);
console.log(random);

// Algo p.2

function d6() {
    var roll = Math.random();
    roll = Math.floor(roll * 6) + 1;
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// Algo p.3

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function answer(arr) {
    var choice = Math.floor(Math.random() * arr.length);
    console.log(choice);
    return arr[choice];
}

console.log("Your answer is: " + answer(lifesAnswers));
