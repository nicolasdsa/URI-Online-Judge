var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift();
const quote = "LIFE IS NOT A PROBLEM TO BE SOLVED";

console.log(quote.slice(0, number));