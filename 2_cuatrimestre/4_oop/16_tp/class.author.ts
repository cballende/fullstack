import { Libro } from "./Libro";

export class Autor{
    //Atributos
    private nombre:string;
    private libros:Libro[];
    private fechaNacimiento:Date;

    //Contructor
    constructor(nombre:string,fechaNacimiento:Date){
        this.nombre = nombre;
        this.fechaNacimiento=fechaNacimiento;
        this.libros = [];
    }
    
    //Metodos
    getNombre():string{
        return this.nombre;
    }

    getFechaNacimiento():Date{
        return this.fechaNacimiento;
    }

    getLibros():Libro[]{
        let copiaLibros:Libro[] = [];

        this.libros.forEach(libro => {
            let copiaLibro:Libro = new Libro(libro.getTitulo(),libro.getGenero(),libro.getAutor(),libro.getFechaLanzamiento(),libro.getEditorial(),libro.getPrecio());
            copiaLibros.push(copiaLibro);
        });

        return copiaLibros;
    }

    getLibro(){

    }

    addLibro(libro:Libro){
        this.libros.push(libro);
    }

}
