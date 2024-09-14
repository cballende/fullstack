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

  private getMuebleLgth():(number){
    return this.muebles.length;
  }
  
  
  private getMueble():(Vehiculo|undefined){
    return;
  }
  
  private setMueble(ix:number){
    
  }
  
  private putMueble(obj:Mueble){
    this.muebles.push(obj);
  }

  private clearMueble(idx:number):boolean{
    if(idx>=0){
      this.muebles = this.muebles.splice(idx,1);
      return true;
    }
    return false;
  }

  private updateMueble(s:string,d:Vehiculo):boolean{

    return isNaN (this.muebles.filter(miFunc)[0]);

    function miFunc(value: Mueble): (boolean) {

      if (value.patente.localeCompare(s) == 0){
        if ( value.vehiculo.getChasis().localeCompare(d.getChasis()) != 0 )
          value.vehiculo.setChasis(d.getChasis();
        if ( value.vehiculo.getMarca().localeCompare(d.getMarca()) != 0 )
          value.vehiculo.setMarca(d.getMarca();
        if ( value.vehiculo.getModelo().localeCompare(d.getModelo()) != 0 )
          value.vehiculo.setModelo(d.getModelo();
        if ( value.vehiculo.getCilindrada().localeCompare(d.getCilindrada()) != 0 )
          value.vehiculo.setCilindrada(d.getCilindrada();
        return (true);
      }
      return (false);
    }
  }


  private searchMueble(s:string):(Mueble){
    return this.muebles.filter(miFunc)[0];
    function miFunc(value: Mueble): (boolean) {
      return (value.patente.localeCompare(s) == 0);
    }
  }


  /*INTERFACE : public methods */
  public agregarVehiculo(vehiculo:Vehiculo):void{
    let obj:Mueble;
    let toTrunc:number;
    let sNu:string;
        do{
          toTrunc = Math.random() * 10000000;
          sNu=toTrunc.toFixed(0).toString();
        }while(!this.buscarVehiculo(sNu));
        obj.patente  = sNu;
        obj.vehiculo = vehiculo;
        this.putMueble(obj);
  }

  public buscarVehiculo(patente:string):(Mueble|undefined){
    return this.searchMueble(patente);    
  }

  public modificarVehiculo(s:string,d:Vehiculo):void{
    if (this.searchMueble(s)){
      this.updateMueble(s,d);
    }
  }

  public eliminarVehiculo(s:string):void{
    if (this.searchMueble(s)){
      this.clearMueble(i);
    }
  }

  public mostrarVehiculos():string{
    
  }

}