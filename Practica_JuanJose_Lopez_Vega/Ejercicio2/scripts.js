
//Extrae Nombre, Apellido, Peso , Altura
var objeto = {Nombre:"maria",Apellido:"ramirez",Altura:"170",Peso:58}
var objeto2 = {Nombre:"Oscar",Altura: "180",email:"Oscar@gmail.com"}
function informacion(objeto) {
    var objetoResul = new Object;
    for(let propiedad in objeto){
        if(propiedad == "Nombre" || propiedad == "Apellido"){
            objetoResul[propiedad] = objeto[propiedad];
        }else if(propiedad  =="Altura"){
            objetoResul[propiedad] = objeto[propiedad]+" cm";
        }else if( propiedad =="Peso"){
            objetoResul[propiedad] = objeto[propiedad]+" kg";
        }
    }
    console.log(objetoResul)

}
informacion(objeto)
informacion(objeto2)
    