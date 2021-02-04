//validavion de formularios simple

//Primero hay que seleccionar formulario

//Conociendo ID
var formulario1 = document.getElementById("miFormulario");
var formulario2 = document.forms["miFormulario"];

//Por el numero de formulario
var formulario3 = document.getElementsByTagName("form"[0]);
var formulario4 = document.forms[0];

/*Sellecionar elementos del formulario
.elements[] Devuelve un array con todos los imputs del formulario
getElementsById("idElemento") Devuelve un elemento con un id determinado
getElementsByTagName("etiqueta") Devuelve un array con elelemtos del tipo etiqueta
getElementsByName("nombre") Devuelve un array con los elementos del mismo nombre
*/

window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar,false);
}

function validarNombre(){
    var elemento = document.getElementById("nombre");
    if(elemento.value == ""){
        error(elemento);
        alert("El campo no puede estar vacio");
        return false;
    }
    return true;
}

function validarTelefono(){
    var elemento = document.getElementById("telefono");
    if(isNaN(elemento.value)){
        alert("El campo telefono tiene que ser numerico");
        return false;
    }
    return true;
}

function validarFecha(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var anio = document.getElementById("anio").value;

    var fecha = new Date(anio,mes,dia);
    if(isNaN(fecha)){
        alert("Los campos de la fecha son incorrectos");
        return false;
    }
    return true;
}

function validaCheck (){
    var campoCheck = document.getElementById("mayor");
    if(!campoCheck.checked){
        alert("Deves ser mayor de edad");
        return false;
    }
    return true;

}

function validar(e){
    if(validarNombre() && validarTelefono() && validarFecha() && validaCheck() && confirm("Pulse aceptar si desea enviar el formulario")){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}
function error(elemento){
    elemento.className = "error";
    elemento.focus();
}


function limpiarError(elemento){
    elemento.className = null;
}


