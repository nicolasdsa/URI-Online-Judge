var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo = parseInt(lines.shift());
let horas = parseInt((tempo / 60) / 60);
let minutos = parseInt(tempo / 60);
let segundos = tempo % 60;

if (tempo / 60 < 1){
  console.log(`0:0:${tempo}`);
}
else if(tempo / 60 > 1 && tempo / 60 < 60){
  
  console.log(`0:${minutos}:${segundos}`)
}

else {
  minutos = parseInt((tempo / 60) - (horas * 60)); 
  console.log(`${horas}:${minutos}:${segundos}` );
}

