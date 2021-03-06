document.addEventListener('DOMContentLoaded', ()=>{
   // console.log('DOM Cargado!');

});

//Objetos hay tres maneras de definirlos



// 1 definir y crear un objeto simple utilizando un literal
/* 
let persona = {
    nonbre: "alex",
    apellido: "blaga",
    edad: 24,
    email: "alex.claradelrey@gmail.com"
} */

// 2 definir y crear un objeto con la palabra new Object();
/* 
let persona2 = new Object();

persona2.nombre = "alex";
persona2.apellido = "blaga";
persona2.edad = 24;
persona2.email = "alex.claradelrey@gmail.com"; */

// 3 definiendo un constructor del objeto y crear objetos del tipo construido.

/* function Persona(nombre, apellido, edad, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
} */

// sintaxis de acceso a las propiedades de un objeto 
/**
 * objeto.propiedad
 * objeto["propiedad"]
 * objeto[expresion]
*/

// si no conocemos las propiedades de un objeto
// podemos usar un bucle for

/* for(propiedad in persona2){
    console.log(propiedad);
} */

//add una propiedad nueva.

/* console.log("---------");

persona2.telefono = 662011872;

for(propiedad in persona2){
    console.log(propiedad);
} */

//borrar una propiedad de un objeto creado.

/* console.log("---------");

delete persona2.edad;

for(propiedad in persona2){
    console.log(propiedad);
}
console.log("---------");

//objeto con propiedades y funciones/metodos

const persona3 = {
    nombre: "alex",
    apellido: "blaga",
    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    },
    edad: 24
}; */

/* console.log(persona3.nombreCompleto());

console.log("---------"); */



/* function persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.nombreCompleto = ()=>{
        return this.nombre + " " + this.apellido;
    }
}

let Fran = new persona('fran', 'lopez', 21);
let Carlos = new persona('carlos', 'diaz', 43);

Fran.nacionalidad = "Spanish";

Fran.muestraEdad = function(){
    return "Tiene " + this.edad + " anios";
}


console.log(Fran.muestraEdad());

console.log(Fran.nombreCompleto()); */

//prototipado - prototipos <-----

function Persona (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

}

Persona.prototype.muerte = "100";

Persona.prototype.defuncion = function(){
    return "Defuncion en el anio: " + this.muerte;
}


let alan = new Persona('alan', 'turing', 67);

let juanjo = new Persona("juanjo","apellido",54);

juanjo.direccion="calle"
console.log(juanjo)
delete juanjo.direccion;
console.log(juanjo)

console.log(alan.nombre);
console.log(alan.defuncion());


