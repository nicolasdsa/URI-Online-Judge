var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b, c] = lines.shift().split(" ");
const A = parseFloat(a);
const B = parseFloat(b);
const C = parseFloat(c);

if(Math.abs(B - C) < A && A < (B + C) && Math.abs(A - C) < B && B < (A + C) && Math.abs(A - B) < C && C < (A + B)){
  return console.log(`Perimetro = ${(A + B + C).toFixed(1)}`);
}
return console.log(`Area = ${(((A + B)* C) / 2 ).toFixed(1)}`);
