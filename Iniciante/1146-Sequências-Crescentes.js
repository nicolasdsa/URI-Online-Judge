var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
let text = "";

while(true){
  if(number == 0){
    break;
  }
  else{
    for(let i = 1; i <= number; i++){
      if(i == number){
        text += i;
      }
      else{
      text += i + " "
      }
    }
    console.log(text);
    text = "";
    number = parseInt(lines.shift());
  }
}