document.addEventListener("DOMContentLoaded",()=>{
    calcularBilletes();
})

function calcularBilletes() {
    var recogerDato = document.getElementById("cantidad");
    var boton = document.getElementById("boton");

    boton.addEventListener("click",()=>{
        var cantidad = recogerDato.value;
        var billymonedas ={
            500 : 0,
            200 : 0,
            100 : 0,
            50  : 0,
            20  : 0,
            10  : 0,
            5   : 0,
            2   : 0,
            1   : 0,
            0.5 : 0,
            0.2 : 0,
            0.1 : 0,
            0.05: 0,
            0.02: 0,
            0.01: 0
        }
        var tiposbilletes = [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01];
        function operar(cantidad) {
            for(i=0;i<tiposbilletes.length;i++){
                
            }
        }
      

    })
}