import { Motor }  from "./class_motor";

export class Auto {
  //Atributos
  private marca:string;
  private modelo:string;
  private luces:boolean;
  private freno:number;
  private motor:Motor;
  //constructor
  
  constructor(
    mar:string,
    mod:string,
    luc:boolean,
    fre:number,
    mot:Motor){
    this.marca=mar;
    this.modelo=mod;
     this.luces=luc;
     this.freno=fre;
     this.motor=mot;
  }

  //Metodos
  // setters and getters

  public setLuces(b:boolean):boolean{
    this.luces=b;
    return this.luces=b;
  }

  public setFreno(p:number):number{
    this.freno=p;
    return this.freno;
  }

  public arranque():void{
    this.motor.setEncendido(true);
  }

  public apagado():void{
    this.motor.setEncendido(false);
  }
  
  public acelerar():void{
    this.motor.setPotencia(this.motor.getPotencia()+5);
  }

  public desacelerar():void{
    this.motor.setPotencia(this.motor.getPotencia()-5);
  }
  public toString():string{
    let s:string;
    s="Marca:"+this.marca+",Modelo:"+this.modelo+",Luces:"+this.luces+",Freno:"+this.freno+",Motor:"+this.motor.toString();
     return s;
  }
}
