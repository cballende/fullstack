import { Autor } from "./Autor";
import { Libro } from "./Libro";

let autor1 = new Autor("Garcia Marquez",new Date("2018-03-16"));
let autor2 = new Autor("J.R rowling",new Date("2018-03-16"));

let libro1 = new Libro("Cien anios de Soledad","drama",autor1,new Date("2000-03-16"),"santillana");
let libro2 = new Libro("El amor en tiempos de colera","drama",autor1,new Date("1999-03-16"),"santillana");
let libro3 = new Libro("Harry Potter y la piedra Filosofal","drama",autor2,new Date("2000-03-16"),"santillana");
let libro4 = new Libro("Harry Potter y la camara secreta","drama",autor1,new Date("2000-03-16"),"santillana");

autor1.addLibro(libro1);
autor1.addLibro(libro2);

autor2.addLibro(libro3);
autor2.addLibro(libro4);


