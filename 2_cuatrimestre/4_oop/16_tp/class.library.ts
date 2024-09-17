import { Author } from "./class.author";
import { Book } from "./class.book";

export class Library{
    //Atributes
    private nameLibrary:string;
    private address    :string;
    private phone      :number;
    private listBooks  :Book[];
    //constructor
    constructor(name:string,add:string,pho:number){
        this.nameLibrary = name;
        this.address = add;
        this.phone = pho;
        this.listBooks= [];
    }

    //Metothods
    // Setters and getters
    // PRIVATE

    private getNameLib():string{
        return this.nameLibrary;
    }
    private getAddress():string{
        return this.address;
    }
    private getPhone():number{
        return this.phone;
    }

    private addBook(titulo:string,autor:Author,isbm:string):boolean{
        this.listBooks.push(new Book(titulo,autor,isbm));
        return true;
    }

    private deleteBook(i:number):boolean{
        this.listBooks =this.listBooks.splice(i,1);
        return true;
    }

    private findBookByISBM(s:string):number{
        return this.listBooks.findIndex(miFunc);

        function miFunc(value: Book): (boolean) {
            return (value.getISBM().localeCompare(s) == 0);
        }
    }

    private findBookByName(s:string):number{
        return this.listBooks.findIndex(miFunc);

        function miFunc(value: Book): (boolean) {
            return (value.getTitulo().localeCompare(s) == 0);
        }
    }

    // PUBLIC

    public agregarLibro(titulo:string,autor:Author,isbm:string ){
        let flag:Boolean;
        if (!(this.findBookByISBM(isbm)>=0)){
            flag= this.addBook(titulo,autor,isbm);
            if (flag )
                return "Added";
            return "Failed to Add";
        }
        return "The book already exist";
    }

    public mostrarLibros():string{
        return this.toSting();
    }

    public buscarLibroByAuthor(s:string):Book[]{
        return this.listBooks.filter(libro => {
            return (libro.getAutor().getNombre().localeCompare(s)==0);
        });
    }

    public buscarLibroByName(s:string):Book[]{
        return this.listBooks.filter(libro => {
            return (libro.getTitulo().localeCompare(s)==0);
        });
    }

    public eliminarLibroByName(s:string):string{
        let flag:Boolean;
        if (!(this.findBookByName(s)>=0)){
            flag= this.deleteBook(this.findBookByName(s));
            if (flag )
                return "Deleted";
            return "Failed to delete";
        }
        return "The book not exist";
    }

    public toSting():string{
        let s:string="";
        this.listBooks.forEach(libro => {
            s+= ">Nombre:"+libro.getTitulo()+", Autor:"+libro.getAutor()+", ISBM:"+libro.getISBM()+"\n";
        });
        return s;
    }

}