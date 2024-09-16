//import { Auto }     from "./class.car";
//import { Camion }   from "./class.camion";
//import { Moto }     from "./class.moto";
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

  /*INER METHODs : Private */

  private getMuebleLgth():(number){
    return this.muebles.length;
  }
    
  private getMueble(i:number=-1):(Mueble){
    let o={marca:"",modelo:"",cilindrada:"",chasis:""};
    let obj:Mueble= { patente: "",vehiculo: new Vehiculo( o )};
    if (i>=0 && i<this.getMuebleLgth())
      Object.assign(obj,this.muebles[i]);
    return obj;
      
  }
  
  private setMueble(i:number=-1,obj:Mueble):(void){
    if (i>=0 && i<this.getMuebleLgth())
      Object.assign(this.muebles[i],obj);
  }

  private putMueble(obj:Mueble){
    this.muebles.push(obj);
  }

  private deleteMueble(i:number=-1):boolean{
    if (i>=0 && i<this.getMuebleLgth()){
      this.muebles = this.muebles.splice(i,1);
      return true;
    }
    return false;
  }

  private updateMueble(i:number=-1,d:Vehiculo):boolean{
    if (i>=0 && i<this.getMuebleLgth()){
      Object.assign(this.muebles[i].vehiculo,d);
      return true;
    }
    return false;
  }

  private searchMueble(s:string):(Mueble){
    return this.muebles.filter(miFunc)[0];
    function miFunc(value: Mueble): (boolean) {
      return (value.patente.localeCompare(s) == 0);
    }
  }

  private findMueble(s:string):(number){
    return this.muebles.findIndex(miFunc);
    function miFunc(value: Mueble): (boolean) {
      return (value.patente.localeCompare(s) == 0);
    }
  }

  /*INTERFACE : public methods */
  public agregarVehiculo(v:Vehiculo):void{

    let o={marca:"",modelo:"",cilindrada:"",chasis:""};
    let obj:Mueble= { patente: "",vehiculo: new Vehiculo( o )};

    let toTrunc:number;
    let sNu:string;
        do{
          toTrunc = Math.random() * 10000000;
          sNu=toTrunc.toFixed(0).toString();
        }while(!this.buscarVehiculo(sNu));
        obj.patente  = sNu;
        obj.vehiculo = v;
        this.putMueble(obj);
  }

  public buscarVehiculo(patente:string):(Mueble|undefined){
    return this.searchMueble(patente);
  }

  public modificarVehiculo(s:string,d:Vehiculo):void{
    let idx:number =this.findMueble(s);
    if (idx>=0 ){
      this.updateMueble(idx,d);
    }
  }

  public eliminarVehiculo(s:string):void{
    let idx:number =this.findMueble(s);
    if (idx>=0){
      this.deleteMueble(idx);
    }
  }

  public mostrarVehiculos():string{
    let i:number;
    let s:string="";
    
    for(i=0; i<this.getMuebleLgth();i++){
      s=s+"Patente:"+this.getMueble(i).patente+","+this.getMueble(i).vehiculo.toStringB()+"/n";
    }
    return s;
  }
}