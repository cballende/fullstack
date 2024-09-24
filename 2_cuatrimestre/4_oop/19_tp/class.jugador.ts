import { Persona }  from "./class.a_persona";

interface IJugador {
  anotarGol():void,
  obtenerGoles():number,
}

export class  Jugador extends Persona implements IJugador {

  public posiciones:string;
  public numero:number;
  public goles:number;


  constructor(nombre:string,edad:number,pos:string,num:number,gol:number){
    super(nombre,edad);
    this.posiciones=pos;
    this.numero=num;
    this.goles=0;
  }
  
  public anotarGol():void{
    this.goles++;
    console.log("gol");
  }

  public obtenerGoles():number{
    return this.goles;
  }

  public obtenerDetalles():string{
    let s:string= "Nombre:"+this.nombre+" Edad:"+this.edad+" Posición:"+this.posiciones+" Numero:"+this.numero+" Goles:"+this.goles;
    return s;
  }
  
}