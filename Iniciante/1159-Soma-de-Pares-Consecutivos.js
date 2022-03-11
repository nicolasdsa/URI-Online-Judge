var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
let sum = 0;
let cont = 0;

while(true){
  if(number == 0){
    break;
  }
  else{
    let temp = number;
    while(cont < 5){
      if(temp % 2 == 0){
        sum += temp;
        cont++;
        temp++;
      }
      else{
        temp++;
      }
    }
    console.log(sum);    
    number = parseInt(lines.shift());
    cont = 0;
    sum = 0;
  }
}