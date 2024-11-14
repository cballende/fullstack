import { Persona }  from "./class_a_persona";


export class DirectorTecnico extends Persona {

  public nivelDeExperiencia:string;

  constructor(nombre:string,edad:number,lev:string){
    super(nombre,edad);
    this.nivelDeExperiencia=lev;
  }
     
  public obtenerDetalles():string{
    let s:string= " Expertiz:"+this.nivelDeExperiencia+" Nombre:"+this.nombre+" Edad:"+this.edad;
    return s;
  }
  
}