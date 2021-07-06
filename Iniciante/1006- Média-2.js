var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

    
let a = parseFloat(lines.shift()) * 2;
let b = parseFloat(lines.shift()) * 3;
let c = parseFloat(lines.shift()) * 5;
let media = (a + b + c) / 10;
console.log(`MEDIA = ${media.toFixed(1)}`);