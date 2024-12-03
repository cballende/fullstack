import { Animal } from "./class_i_animal";
import { Gato } from "./class_gato";
import { Pajaro } from "./class_pajaro";
import { Perro } from "./class_perro";

export enum TypeAnimal{
  DOG,
  CAT,
  BIRT,
}

export class AnimalFactory{

  public static buildAnimal(ptypeAnimal:TypeAnimal):Animal{
    switch(ptypeAnimal){
      case TypeAnimal.DOG:
        return new Perro("guau","perruno");
      break;
      case TypeAnimal.CAT :
        return new Gato("miau","gaturro");
      break;
      case TypeAnimal.BIRT:
        return new Pajaro("pio","vuelo");
      break;
      default:
        return new Perro("guau","perruno");
      break;
    }
  }
}