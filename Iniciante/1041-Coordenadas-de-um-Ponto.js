var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [x, y] = lines.shift().split(" ");


if(x == 0 && y == 0) return console.log("Origem");

else if(x == 0) return console.log("Eixo Y");

else if(y == 0) return console.log("Eixo X");

else if(x > 0 && y > 0) return console.log("Q1");

else if(x < 0 && y > 0) return console.log("Q2");

else if(x < 0 && y < 0) return console.log("Q3");

else if(x > 0 && y < 0) return console.log("Q4");