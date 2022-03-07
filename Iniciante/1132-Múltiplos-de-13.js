var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const a =  parseInt(lines.shift());
const b = parseInt(lines.shift());
let cont = 0;

if(a > b){
  for(let i = b; i <= a; i++){
    if(i % 13 == 0){

    }
    else{
      cont += i;
    }
  }
}

else if(b > a){
  for(let i = a; i <= b; i++){
    if(i % 13 == 0){

    }
    else{
      cont += i;
    }
  }
}

console.log(cont);