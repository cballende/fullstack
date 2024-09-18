import { Vehiculo }          from "./class.vehiculo";
import { RegistroAutomotor } from "./class.registro";
import { Files }             from "./class.files";
let rLS = require('readline-sync');

let fs = new Files('sesion.txt');
let registro_1:RegistroAutomotor;
let s:string = fs.fnFile("access");
if(s.localeCompare("NOEX")!=0 && s.localeCompare("NOP")!=0){
  s = fs.fnFile("read");
  if(s.length>0){
    let j=JSON.parse( s.toString() );
    if (j[0]!=undefined)
      registro_1 = new RegistroAutomotor(j);
    else{
      fs.fnFile("create");
      registro_1 = new RegistroAutomotor();
    }
  }else
    registro_1 = new RegistroAutomotor();
}else{
  fs.fnFile("create");
  registro_1 = new RegistroAutomotor();
}
let vehiculo_1 = new Vehiculo (
{ marca:"ford",
modelo:"orion",
cilindrada:"2l",
chasis:"007"
});
let vehiculo_2 = new Vehiculo (
{ marca:"renault",
modelo:"R12",
cilindrada:"1.4l",
chasis:"009"
});
let vehiculo_3 = new Vehiculo (
{ marca:"fiat",
modelo:"128",
cilindrada:"1,2l",
chasis:"010"
});
registro_1.agregarVehiculo(vehiculo_1);
registro_1.agregarVehiculo(vehiculo_2);
registro_1.agregarVehiculo(vehiculo_3);

console.log (vehiculo_1.toStringB());
console.log(registro_1.mostrarVehiculos());

let sP:string=rLS.question('Ingrese patente a buscar: ');
console.log(registro_1.buscarVehiculo(sP));

sP=rLS.question('Ingrese patente vehiculo a modificar por vehiculo 3: ');
registro_1.modificarVehiculo(sP,vehiculo_3);
console.log(registro_1.mostrarVehiculos());

sP=rLS.question('Ingrese patente vehiculo a eliminar:');
registro_1.eliminarVehiculo(sP);
console.log(registro_1.mostrarVehiculos());

fs.fnFile('update',registro_1.backupVehiculos());
