import { Motor } from "./class.motor";
import { Auto } from "./class.auto";

let m={
  marca:"Deuz",
  modelo:"4000",
  cilindrada:"50",
  encendido:false,
  potencia:0
};

let mot:Motor= new Motor(m);
let aut:Auto= new Auto("Jhon Deer","Pampa",false, 0, mot);

console.log(mot.toString());
console.log(aut.toString());

