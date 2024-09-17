import { Vehiculo } from "./class.vehiculo";

export class Moto extends Vehiculo{

    private ejes:string;
    private ruedas:string;

    constructor(v){

        let obj ={"marca":v.marca,
                 "modelo":v.modelo,
                 "cilindrada":v.cilindrada,
                 "chasis":v.chasis
                 };
        super(obj);
        this.ejes = v.ejes;
        this.ruedas = v.ruedas;

    }

    private getEjes():string{
        return this.ejes;
    }

    private getRuedas():string{
      return this.ruedas;
    }
    public toString():string{
      return this.toStringB()+",Ejes:"+this.ejes+",Ruedas:"+this.ruedas;
  }

}