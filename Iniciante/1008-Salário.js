var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

let number = parseInt(lines.shift());
let hours = parseInt(lines.shift());
let valor = parseFloat(lines.shift());
let salario = valor * hours;
console.log(`NUMBER = ${number}\nSALARY = U$ ${salario.toFixed(2)}`);