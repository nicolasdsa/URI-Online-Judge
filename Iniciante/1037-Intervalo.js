var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let intervalo = parseFloat(lines.shift());

if(intervalo >= 0 && intervalo <= 25){
  return console.log("Intervalo [0,25]");
}
else if(intervalo > 25 && intervalo <= 50){
  return console.log("Intervalo (25,50]");
}

else if(intervalo > 50 && intervalo <= 75){
  return console.log("Intervalo (50,75]");
}

else if(intervalo > 75 && intervalo <= 100){
  return console.log("Intervalo (75,100]");
}

else{
  return console.log("Fora de intervalo");
}