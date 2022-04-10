var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b, c] = lines.shift().split(" ");

console.log((parseInt(a) / (parseInt(b) + parseInt(c))).toFixed(2));