var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift();
let i = 0
while(i < 6){
  if(number % 2 != 0){
    console.log(number);
    i++;
  }
  number++;
}