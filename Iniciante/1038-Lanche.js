var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b] = lines.shift().split(" ");

switch(a){
  case "1":
  console.log(`Total: R$ ${(4.0 * b).toFixed(2)}`)
  break;

  case "2":
    console.log(`Total: R$ ${(4.5 * b).toFixed(2)}`)
  break;

  case "3":
    console.log(`Total: R$ ${(5.0 * b).toFixed(2)}`)
  break;
  case "4":
    console.log(`Total: R$ ${(2.0 * b).toFixed(2)}`)
  break;

  case "5":
    console.log(`Total: R$ ${(1.50 * b).toFixed(2)}`)
  break;
}