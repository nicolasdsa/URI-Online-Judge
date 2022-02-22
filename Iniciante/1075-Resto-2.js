var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift();

for(let i = 1; i <= 10000; i++){
  if(i % number == 2)console.log(i);
}