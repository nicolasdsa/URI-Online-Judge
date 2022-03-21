var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift();

while(lines.length != 0){
  console.log(`${number - 1}`);
  number = lines.shift();
}