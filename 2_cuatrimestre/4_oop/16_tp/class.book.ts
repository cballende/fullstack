import { Autor } from "./Autor";

export class Libro{
    private titulo:string;
    private genero:string;
    private autor:Autor;
    private precio:number;
    private fechaLanzamiento:Date;
    private editorial:string;

   constructor(titulo:string,genero:string,autor:Autor,fechaLanzamiento:Date,editorial:string,precio:number=0){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.fechaLanzamiento = fechaLanzamiento;
        this.editorial = editorial;
        this.precio = precio;
    }

    getTitulo():string{
        return this.titulo;
    }

    getGenero():string{
        return this.genero;
    }
    getAutor():Autor{
        return this.autor;
    }
    getFechaLanzamiento():Date{
        return this.fechaLanzamiento;
    }
    getEditorial():string{
        return this.editorial;
    }
    getPrecio():number{
        return this.precio;
    }

    setPrecio(precio:number){
        this.precio = precio;
    }

    setEditorial(editorial:string){
        this.editorial = editorial;
    }


}