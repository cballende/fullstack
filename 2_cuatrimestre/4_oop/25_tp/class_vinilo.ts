export class Vinilo{
  protected device:string;
  constructor(dmodelo:string){
    this.device=dmodelo;
  }
  public colocarAguja():void{
    console.log("Puando");
  }
  public levantarAguja():void{
    console.log("Despuando");
  }
}