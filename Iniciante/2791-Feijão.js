var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift().trim().split(" ");

for(let i = 0; i <= number.length; i++){
  if(number[i] == "1"){
    console.log(i + 1);
    break;
  }
}