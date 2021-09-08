//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
// const dedupe = (str) => {
//     newString = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         let counter = 0;
//         for(let j = 0; j < i; j++){
//             // console.log(str[i], str[j])
//             if(str[i] == str[j]){
//                 counter++;
//             }
//         }
//         if(counter == 0){
//             newString = str[i] + newString;
//         }
//     }
//     return newString;
// }

const dedupe = (str) => {
    newString = '';
    for(let i = 0; i < str.length; i++){
        let counter = 0;
        for(let j = i + 1; j < str.length; j++){
            if(str[i] == str[j]){
                counter++;
            }
        }
        if(counter == 0){
            newString += str[i];
        }
    }
    return newString
}

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));