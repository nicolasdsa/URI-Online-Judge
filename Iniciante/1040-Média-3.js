var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [n1,n2,n3,n4] = lines.shift().split(" ");
const exame = lines.shift();
const media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + parseFloat(n4)) / 10;

if (media >= 7 ){
  return console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`);
}
else if (media < 5){
  return console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`); 
}
else{
  const mediaNova = (media + parseFloat(exame)) / 2;
  if (mediaNova < 5){
    return console.log(`Media: ${media.toFixed(1)}\nAluno em exame.\nNota do exame: ${exame}\nAluno reprovado.\nMedia final: ${mediaNova.toFixed(1)}`); 
  }
  return console.log(`Media: ${media.toFixed(1)}\nAluno em exame.\nNota do exame: ${exame}\nAluno aprovado.\nMedia final: ${mediaNova.toFixed(1)}`); 
}
