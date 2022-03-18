var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const tamanho = lines.shift();
const array = lines.shift().split(" ");
let temp;
let posicao = 0;

for(let i = 0, j = parseInt(tamanho); i < array.length, i < j; i++){
  if(i == 0){
    temp = array[0];
  }

  else{
    if(parseFloat(temp) < parseFloat(array[i])){
      
    }
    else{
      temp = array[i];
      posicao = i ;
    }
  }
}

console.log(`Menor valor: ${temp}\nPosicao: ${posicao}`);
