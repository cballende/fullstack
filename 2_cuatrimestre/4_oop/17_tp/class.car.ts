import { Vehiculo } from "./class.vehiculo";

export class Auto extends Vehiculo{

    protected ejes:string;

    constructor(v){

        let obj ={"marca":v.marca,
                 "modelo":v.modelo,
                 "cilindrada":v.cilindrada,
                 "chasis":v.chasis
                 };
        super(obj);
        this.ejes = v.ejes;
    }

    getEjes():string{

        return this.ejes;

    }
    // this toString replaces the toStringB from vehiculo
    //public override toString(): string {
    public toString():string{

      return this.toStringB()+",Ejes:"+this.ejes+this.marca;
  }

}