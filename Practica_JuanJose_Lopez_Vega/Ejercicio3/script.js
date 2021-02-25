document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("enviar").addEventListener("click", formValidado,false);
})

function formValidado(e) {
    borrarError();
    if (validaNombre() && validaApellido() && validaDni() &&validaTelefono()&& validarEdad() && confirm("Pulsa aceptar")) {
        return true
    } else {
        e.preventDefault();
        return false;
    }
}

function validaNombre(){
    var elemento = document.getElementById("nombre");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            mensajeError(elemento, "Debe introducir un nombre");
        }
        if(elemento.validity.patternMismatch){
            mensajeError(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        return false;
    }
    return true;
}

function validaApellido() {
    var elemento = document.getElementById("apellido");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            mensajeError(elemento, "Debe introducir un apellido valido");
        }
        if (elemento.validity.patternMismatch) {
            mensajeError(elemento, "El nombre debe tener entre 2 y 30 carcteres");
        }
        return false
    }
    return true
}
function validaDni() {
    var elemento = document.getElementById("dni");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            mensajeError(elemento,"Debe introducir un numero valido");
        }
        if(elemento.validity.patternMismatch){
            mensajeError(elemento,"El dni son 8 numeros y una letra")
        }
    }
}
function validarTelefono() {
    var elemento = document.getElementById("telefono");
    if(!elemento.checkValidity()){
       if(elemento.validity.valueMissing){
           mensajeError(elemento,"Debe introducir un telefono valido")
       }
       if(elemento.validity.patternMismatch){
           mensajeError(elemento,"El telefono son 9 numeros")
       }
    }
}
function validarEdad() {
    var elemento = document.getElementById("edad");
    if(!elemento.checkValidity()){
       if(elemento.validity.valueMissing){
           mensajeError(elemento,"Debe introducir un telefono valido")
       }
       if(elemento.validity.patternMismatch){
           mensajeError(elemento,"la edad va entre 18 y 100 años")
       }
    }
}

function mensajeError(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function borrarError(){
    var formulario = document.forms["miFormulario"];
    for(var i=0; i<formulario.length; i++){
        formulario.elements[i].className = "";
    }
}