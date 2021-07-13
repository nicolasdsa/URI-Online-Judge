var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a,b,c] = lines.shift().split(" ");

let acon = parseFloat(a);
let bcon = parseFloat(b);
let ccon = parseFloat(c);

let MaiorAB = (acon + bcon + Math.abs(acon-bcon)) / 2;

let Maior = (MaiorAB + ccon + Math.abs(MaiorAB-ccon)) / 2;

console.log(`${Maior} eh o maior`);

