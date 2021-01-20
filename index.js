const randomColor = require('randomcolor'); // a hex code for an attractive color
const chalk = require('chalk'); //console.log(chalk.blue('Hello world!'));

console.log(process.argv[2]);
console.log(process.argv[3]);

const color = randomColor({
    luminosity: process.argv[3],
    hue: process.argv[2]
 });

console.log(chalk.hex(color)('##################################'));
console.log(chalk.hex(color)('##################################'));
console.log(chalk.hex(color)('##################################'));
console.log(chalk.hex(color)('##########            ############'));
console.log(chalk.hex(color)('##########   '+color+'  ############'));
console.log(chalk.hex(color)('##########            ############'));
console.log(chalk.hex(color)('##################################'));
console.log(chalk.hex(color)('##################################'));
console.log(chalk.hex(color)('##################################'));


