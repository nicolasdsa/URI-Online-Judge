var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');
    
let a = parseFloat(lines.shift()) * 3.5;
let b = parseFloat(lines.shift()) * 7.5;
let media = (a + b) / 11;
console.log(`MEDIA = ${media.toFixed(5)}`);