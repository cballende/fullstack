
import { Jugador }         from "./class_jugador";
import { DirectorTecnico } from "./class_director_tecnico";
import { MedicoDeportivo } from "./class_medico_deportivo";

export class Seleccion {
  public jugadores:Jugador[];
  public cuerpoTecnico: DirectorTecnico[];
  public cuerpoMedico: MedicoDeportivo[];

  constructor(){
    this.jugadores=[];
    this.cuerpoTecnico=[];
    this.cuerpoMedico= [];
  }
 
  public agregarJugador(ply:Jugador): (void) {
    this.jugadores.push(ply);
    console.log("Agregar");
  }

  public quitarJugador(num:number): (void) {
    let i:number=this.jugadores.findIndex(myFuction);

    this.jugadores.splice(i, 1);

    function myFuction(value:Jugador){
      return value.numero==num;
    }
    console.log("Quitas");
  }

  public editarJugador(num:number,ply:Jugador): (void) {
    let i:number=this.jugadores.findIndex(myFuction);
    
    this.jugadores[i]=ply;

    function myFuction(value:Jugador){
      return value.numero==num;
    }
    console.log("Editar");
  }

  public listarJugadores(): (string) {
    let s:string="";
    this.jugadores.forEach(myFuction);
    function myFuction(value:Jugador){
      s+=value.obtenerDetalles()+"\n";
    }
    return s;
    console.log("Listar");
  }

}

