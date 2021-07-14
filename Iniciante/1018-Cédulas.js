var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let cedulas = parseInt(lines.shift());

let resto100 = cedulas % 100;
let notas100 = (cedulas - resto100)/ 100;

let resto50 = resto100 % 50;
let notas50 = (resto100 - resto50) / 50;

let resto20 = resto50 % 20;
let notas20 = (resto50 - resto20) / 20;

let resto10 = resto20 % 10;
let notas10 = (resto20 - resto10) / 10;

let resto5 = resto10 % 5;
let notas5 = (resto10 - resto5) / 5;

let resto2 = resto5 % 2;
let notas2 = (resto5 - resto2) / 2;

let notas1 = resto2;

console.log(`${cedulas}
${notas100} nota(s) de R$ 100,00
${notas50} nota(s) de R$ 50,00
${notas20} nota(s) de R$ 20,00
${notas10} nota(s) de R$ 10,00
${notas5} nota(s) de R$ 5,00
${notas2} nota(s) de R$ 2,00
${notas1} nota(s) de R$ 1,00`);