var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift();

for (let i = 1;i <= number;i++ ){
  if (i % 2 != 0) console.log(i);
}