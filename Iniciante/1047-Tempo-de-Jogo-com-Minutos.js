var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a , b, c, d] = lines.shift().split(" ");

const A = parseInt(a);
const B = parseInt(b);
const C = parseInt(c);
const D = parseInt(d);

let hours = 0;
let minutes = 0;

if(A == C && B == D) return console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");

else if (A == C && B != D){
  if(B < D){
    minutes = D - B;
    return console.log(`O JOGO DUROU 0 HORA(S) E ${minutes} MINUTO(S)`);
  }
  else{
    minutes = (60 - B) + D;
    return console.log(`O JOGO DUROU 23 HORA(S) E ${minutes} MINUTO(S)`);
  }
}

else if (A > C){
  hours = (24 - A) + C;
  if(B > D){
    hours--;
    minutes = (60 - B) + D;
    return console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
  }
  else if(B < D){
    minutes = D - B;
    return console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
  }
  else{
    return console.log(`O JOGO DUROU ${hours} HORA(S) E 0 MINUTO(S)`);
  }
}

else if (C > A){
  hours = C - A;
  if(B < D){
    minutes = D - B;
    return console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
  }
  else if(B > D){
    hours--;
    minutes = 60 -(B - D);
    return console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
  }
  else{
    return console.log(`O JOGO DUROU ${hours} HORA(S) E 0 MINUTO(S)`);
  }
}