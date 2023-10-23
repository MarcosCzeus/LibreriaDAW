export class CatalogoAutores{
    // img?: File;
    idAutor?: string;
    nombre: string;
    apellido: string;
    nacio: string;
    murio: string;

    constructor( nombre:string,apellido: string, nacio: string, murio: string){
        this.nombre = nombre;
        this.apellido= apellido;
        this.nacio = nacio;
        this.murio = murio;
    }
}
