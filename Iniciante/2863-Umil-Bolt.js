var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length != 0){

    const number = parseInt(lines.shift());

    for(let i = 0; i < number; i++){

      let record = parseFloat(lines.shift());
      
      if(i == 0){
         temp = record;
      }

        if(record < temp){
          temp = record;
        }         
    }

    console.log(temp.toFixed(2));

    if(lines.length == 1){
        break;
    }

}