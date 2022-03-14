var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift();
let [a, b] = lines.shift().split(" ");
let A = parseInt(a);
let B = parseInt(b);
let i = 0;
let cont = 0;
let sum = 0;

while(i < number){
  while(true){
    if(A % 2 != 0){
      cont++;
      sum += A;
    }
    A = A + 1;

    if(cont == B){
      console.log(sum);
      break;
    }
  }
  [a, b] = lines.shift().split(" ");
  A = parseInt(a);
  B = parseInt(b);
  sum = 0;
  i++;
  cont = 0;
}