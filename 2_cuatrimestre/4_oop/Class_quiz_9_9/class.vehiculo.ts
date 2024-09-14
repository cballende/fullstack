
export class Vehiculo{

  protected marca:string;
  protected modelo:string;
  protected cilindrada:string;
  protected chasis:string;

  constructor(o){
    this.marca      = o.marca;
    this.modelo     = o.modelo;
    this.cilindrada = o.cilindrada;
    this.chasis     = o.chasis;
  }

  public getMarca():string{
    return this.marca;
  }

  public getModelo():string{
    return this.modelo;
  }

  public getCilindrada():string{
    return this.cilindrada;
  }
  public getChasis():string{
    return this.chasis;
  }

  
  public setMarca(s:string):boolean{
    this.marca=s;
    return this.marca.localeCompare(s) == 0;
  }

  public setModelo(s:string):boolean{
    this.modelo=s;
    return this.modelo.localeCompare(s) == 0;
  }

  public setCilindrada(s:string):boolean{
    this.cilindrada=s;
    return this.cilindrada.localeCompare(s) == 0;
  }

  public setChasis(s:string):boolean{
    this.chasis=s;
    return this.chasis.localeCompare(s) == 0;   
  }
      
  protected toStringB():string{

      let str:string="";
      str=  "Marca:"  +this.getMarca();
      str+= ",Modelo:"+this.getModelo();
      str+= ",Clilindrada:"+this.getCilindrada();
      str+= ",Chasis:"+this.getChasis();
      return str;      

  }
}