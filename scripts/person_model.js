class Persona {
    constructor(name, doc, email, address){
        this.name = name;
        this.doc = doc;
        this.email = email,
        this.address = address
    }
    getData(...data){
        data.forEach( d => { return persona[d] }
        )
    }
    setData(...data){
        data.forEach( (d,i) => {
            let otro_array = ['name','email','doc']
            this.persona[otro_array[i]] = d
        })
    }
}


class Alumno extends Persona{
    constructor(centro, curso, dias, horas){
        super(...arguments);
        this.centro = centro;
        this.curso = curso;
        this.dias = dias;
        this.horas = horas;
    }
}