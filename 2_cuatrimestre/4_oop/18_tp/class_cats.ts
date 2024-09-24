
import { Animal } from "./class_animal";

export class Cat extends Animal {
  constructor(){
    super("cat");
  }
 
  public emitirSonido(): (void) {
    console.log("¡MIAU!");
  }
}
