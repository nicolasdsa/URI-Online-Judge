var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const number =  lines.shift();

for (let i = 1; i <= (number * 4); i += 4){
  console.log(`${i} ${i + 1} ${i + 2} PUM`);
};