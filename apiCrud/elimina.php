<?php
require_once('../apiCrud/connection.php');
include './headers.php';

if (isset($_GET['pais_id'])) {
    $pais_id=$_GET['pais_id'];
    $elimina=elimina('paises','pais_id='.$pais_id);
    if ($elimina) {
        $json = array("status" => 1, "msg" => "Se eliminó correctamente el pais");
    } else {
        $json  = array("status" => 0, "msg" => "No se logró eliminar correctamente");
    }
    echo (json_encode($json));
} else {
    echo ('Error en el parametro');
}
