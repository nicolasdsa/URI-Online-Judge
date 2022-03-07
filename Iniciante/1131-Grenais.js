var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number;
let [x, y] = lines.shift().split(" ");
let X = parseInt(x);
let Y = parseInt(y);
let winInter = 0;
let winGremio = 0;
let draw = 0;
let cont = 0;
let team;

while(true){
  if(X == Y){
    draw++;
  }
  else if(Y > X){
    winGremio++;
  }

  else if(X > Y){
    winInter++;
  }
  cont++;
  console.log("Novo grenal (1-sim 2-nao)");
  number = lines.shift();
  if(number == 1){
  }
  else{
    break;
  }
  [x, y] = lines.shift().split(" ");
  X = parseInt(x);
  Y = parseInt(y);
}

if(winInter > winGremio){
  team = "Inter venceu mais";
}
else if(winInter < winGremio){
  team = "Gremio venceu mais";
}
else{
  team = "Não houve vencedor"
}

console.log(`${cont} grenais\nInter:${winInter}\nGremio:${winGremio}\nEmpates:${draw}\n${team}`);