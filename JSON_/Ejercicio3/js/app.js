document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM Cargado!');
    const mostrar1 = document.querySelector('#mostrar');
    

    mostrar1.addEventListener('click', ()=>{
        mostrar();
    });
});




function mostrar(){
    const parrafo = document.querySelector('#parrafo');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var alumnos = JSON.parse(this.responseText);

            for(var i=0; i < alumnos.length; i++){
                parrafo.innerHTML += `${alumnos[i]}<br>`;
            }

            /* var cadena = JSON.stringify(alumnos);
            parrafo.innerHTML + = "El array " + alumnos */
        }
    }
    xhr.open("GET", "array.php", true);
    xhr.send();
}

