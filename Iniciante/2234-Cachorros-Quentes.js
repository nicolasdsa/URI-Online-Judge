var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [a, b] = lines.shift().split(" ");

console.log(`${(a / b).toFixed(2)}`);
