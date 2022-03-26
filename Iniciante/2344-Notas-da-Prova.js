var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());

if(number == 0){
  console.log("E");
}
else if(number > 0 && number <= 35){
  console.log("D");
}
else if(number > 35 && number <= 60){
  console.log("C");
}
else if(number > 60 && number <= 85){
  console.log("B");
}
else if(number > 85 && number <= 100){
  console.log("A");
}