import { Alumno } from "./person_model.js";
document.addEventListener('DOMContentLoaded', () => {
    // Instancia de la Clase (Objeto)
    let alumno = new Alumno;
    // Metodo de definicion Propiedades
    alumno.set(
        1,
        'cristian', 
        '35336446', 
        'cristiandracedo@hotmail.com',
        'Calle falsa 123',
        'EducacionIT',
        'Javascript Desarrollador Avanzado',
        'lunes a viernes',
        '10hs - 22hs'
    );
    // Metodo de Actualizacion (propiedad, valor)
    alumno.put(
        'name',
        'Racedo Cristian Damian'
    );
    // Metodo de eliminacion
    alumno.del('address');
    // Resultado
    console.log(alumno);
}   );