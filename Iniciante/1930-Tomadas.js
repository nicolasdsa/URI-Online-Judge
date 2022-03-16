var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [T1, T2, T3, T4] = lines.shift().split(" ");

console.log(parseInt(T1) + parseInt(T2) + parseInt(T3) + parseInt(T4) - 3);