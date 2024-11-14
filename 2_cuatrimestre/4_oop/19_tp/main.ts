import { DirectorTecnico }     from "./class_director_tecnico";
import { MedicoDeportivo }     from "./class_medico_deportivo";
import { Jugador }             from "./class_jugador";
import { Seleccion }           from "./class_seleccion";

//let rLS = require('readline-sync');

let jug_1:Jugador = new Jugador (
"Pata Dura",
25,
"Medio campo",
4,
0
);

let jug_2:Jugador = new Jugador (
  "Juan Calesita",
  21,
  "Central",
  5,
  1
);

let tec_1:DirectorTecnico = new DirectorTecnico (
  "Pepe Zarasa",
  45,
  "charlatan"
 );
let med_1:MedicoDeportivo = new MedicoDeportivo (
  "Narcizo Celasatra",
  60,
  "podologo"
);

let selec_1 = new Seleccion ();

selec_1.agregarJugador(jug_1);
selec_1.agregarJugador(jug_2);
console.log (selec_1.listarJugadores());
selec_1.editarJugador(jug_1.numero,jug_2);
console.log (selec_1.listarJugadores());
selec_1.quitarJugador(jug_1.numero);
console.log (selec_1.listarJugadores());
