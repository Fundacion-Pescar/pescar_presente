class Aplicacion {
    // Atributos
    id;
    // Metodos()
    get(...args){
        args.forEach( arg => this[arg] )   
    }
    set(...args){
        args.forEach( (arg,i) => this[Object.keys(this)[i]] = arg )   
    }
    put(prop,arg){
        this[prop] = arg;
    }
    del(prop){
        this[prop] = undefined;
    }
}
class Persona extends Aplicacion{
    name;
    document;
    email;
    address;
}
export class Alumno extends Persona{
    centro;
    curso;
    dias;
    horas;
}