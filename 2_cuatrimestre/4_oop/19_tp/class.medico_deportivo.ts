import { Persona }  from "./class.a_persona";


export class  MedicoDeportivo extends Persona{

  public especialidad:string;

  constructor(nombre:string,edad:number,spe:string){
    super(nombre,edad);
    this.especialidad=spe;
  }
  
  public obtenerDetalles():string{
    let s:string= " Especialidad:"+this.especialidad+" Nombre:"+this.nombre+" Edad:"+this.edad;
    return s;
  }
  
}