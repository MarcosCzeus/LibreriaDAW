export class CatalogoLibros{
    // img?: File;
    titulo: string;
    idLibro?: string;
    nombre: string;
    Precio: string;
    Categoria: string;

    constructor(titulo:string, nombre:string, Precio: string, Categoria: string){
        this.titulo = titulo;
        this.nombre = nombre;
        this.Precio = Precio;
        this.Categoria = Categoria;
    }
}


export interface Libro{
    id:number,
    titulo:string,
    autor:string,
    categoria:string,
    precio:number
}