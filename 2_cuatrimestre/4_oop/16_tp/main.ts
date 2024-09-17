import { Author } from "./class.author";
import { Book } from "./class.book";
import { Library } from "./class.library";

let libreria_1 = new Library("Papiros","Av Siempe Viva 32",115001010);

let autor1 = new Author("Jame Jones",new Date("1918-03-16"));
let autor2 = new Author("J.R.R Tolkien",new Date("1890-04-16"));

let libro1 = new Book("Delgada linea roja",autor1,"2000-03-16");
let libro2 = new Book("Silbido",autor1,"1999-03-16");
let libro3 = new Book("Simarillon",autor2,"2000-04-16");
let libro4 = new Book("Los hijos de Hurin",autor2,"2000-05-16");


libreria_1.agregarLibro("Delgada linea roja",autor1,"2000-03-16");
libreria_1.agregarLibro("Silbido",autor1,"2000-03-17");

libreria_1.agregarLibro("Simarillon",autor2,"2000-03-18");
libreria_1.agregarLibro("Los hijos de Húrin",autor2,"2000-03-19");

console.log(libreria_1.buscarLibroByAuthor(autor1.getNombre()));
console.log(libreria_1.buscarLibroByName(libro1.getTitulo()) );
console.log(libreria_1.mostrarLibros());

