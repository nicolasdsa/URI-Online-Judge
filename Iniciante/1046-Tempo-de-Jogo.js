var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a , b] = lines.shift().split(" ");

const A = parseInt(a);
const B = parseInt(b);

let hours = 0;

if(A == B) console.log("O JOGO DUROU 24 HORA(S)");

else if (B > A){
  hours = B - A;
  console.log(`O JOGO DUROU ${hours} HORA(S)`);
}

else if (A > B){
  hours = (24 - A) + B;
  console.log(`O JOGO DUROU ${hours} HORA(S)`);
}