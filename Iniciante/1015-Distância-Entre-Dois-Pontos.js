var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x1,y1] = lines.shift().split(" ");

let [x2,y2] = lines.shift().split(" ");

let expressao = Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2)

let distancia = Math.sqrt(expressao);
console.log(`${distancia.toFixed(4)}`);