
interface IVeh {
  marca:string,
  modelo:string,
  cilindrada:string,
  chasis:string
}

export class Vehiculo{

  protected marca:string;
  protected modelo:string;
  protected cilindrada:string;
  protected chasis:string;

  constructor(o:IVeh){
    this.marca      = o.marca;
    this.modelo     = o.modelo;
    this.cilindrada = o.cilindrada;
    this.chasis     = o.chasis;
  }

  protected getMarca():string{
    return this.marca;
  }

  protected getModelo():string{
    return this.modelo;
  }

  protected getCilindrada():string{
    return this.cilindrada;
  }
  protected getChasis():string{
    return this.chasis;
  }

  
  protected setMarca(s:string):boolean{
    this.marca=s;
    return this.marca.localeCompare(s) == 0;
  }

  protected setModelo(s:string):boolean{
    this.modelo=s;
    return this.modelo.localeCompare(s) == 0;
  }

  protected setCilindrada(s:string):boolean{
    this.cilindrada=s;
    return this.cilindrada.localeCompare(s) == 0;
  }

  protected setChasis(s:string):boolean{
    this.chasis=s;
    return this.chasis.localeCompare(s) == 0;   
  }
      
  public toStringB():string{

      let str:string="";
      str=  " Marca:"  +this.getMarca();
      str+= ", Modelo:"+this.getModelo();
      str+= ", Clilindrada:"+this.getCilindrada();
      str+= ", Chasis:"+this.getChasis();
      return str;
  }
}