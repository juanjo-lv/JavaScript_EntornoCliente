var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
'C', 'K', 'E', 'T'];

    
    do{
        var num = prompt("Introduce tu numero del DNI");
        if(num>0 && num<99999999){
            var resultado = num%23;
            var letrapensada = prompt("Que letra tienes en el DNI?")
            if(letrapensada==letras[resultado]){
                alert("Tu letra del DNI es correcta")
            }else{
                alert("has introducido la letra mal")
            }

        }else{
            alert("El numero introducido no es válido")
        }
        
    }while(num>0 && num<99999999)
    
        
    




