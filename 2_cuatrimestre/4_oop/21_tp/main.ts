import a from "./class_animal_factory";

const perro=  a.AnimalFactory.buildAnimal(a.TypeAnimal.PERRO);
const gato=   a.AnimalFactory.buildAnimal(a.TypeAnimalGATO);
const pajaro= a.AnimalFactory.buildAnimal(a.TypeAnimalPAJARO);

