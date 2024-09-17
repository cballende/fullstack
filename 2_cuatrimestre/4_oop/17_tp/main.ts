import { Vehiculo } from  "./class.vehiculo";
import { RegistroAutomotor } from "./class.registro";
import { Files }    from "./class.files";

let fs = new Files('sesion.txt');
let registro_1:RegistroAutomotor;
/* 
//let s:string = fs.fnFile("read");
//let m:[]=[];
if(s.localeCompare("NOP")!=0){
  let j=JSON.parse(s);
  m.push(j);
  registro_1 = new RegistroAutomotor(m);
}else{
 }*/
registro_1 = new RegistroAutomotor();

