var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift();
let text = "";

for(let i = 1; i <= number; i++){
  if(i == number){
    text += "Ho!";
  }
  else{
    text += "Ho ";
  }
}
console.log(text);