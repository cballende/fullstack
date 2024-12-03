import * as a from "./class_animal_factory";

const perro=  a.AnimalFactory.buildAnimal(a.TypeAnimal.DOG);
const gato=   a.AnimalFactory.buildAnimal(a.TypeAnimal.CAT);
const pajaro= a.AnimalFactory.buildAnimal(a.TypeAnimal.BIRT);

perro.hacerSonido();
perro.mover();
gato.hacerSonido();
gato.mover();
pajaro.hacerSonido();
pajaro.mover();