var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());

if(number <= 800){
  console.log(1);
}
else if(800 < number && number <= 1400){
  console.log(2);
}

else if(1400 < number && number <= 2000){
  console.log(3);
}