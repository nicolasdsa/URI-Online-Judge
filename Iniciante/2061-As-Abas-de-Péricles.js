var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a, b] = lines.shift().split(" ");
let action;

for(let i = 0; i < b; i++){
  action = lines.shift().trim();
  if(action == "fechou"){
    a++;
  }
  else{
    a--;
  }
}

console.log(a);