var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b ,c] = lines.shift().split(" ");
let time = 0;

if((parseInt(a) + parseInt(b)) < 24){
  time = (parseInt(a) + parseInt(b));
}
else if((parseInt(a) + parseInt(b)) == 24){
  time = 0;
}
else{
  time = (parseInt(a) + parseInt(b)) - 24;
}


if(time + parseInt(c) < 0){
  console.log(24 + (time + parseInt(c)));
}
else{
  console.log(time + parseInt(c));
}