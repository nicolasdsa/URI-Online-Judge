var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = Math.trunc(A);
var C = (((Math.trunc(A)) - A) * -1) * 100;
var c100 = B / 100;
var r100 = B % 100;

var c50 = r100 / 50;
var r50 = r100 % 50;

var c20 = r50 / 20;
var r20 = r50 % 20;

var c10 = r20 / 10;
var r10 = r20 % 10;

var c5 = r10 / 5;
var r5 = r10 % 5;

var c2 = r5 / 2;
var r2 = r5 % 2;

var m1 = r2 / 1;

var m5 = C / (0.5 * 100);
var r05 = C  % (0.5 * 100) ;

var m25 = r05   / (0.25 * 100) ;
var r25 = r05   % (0.25 * 100) ;

var m10 =  r25 / (0.10 * 100) ;
var r010 = r25 % (0.10 * 100);

var m05 = r010 / (0.05 * 100) ;
var r05 = r010  % (0.05 * 100) ;

var m01 = r05  / (0.01 * 100);

console.log("NOTAS:");
console.log(Math.trunc(c100) + " nota(s) de R$ 100.00");
console.log(Math.trunc(c50) + " nota(s) de R$ 50.00");
console.log(Math.trunc(c20) + " nota(s) de R$ 20.00");
console.log(Math.trunc(c10) + " nota(s) de R$ 10.00");
console.log(Math.trunc(c5) + " nota(s) de R$ 5.00");
console.log(Math.trunc(c2) + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(Math.trunc(m1) + ' moeda(s) de R$ 1.00');
console.log(Math.trunc(m5) + " moeda(s) de R$ 0.50");
console.log(Math.trunc(m25)+ " moeda(s) de R$ 0.25");
console.log(Math.trunc(m10) + " moeda(s) de R$ 0.10");
console.log(Math.trunc(m05) + " moeda(s) de R$ 0.05");
console.log(Math.trunc(m01) + " moeda(s) de R$ 0.01");