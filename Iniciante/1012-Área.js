var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a,b,c] = lines.shift().split(" ");

let pi =  3.14159;

let triangulo = (a * c) / 2;
let circulo = pi * Math.pow(c, 2);
let trapezio = ((parseFloat(a) + parseFloat(b)) * c) / 2;
let quadrado = Math.pow(b, 2);
let retangulo = a * b; 

console.log(`TRIANGULO: ${triangulo.toFixed(3)}
CIRCULO: ${circulo.toFixed(3)}
TRAPEZIO: ${trapezio.toFixed(3)}
QUADRADO: ${quadrado.toFixed(3)}
RETANGULO: ${retangulo.toFixed(3)}`);