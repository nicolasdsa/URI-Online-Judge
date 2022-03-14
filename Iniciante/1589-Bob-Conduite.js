var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift();
let i = 0;

while(i < number){
  let [a, b] = lines.shift().split(" ");
  console.log(parseInt(a) + parseInt(b));
  i++;
}
