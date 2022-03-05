var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines.shift().split(" ");

while(true){
  if(x == 0 || y == 0) return;

  else if(x > 0 && y > 0) console.log("primeiro");

  else if(x < 0 && y > 0) console.log("segundo");

  else if(x < 0 && y < 0) console.log("terceiro");

  else if(x > 0 && y < 0) console.log("quarto");

  [x, y] = lines.shift().split(" ");
}