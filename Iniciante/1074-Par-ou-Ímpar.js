var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
let verify = parseInt(lines.shift());

let i = 0;
while(i < number){
  if(verify == 0) console.log("NULL");
  else if(verify > 0){
    if(verify % 2 == 0) console.log("EVEN POSITIVE");
    else console.log("ODD POSITIVE");
  }
  else if(verify < 0){
    if(verify % 2 == 0) console.log("EVEN NEGATIVE");
    else console.log("ODD NEGATIVE");
  }
  i++;
  verify = parseInt(lines.shift());
}
