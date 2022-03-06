var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift();
let cont = 0;
let media = 0;

while(true){
  if(number >= 0 && number <= 10){
    cont++;
    media += parseFloat(number);
  }
  else{
    console.log("nota invalida");
  }

  if(cont == 2){
    console.log(`media = ${(media/2).toFixed(2)}`);
    return;
  }
  number = lines.shift();
}