var monster = { // Three values
    id: 1, // Number
    name: "Bulbasaur", // String
    types: ["poison", "grass"] // Array with strings
};

// Using monster variable, how do we access name?
// console.log(monster.name);

// How do we access the second type?
// console.log(monster.types[1]);


// Part 2

var pokémon = [ //Square brackets = array
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// console.log(pokémon[2].id)
// console.log(pokémon[8].name)
// console.log(pokémon[3].types[0])

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].id > 99) {
//         console.log(pokémon[i].name);
//     }
// }

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].id % 3 == 0) {
//         console.log(pokémon[i]);
//     }
// }

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].types.length > 1) {
//         console.log(pokémon[i]);
//     }
// }

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].types.length == 1 && pokémon[i].types == "poison") {
//         console.log(pokémon[i].name);
//     }
// }

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].types[1] == "flying") {
//         console.log(pokémon[i].type[0]);
//     }
// }

for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length == 1 && pokémon[i].types == "poison") {
        var pName = pokémon[i].name;
        var splitString = pName.split("");
        console.log("Result of .split " + splitString);
        var reverse = splitString.reverse();
        console.log(reverse);
        var join = reverse.join("");
        console.log(join);
    }
}