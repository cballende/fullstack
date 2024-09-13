import { Auto }     from "./class.car";
import { Camion }   from "./class.camion";
import { Moto }     from "./class.moto";
import { Vehiculo } from "./class.vehiculo";

interface Mueble {
  patente:string,
  vehiculo:Vehiculo
}
export class RegistroAutomotor {
  private muebles:Mueble[];

  constructor(){
    this.muebles=[];
  }

  private getMueble():(Vehiculo|undefined){
    return;
  }

  private setMueble(){
    
  }

  private updateMueble(){
    
  }

  private clearMueble(){
    
  }
  
  public agregarVehiculo(vehiculo:Vehiculo):void{
    let obj:Mueble;
    let toTrunc = (Math.random() * 10000000);
        obj.patente = toTrunc.toFixed(0).toString();
        obj.vehiculo = vehiculo;
        this.muebles.push(obj);
  }

  public buscarVehiculo(patente:string):(Vehiculo|undefined){
    return this.getMueble(patente); 
  }

  public modificarVehiculo(patente:string,datosActualizados:Partial):void{
    if (this.getMueble(patente)){
      this.updateMueble(patente);
    }
  }

  public eliminarVehiculo(patente:string):void{
    if (this.getMueble(patente)){
      this.clearMueble(patente);
    }
  }

  public mostrarVehiculos():string{
    
  }

}