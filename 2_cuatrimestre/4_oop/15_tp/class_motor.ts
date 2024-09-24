
interface IMotor {
  marca:string;
  modelo:string;
  cilindrada:string;
  encendido:boolean;
  potencia:number
}

export class Motor {

  //Atributos

  private marca:string;

  private modelo:string;

  private cilindrada:string;
  
  private encendido:boolean;

  private potencia:number;

  //constructor
  
  constructor(atr:IMotor){ 
    this.marca=atr.marca; 
    this.modelo=atr.modelo;
    this.cilindrada=atr.cilindrada;
    this.encendido=atr.encendido;
    this.potencia=atr.potencia;
  }

  //Metodos
  // setters and getters
  
  public setEncendido(b:boolean):boolean{
    this.encendido=b;
    return this.encendido;
  }

  public setPotencia(p:number):number{
    this.potencia=p;
    return this.potencia;
  }

  public getPotencia():number{
    return this.potencia;
  }

  public getMarca():string{
    return this.marca;
  }

  public  getModelo():string{
    return this.modelo;
  }

  public getCilindrada():string{
    return this.cilindrada;
  }

  public getEncendido():boolean{
    return this.encendido;
  }
  
  public toString():string{
    return "Marca:"+this.marca+",Modelo:"+this.modelo+",Cilindrada:"+this.cilindrada+",Encendido:"+this.encendido+",Potencia:"+this.potencia;
  }

}