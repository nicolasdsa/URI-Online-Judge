var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift();

for(let i = 1; i <= number;i++){
  if(i % 2 === 0)console.log(`${i}^2 = ${Math.pow(i, 2)}`);
}