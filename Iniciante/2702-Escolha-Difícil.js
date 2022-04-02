var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let disponible = lines.shift().split(" ");
let requisite = lines.shift().split(" ");
let cont = 0;

for(let i = 0; i < 3; i++){
  if((parseInt(disponible[i]) - parseInt(requisite[i])) < 0){
    cont += parseInt(disponible[i]) - parseInt(requisite[i]);
  }
}
console.log(Math.abs(cont));