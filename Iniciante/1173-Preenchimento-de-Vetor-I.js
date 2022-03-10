var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());
let array = [];
let temp;
let double;
array.push(number);

for(let i = 0; i <= 9; i++){
  if(i == 0){
    double = number;
    array.push(number);
    temp = double
  }
  else{
    double = temp * 2;
    array.push(double);
    temp = double;
  }
  console.log(`N[${i}] = ${temp}`);
}