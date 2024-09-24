
import { Jugador } from "./class.jugador";
import { DirectorTecnico } from "./class.director_tecnico";
import { MedicoDeportivo } from "./class.medico_deportivo";

export class Seleccion {
  public jugadores:Jugador[];
  public cuerpoTecnico: DirectorTecnico[];
  public cuerpoMedico: MedicoDeportivo[];

  constructor(){
    this.jugadores=[];
    this.cuerpoTecnico=[];
    this.cuerpoMedico= [];
  }
 
  public agregarJugador(): (void) {
    console.log("¡MIAU!");
  }

  public quitarJugador(): (void) {
    console.log("¡MIAU!");
  }

  public editarJugador(): (void) {
    console.log("¡MIAU!");
  }

  public listarJugadores(): (void) {
    console.log("¡MIAU!");
  }

}

