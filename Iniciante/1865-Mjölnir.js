var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift();
let heroes = lines.shift().split(" ");
let i = 0;

while(i < number){
  if(heroes[0] == 'Thor'){
    console.log("Y");
  }
  else{
    console.log("N");
  }
  heroes = lines.shift().split(" ");
  i++;
}