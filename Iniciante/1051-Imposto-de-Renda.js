var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salary = lines.shift();
let tax = 0;
if(salary <= 2000)return console.log("Isento");
else if(salary <= 3000){
  tax = (salary - 2000) * 0.08;
  return console.log(`R$ ${tax.toFixed(2)}`);
}
else if(salary <= 4500){
  tax = ((salary - 3000) * 0.18) + (1000 * 0.08);
  return console.log(`R$ ${tax.toFixed(2)}`)
}
else{
  tax = ((salary - 4500) * 0.28) + (1000 * 0.08) + (1500 * 0.18);
  return console.log(`R$ ${tax.toFixed(2)}`)
}
