import { Animal } from "./class_i_animal";

export class Pajaro implements Animal{

  private sound:string;
  private movement:string;

  constructor(psound:string,pmovement:string){
    this.sound=psound;
    this.movement=pmovement;
  }

  public hacerSonido():string{
    console.log(this.sound);
    return this.sound;
  }
  public mover():string{
    console.log(this.movement);
    return this.movement;
  }

}