var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift();

while(true){
  if(number == 2002){
    console.log("Acesso Permitido")
    return;
  }
  console.log("Senha Invalida");
  number = lines.shift();
}