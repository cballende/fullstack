/* Adapter */

import { ReproductorMusica } from "./class_i_reproducor_musica";
import { Vinilo } from "./class_vinilo";

export class AdaptadorReproductor implements ReproductorMusica {
  private vinilo:Vinilo;
  private status:boolean;

  constructor(pvin:Vinilo){
    this.vinilo=pvin;
    this.status=false;
  }

  public reproducir():void{
    if (!this.status){
      console.log("Reproduciendo");
      this.vinilo.colocarAguja();
      this.status=true;
    }
  }

  public detener():void{
    if (this.status){
      console.log("Deteniendo");
      this.vinilo.levantarAguja();
      this.status=false;
    }
  }
}
