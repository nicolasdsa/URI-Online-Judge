var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const a =  parseInt(lines.shift());
const b = parseInt(lines.shift());
let i = 0;

if (a > b){
  for (i = b + 1; i < a; i++){
    if (i % 5 == 2 || i % 5 == 3){
      console.log(i);
    }
  }
}

else if( b > a){
  for (i = a + 1; i < b; i++){ 
    if (i % 5 == 2 || i % 5 == 3){
      console.log(i);
    }
  }
}

