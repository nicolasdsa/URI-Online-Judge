var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b] = lines.shift().split(" ");

if(a % b == 0 || b % a == 0) console.log("Sao Multiplos");
else console.log("Nao sao Multiplos");