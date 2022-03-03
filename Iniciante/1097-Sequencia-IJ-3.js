var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let j = 7;
let i = 1;

for(i; i <= 9; i += 2){
  console.log(`I=${i} J=${j}\nI=${i} J=${j - 1}\nI=${i} J=${j - 2}`);
  j += 2;
}