var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [a,b,c] = lines.shift().split(" ");
let delta = Math.sqrt(Math.pow(b, 2) - (4*a*c));
let raiz1 = ((b * -1) + delta) / (2*a);
let raiz2 = ((b * -1) - delta) / (2*a);

if(isNaN(raiz1) || isNaN(raiz2)){
  return console.log("Impossivel calcular");
}
console.log(`R1 = ${raiz1.toFixed(5)}\nR2 = ${raiz2.toFixed(5)}`)