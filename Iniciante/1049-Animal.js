var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let especie = lines.shift().trim();

if(especie == "vertebrado"){
  especie = lines.shift().trim();
  if(especie == "ave"){
    especie = lines.shift().trim();
    if(especie == "carnivoro"){
      console.log("aguia");
    }
    else{
      console.log("pomba");
    }
  }
  else{
    especie = lines.shift().trim();
    if(especie == "onivoro"){
      console.log("homem");
    }
    else{
      console.log("vaca");
    }
  }
}
else{
  especie = lines.shift().trim();
  if(especie == "inseto"){
    especie = lines.shift().trim();
    if(especie == "hematofago"){
      console.log("pulga");
    }
    else{
      console.log("lagarta");
    }
  }
  else{
    especie = lines.shift().trim();
    if(especie == "hematofago"){
      console.log("sanguessuga");
    }
    else{
      console.log("minhoca")
    }
  }
}

