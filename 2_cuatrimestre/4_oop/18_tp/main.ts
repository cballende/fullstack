import { Animal }  from "./class.animal";
import { Cat,Dog } from "./class.pets";

let mish:Cat = new Cat();
let picha:Dog = new Dog();

mish.emitirSonido();
mish.moverse();

picha.emitirSonido();
picha.moverse();