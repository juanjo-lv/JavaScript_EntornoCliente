document.addEventListener("DOMContentLoaded",()=>{
    calcularBilletes();
})

function calcularBilletes() {
    var recogerDato = document.getElementById("cantidad");
    var boton = document.getElementById("boton");
    var resul = document.getElementById("resultado");

    boton.addEventListener("click",()=>{
        var cantidad = recogerDato.value;
        var tiposbilletes = [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01];
        var resultado="<br>";
        function operar(cantidad) {
            for(i=0;i<tiposbilletes.length;i++){
                let numbilletes = Math.trunc(cantidad / tiposbilletes[i]);
                cantidad = cantidad -(numbilletes * tiposbilletes[i]);
                if(i<=6){
                    resultado+="Billetes de "+tiposbilletes[i]+"€ :"+numbilletes+"<br>";
                }else{
                    resultado+="Monedas de "+tiposbilletes[i]+"€ :"+numbilletes+"<br>";
                }
            }
            resul.innerHTML = resultado;
        }
       operar(cantidad);
    })
}