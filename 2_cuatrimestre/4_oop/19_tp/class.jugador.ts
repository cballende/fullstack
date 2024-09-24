import { Persona }  from "./class.persona";

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
    this.goles=gol;
  }
  
  public anotarGol():void{
    console.log("moviendose");
  }

  public obtenerGoles():number{
    console.log("moviendose");
    return 1;
  }

  public obtenerDetalles():string{
    return "algo";
  }
  
}