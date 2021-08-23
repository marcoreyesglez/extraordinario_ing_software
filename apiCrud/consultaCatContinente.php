<?php 
require_once('../apiCrud/connection.php');
include './headers.php';


$consulta_continentes = consulta('cat_continentes','continente_id, continente_nombre','estatus=1');

if ($consulta_continentes->num_rows > 0) {
    while ($row = $consulta_continentes->fetch_assoc()) {
        $response[] = $row;
    }
    $json = array("status" => 1, "msg" => "Se encontraron continentes","continentes" => $response);
} else {
    $json  = array("status" => 0, "msg" => "No se encontraron continentes","continentes" => $response);
}

echo (json_encode($json));


?>