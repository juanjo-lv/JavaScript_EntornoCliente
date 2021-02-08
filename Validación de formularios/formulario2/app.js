window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre(){
    var elemento = document.getElementById("nombre");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento, "Debe introducir un nombre");
        }

        if(elemento.validity.patternMismatch){
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validaEdad(){
    var elemento = document.getElementById("edad");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento, "Debe introducir su edad");
        }
        if(elemento.validity.rangeOverflow){
            error2(elemento, "Su edad debe ser menor que 100 años");
        }
        if(elemento.validity.rangeUnderflow){
            error2(elemento, "Su edad debe ser mayor que 18 años");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validaTelefono(){
    var elemento = document.getElementById("telefono");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento, "Debe introducir un teléfono");
        }
        if(elemento.validity.patternMismatch){
            error2(elemento, "El telefono debe tener 9 cifras")
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validar(e){
    borrarError();
    if(validaNombre() && validaEdad() && validaTelefono() && confirm("Pulse aceptar si quiere enviar el formulario")){
        return true;
    }
    else{
        e.preventDefault();
        return false;
    }
}

function error(elemento){
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();//Se pone el cursor en el input
}

function error2(elemento, mensaje){
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