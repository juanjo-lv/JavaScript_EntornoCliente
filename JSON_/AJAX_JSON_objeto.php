<?php
//Vamos a crear un objeto PHP y enviarlo utilizando JSON a una pagina HTML utilizando
//también AJAX

$objeto = new stdClass();
$objeto->nombre ="Pepe";
$objeto->nacimiento = 1985;
$objeto->pais = "Mexico";

//Hay que codificar el objeto a JSON
$miJSON = json_encode($objeto);

echo $miJSON;

?>