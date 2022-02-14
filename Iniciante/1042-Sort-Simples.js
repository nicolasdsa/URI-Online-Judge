var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines.shift().split(" ");
const numbersorder = [...numbers];
numbersorder .sort((a,b) => a - b);
console.log(`${numbersorder[0]}\n${numbersorder[1]}\n${numbersorder[2]}\n\n${numbers[0]}\n${numbers[1]}\n${numbers[2]}`)