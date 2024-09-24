import { Vehiculo } from "./class_vehiculo";

export class Camion extends Vehiculo{

    private ejes:string;
    private tara:string;


    constructor(v){

      let obj ={"marca":v.marca,
                "modelo":v.modelo,
                "cilindrada":v.cilindrada,
                "chasis":v.chasis
                };
      super(obj);
      this.ejes = v.ejes;
      this.tara = v.tara;

    }

    getEjes():string{

      return this.ejes;

    }

    getTara():string{

      return this.tara;

    }
    
    public toString():string{
      return this.toStringB()+",Ejes:"+this.ejes+",Tara:"+this.tara;
  }

}