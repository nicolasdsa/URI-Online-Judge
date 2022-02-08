var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = lines.shift();
let B = lines.shift();
let i = 0;
let out = 0;
let In = 0; 

while(i < A){
  B <= 20 && B >= 10 ? In++ : out++;
  i++;
  B = lines.shift();
  }

console.log(`${In} in`);
console.log(`${out} out`);