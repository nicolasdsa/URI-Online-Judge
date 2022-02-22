var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
let [a, b, c] = lines.shift().split(" ");
let i = 0;

while(i < number){
  let media = ((a * 2)+ (b * 3) + (c * 5)) / 10;
  console.log(media.toFixed(1));
  i++;
  [a, b, c] = lines.shift().split(" ");
}
