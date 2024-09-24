
import { Animal } from "./class_animal";


export class Dog extends Animal {
  constructor(){
    super("dog");
  }
 
  public emitirSonido(): (void) {
    console.log("¡GUAU!");
  }
}