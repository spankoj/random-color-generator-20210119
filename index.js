// Constans
const randomColor = require('randomcolor'); // a hex code for an attractive color
const chalk = require('chalk'); //console.log(chalk.blue('Hello world!'));

console.log(process.argv[2]);
console.log(process.argv[3]);

const color = randomColor({
    luminosity: process.argv[3],
    hue: process.argv[2]
 });

 // Loop to print given number of hashes

 let number = 3;
 function row(number){
    let text = '';
     let i;
     for (i=0; i<=number; i++){
        for (var j = 0; j<31; j++){
            text = text + "#";
        }
text  = text + "\n";
     }
     return text;
 }

 // Loop to write shorter single lines of hashes
 let number1 = 5;
function singleRow(number1){
    let text1 = '';
    for (let k=0; k<number1; k++){
        text1 += '#';
    }
    return text1
}
// Loop to write empty lines
let number3 = 8;
function emptyRow(number3){
    let emptyText = ''
    for (let h=1; h<number3; h++){
        emptyText += ' ';
    }
return emptyText;
}
// Visual representation
console.log(chalk.hex(color)(row(number)));
console.log(chalk.hex(color)(singleRow(number1)+emptyRow(22)+singleRow(number1)));
console.log(chalk.hex(color)(singleRow(number1)+emptyRow(number3)+color+emptyRow(number3)+singleRow(number1)));
console.log(chalk.hex(color)(singleRow(number1)+emptyRow(22)+singleRow(number1)));
console.log(chalk.hex(color)(row(number)));