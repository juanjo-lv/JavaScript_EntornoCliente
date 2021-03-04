document.addEventListener("DOMContentLoaded",()=>{
    app();
});
function app() {
    var insert = document.getElementById("insertar");
    var color = document.getElementById("color");
    var img = document.getElementById("imagen");
    var borrar = document.getElementById("borrar");

    insert.addEventListener("click",insertar);
    color.addEventListener("click",cambiarColor);
    img.addEventListener("click",insertarImagen);
    borrar.addEventListener("click",borrarTodo);



    function insertar() {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(document.getElementById("texto").value);

        parrafo.appendChild(texto);

        var contenedor = document.querySelector(".contenedor")
        contenedor.appendChild(parrafo)
    }
    function cambiarColor() {
        let cont = document.querySelector("p:last-of-type");
        cont.setAttribute("class","color");

    }
    function insertarImagen() {
        var imagen = document.createElement("img");
        var ruta = "img/"
        ruta += prompt("Introduce el nombre de la imagen");
        imagen.src = ruta;

        var contenedor = document.querySelector(".contenedor")
       
        setTimeout(() => {
            contenedor.appendChild(imagen);
        }, 3000);
        
    }
    function borrarTodo() {
        var contenedor = document.querySelector(".contenedor")
        var hijo = contenedor.childNodes;
        for(let i=0; i=hijo.length;i++){
            contenedor.removeChild(contenedor.lastChild);
        }
        
    }
}