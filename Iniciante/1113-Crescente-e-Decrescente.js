var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines.shift().split(" ");

while(true){
  if (parseInt(x) > parseInt(y)) {
    console.log("Decrescente");
  }
  else if(parseInt(y) > parseInt(x)) {
    console.log("Crescente");
  }
  else {
    return;
  }

  [x, y] = lines.shift().split(" ");
}