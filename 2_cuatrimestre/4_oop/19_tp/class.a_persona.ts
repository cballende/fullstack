

export abstract class Persona {
  public nombre:string;
  public edad:number;
  
  constructor(nom:string, edad:number){
    this.nombre=nom;
    this.edad=edad;
  }

  public abstract obtenerDetalles():string;

}

