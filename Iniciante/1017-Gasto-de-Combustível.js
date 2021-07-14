var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let hours = parseFloat(lines.shift());
let velocidade = parseFloat(lines.shift());

let gasto = (hours * velocidade) / 12;
console.log(`${gasto.toFixed(3)}`);
