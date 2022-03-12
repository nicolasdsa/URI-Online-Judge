var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let S = 0;
for(let i = 1; i <= 100; i++){
  if (i == 1){
    S += 1;
  }
  else{
    S += (1 / i);
  }
}
console.log(S.toFixed(2));