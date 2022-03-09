var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());
let temp = 1;

for(let i = 1; i < number; i++ ){
  temp *= (number + 1) - i;
}
console.log(temp);