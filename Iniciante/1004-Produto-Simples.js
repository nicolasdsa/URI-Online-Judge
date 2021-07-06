var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');
    
let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let produto = a * b;
console.log(`PROD = ${produto}`);