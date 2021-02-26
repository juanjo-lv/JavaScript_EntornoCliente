document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("enviar").addEventListener("click", formValidado,false);
})

function formValidado(e) {
    borrarError();
    if (validaNombre() && validaApellido() && validaDni() && validaTelefono() && validaEdad() && confirm("Pulsa aceptar")) {
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
        return false
    }
    return true
}
function validaTelefono() {
    var elemento = document.getElementById("telefono");
    if(!elemento.checkValidity()){
       if(elemento.validity.valueMissing){
           mensajeError(elemento,"Debe introducir un telefono valido")
       }
       if(elemento.validity.patternMismatch){
        console.log("ERROR")
        mensajeError(elemento,"El telefono son 9 numeros")
       }
       return false
    }
    return true
}
function validaEdad(){
    var elemento = document.getElementById("edad");
    if(!elemento.checkValidity()){
       if(elemento.validity.valueMissing){
           mensajeError(elemento,"Debes de introducir una edad")
       }
       if(elemento.validity.rangeOverflow){
        mensajeError(elemento,"No puedes superar los 100 años")
       }
       if(elemento.validity.rangeUnderflow){
        mensajeError(elemento,"Tienes que tener minimo 18 años")
       }

       return false
    }
    return true
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