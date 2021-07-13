var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [codigo1,quantidade1,valor1] = lines.shift().split(" ");

let primeiro = quantidade1 * valor1;

let [codigo2,quantidade2,valor2] = lines.shift().split(" ");

let segundo = quantidade2 * valor2;

let total = primeiro + segundo;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);