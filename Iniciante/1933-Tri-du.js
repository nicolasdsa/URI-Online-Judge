var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b] = lines.shift().trim().split(" ");

if(a == b){
    console.log(a);
}
else{
    parseInt(a) > parseInt(b) ? console.log(a) : console.log(b);
}