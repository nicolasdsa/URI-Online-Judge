var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let S = 0;
let cont = 1;

for(let i = 1; i <= 37; i += 2){
    cont *= 2;
    S += ((i + 2) / (cont));
}
console.log((S + 1).toFixed(2));