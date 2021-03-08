<?php
//Array de nombres
$a = array("Sara","Imanol","Dni","Antonio","David",
"Igor","Nerea","Christian","Joseba","Angel","Ana","Cristina",
"Ignacio","Miguel","Manuel","María");

//Tomamos el valor del input procedente de la URL 

$nombre = $_REQUEST["nombre"];
$sugerencia = "";

if($nombre!=""){
    $nombre = strtolower($nombre); // pasamos el nombre a minuscula
    $long = strlen($nombre);

    foreach ($a as $nom) { //cada elemento del array los pasa $nom en cada iteración
        if(stristr($nombre, substr($nom,0,$long))){
            if($sugerencia === ""){ //si no hay texto en sugerencia
                $sugerencia = $nom;
            }else{
                $sugerencia = "$sugerencia, $nom";
            }
        }
    }
}
if($sugerencia === "") echo "No hay sugerencias";
else echo $sugerencia;
?>