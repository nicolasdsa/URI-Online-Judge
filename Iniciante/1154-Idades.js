var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
let media = 0;
let cont = 0;

while(true){
  if(number < 0){
    break;
  }
  media += number;
  cont++;
  number = parseInt(lines.shift());
}

console.log(`${(media / cont).toFixed(2)}`);