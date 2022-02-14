var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines.shift().split(" ");
numbers.sort((a,b) => a - b).reverse();

const [a, b, c] = numbers
const A = parseFloat(a);
const B = parseFloat(b);
const C = parseFloat(c);

if(A >= B + C){
  return console.log("NAO FORMA TRIANGULO");
}
if(Math.pow(A, 2) == (Math.pow(B,2) + Math.pow(C,2))){
  console.log("TRIANGULO RETANGULO");
}
else if(Math.pow(A, 2) > (Math.pow(B,2) + Math.pow(C,2))){
  console.log("TRIANGULO OBTUSANGULO");
}
else if(Math.pow(A, 2) < (Math.pow(B,2) + Math.pow(C,2))){
  console.log("TRIANGULO ACUTANGULO");
}
if(A == B && B == C){
  console.log("TRIANGULO EQUILATERO");
}
else if(A == B || A == C || B == C){
  console.log("TRIANGULO ISOSCELES");
}