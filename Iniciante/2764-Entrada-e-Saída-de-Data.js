var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [day, month, year] = lines.shift().trim().split("/");

console.log(`${month}/${day}/${year}\n${year}/${month}/${day}\n${day}-${month}-${year}`);

