var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
let positive = 0;
let negative = 0;
let even = 0;
let odd  = 0;

for (let i = 0; i < 5; i++){
  if(number > 0){
    positive++;
  }
  else if(number < 0){
    negative++;
  }
  if(number % 2 == 0){
    even++;
  }
  else if(number % 2 != 0){
    odd++;
  }
  number = parseInt(lines.shift());
}

console.log(`${even} valor(es) par(es)\n${odd} valor(es) impar(es)\n${positive} valor(es) positivo(s)\n${negative} valor(es) negativo(s)`);