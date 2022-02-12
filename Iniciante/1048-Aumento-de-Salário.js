var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salary = parseFloat(lines.shift());
let readjustment = 0;

if(salary <= 400){
  readjustment = salary * 0.15;
  console.log(`Novo salario: ${(salary + readjustment).toFixed(2)}\nReajuste ganho: ${readjustment.toFixed(2)}\nEm percentual: 15 %`); 
}

else if(salary <= 800){
  readjustment = salary * 0.12;
  console.log(`Novo salario: ${(salary + readjustment).toFixed(2)}\nReajuste ganho: ${readjustment.toFixed(2)}\nEm percentual: 12 %`);
}

else if(salary <= 1200){
  readjustment = salary * 0.10;
  console.log(`Novo salario: ${(salary + readjustment).toFixed(2)}\nReajuste ganho: ${readjustment.toFixed(2)}\nEm percentual: 10 %`);
}

else if(salary <= 2000){
  readjustment = salary * 0.07;
  console.log(`Novo salario: ${(salary + readjustment).toFixed(2)}\nReajuste ganho: ${readjustment.toFixed(2)}\nEm percentual: 7 %`);
}

else{
  readjustment = salary * 0.04;
  console.log(`Novo salario: ${(salary + readjustment).toFixed(2)}\nReajuste ganho: ${readjustment.toFixed(2)}\nEm percentual: 4 %`);
}
