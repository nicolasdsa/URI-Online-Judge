var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


const [a, b, c, d, e] = lines.shift().trim().split(" ");


if(d == 0 && e == 0){
    if(a == "1"){
        (parseInt(b) + parseInt(c)) % 2 == 0 ? console.log("Jogador 1 ganha!") : console.log("Jogador 2 ganha!");
    }
    else{
        (parseInt(b) + parseInt(c)) % 2 != 0 ? console.log("Jogador 1 ganha!") : console.log("Jogador 2 ganha!");
    }
}

else if((d == 1 && e == 0) || (d == 0 && e == 1)){
    console.log("Jogador 1 ganha!");
}

else if(d == 1 && e == 1){
    console.log("Jogador 2 ganha!");
}