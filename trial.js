const randomColor = require('randomcolor'); // a hex code for an attractive colorgit
const chalk = require('chalk'); //console.log(chalk.blue('Hello world!'));

console.log(process.argv[2]);
console.log(process.argv[3]);

const color = randomColor({
    luminosity: process.argv[3],
    hue: process.argv[2]
 });

 function drawLongLine() {
let stringLong = '';
let i = 0;
do {
    stringLong = strinLong + '#';
    i++;
}
while (i < 31);
console.log(chalk.hex(color)(drawLongLine));
 }

