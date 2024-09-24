import { Author } from "./class_author";

export class Book{
    //Atributos
    private titulo:string;
    private autor:Author;
    private isbm:string;

   //Constructor
    constructor(titulo:string,autor:Author,isbm:string){
        this.titulo = titulo;
        this.autor = autor;
        this.isbm = isbm;
    }

    //Metodos
    //PUBLIC
    public getTitulo():string{
        return this.titulo;
    }

    public getAutor():Author{
        return this.autor;
    }

    public getISBM():string{
        return this.isbm;
    }

}