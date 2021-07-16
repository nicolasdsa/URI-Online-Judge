var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let idade = parseInt(lines.shift());
let ano = parseInt(idade / 365);
let mes = parseInt(idade / 30);
let dia = idade % 30;

if (idade / 30 < 1){
  console.log(`0 ano(s)
  0 mes(es)
  ${idade} dia(s)`);
}
else if(mes > 1 && ano < 1){
  
  console.log(`0 ano(s)
  ${mes} mes(es)
  ${idade} dia(s)`)
}

else {
  console.log(`${ano} ano(s)
  ${mes} mes(es)
  ${dia} dia(s)` );
}