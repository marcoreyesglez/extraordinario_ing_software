<?php 
require_once('../apiCrud/connection.php');
include './headers.php';

$consulta_idiomas = consulta('cat_idiomas','idioma_id,idioma','estatus=1');

if ($consulta_idiomas->num_rows > 0) {
    while ($row = $consulta_idiomas->fetch_assoc()) {
        $response[] = $row;
    }
    $json = array("status" => 1, "msg" => "Se encontraron idiomas","idiomas" => $response);
} else {
    $json  = array("status" => 0, "msg" => "No se encontraron idiomas","idiomas" => $response);
}
echo (json_encode($json));
?>