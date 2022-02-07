var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a,b,c,d] = lines.shift().split(" ");

if (b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a % 2 === 0) return console.log("Valores aceitos");
else console.log("Valores nao aceitos");