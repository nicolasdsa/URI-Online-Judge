var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift().trim().split("-");

let [a, b, c] = number[0].split(".");

console.log(`${a}\n${b}\n${c}\n${number[1]}`);
