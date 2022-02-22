var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());

for(let i = 1; i <= 10; i++){
  console.log(`${i} x ${number} = ${number * i}`);
}