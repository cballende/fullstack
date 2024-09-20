
import { Animal } from "./class.animal";

export class Cat extends Animal {
  constructor(){
    super("cat");
  }
 
  public emitirSonido(): (void) {
    console.log("¡MIAU!");
  }
}

export class Dog extends Animal {
  constructor(){
    super("dog");
  }
 
  public emitirSonido(): (void) {
    console.log("¡GUAU!");
  }
}