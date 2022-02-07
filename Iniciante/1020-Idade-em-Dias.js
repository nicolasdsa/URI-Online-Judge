var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const idade = parseInt(lines.shift());

console.log(`${Math.trunc(idade / 365)} ano(s)\n${Math.trunc((idade % 365) / 30)} mes(es)\n${Math.trunc((idade % 365) % 30)} dia(s)`);