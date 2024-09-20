
interface IAnimal {
  moverse():void,
  emitirSonido():void,
}

export abstract class  Animal implements IAnimal{

  protected name:string;

  constructor(s:string){
    this.name  = s;
  }
  
  public moverse():void{
    console.log("moviendose");
  }
  public abstract emitirSonido():void;
  
}