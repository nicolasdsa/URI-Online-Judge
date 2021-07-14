var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines.shift());
let distancia = a * 2;
console.log(`${distancia} minutos`);