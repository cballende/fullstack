import { Vinilo } from "./class_vinilo";
import { AdaptadorReproductor } from "./class_reproductor_adapter";


let winco:Vinilo=new Vinilo("winco50");
let reproductor:AdaptadorReproductor =new AdaptadorReproductor(winco);
reproductor.reproducir();
reproductor.detener();