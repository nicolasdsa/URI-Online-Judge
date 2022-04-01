var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let j = 1;
let i = 0;

for(i; i <= 2; i += 0.20){
  if(Number.isInteger(i) || i.toFixed(1) == 2){
    console.log(`I=${i.toFixed(0)} J=${j.toFixed(0)}\nI=${i.toFixed(0)} J=${(j + 1).toFixed(0)}\nI=${i.toFixed(0)} J=${(j + 2).toFixed(0)}`);
    j += 0.20;
  }
  else{
  console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}\nI=${i.toFixed(1)} J=${(j + 1).toFixed(1)}\nI=${i.toFixed(1)} J=${(j + 2).toFixed(1)}`);
  j += 0.20;
  }
}