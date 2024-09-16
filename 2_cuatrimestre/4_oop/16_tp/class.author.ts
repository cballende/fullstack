import { Book } from "./class.book";

export class Author{
    //Atributos
    private nombre:string;
    private libros:Book[];

    //Constructor
    constructor(nombre:string,fechaNacimiento:Date){
        this.nombre = nombre;
        this.libros = [];
    }
    
    //Metodos
    public getNombre():string{
        return this.nombre;
    }

    public getLibros():Book[]{
        let cpLibros:Book[] = [];
        this.libros.forEach(libro => {
            let cpLibro:Book = new Book(libro.getTitulo(),libro.getAutor(),libro.getISBM());
            cpLibros.push(cpLibro);
        });
        return cpLibros;
    }

    public addLibro(libro:Book){
        this.libros.push(libro);
    }

}
