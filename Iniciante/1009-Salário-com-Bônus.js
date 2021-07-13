var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let person = lines.shift();
let salary = parseFloat(lines.shift());
let comissao = parseFloat(lines.shift());
let salariofinal = salary + (comissao * 0.15);

console.log(`TOTAL = R$ ${salariofinal.toFixed(2)}`);