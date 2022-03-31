var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift();
let cont = 0;

for(let i = 0; i < number; i++){
    let word = lines.shift().trim();
    for(let j = 0; j < word.length; j++){
        cont += 0.01;
    }
    console.log(cont.toFixed(2));
    cont = 0;
}