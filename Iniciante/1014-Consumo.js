var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines.shift());
let combustivel = parseFloat(lines.shift());

let eficiencia = distancia / combustivel;

console.log(`${eficiencia.toFixed(3)} km/l`);