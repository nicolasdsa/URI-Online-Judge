var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let L = parseInt(lines.shift());
let C = parseInt(lines.shift());

if((L % 2 == 0 && C % 2 == 0) ||(L % 2 != 0 && C % 2 != 0)){
  console.log(1);
}
else{
  console.log(0);
}