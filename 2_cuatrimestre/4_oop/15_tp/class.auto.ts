import { Motor }  from "./class.motor";

interface IAuto {
  marca:string;
  modelo:string;
  luces:boolean;
  freno:boolean;
  motor:Motor;
}

export class Auto {
  //Atributos

  private marca:string;
  private modelo:string;
  private luces:boolean;
  private freno:boolean;
  private motor:Motor;
 
  //constructor
  
  constructor(atr:IAuto){

   Object.defineProperties(this.motor,atr.motor);
  }

  //Metodos
  // setters and getters

}
