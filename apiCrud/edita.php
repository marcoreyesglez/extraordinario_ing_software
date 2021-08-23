<?php
require_once('../apiCrud/connection.php');
include './headers.php';

if (isset($_POST['pais_id'])) {
    $pais_id=$_POST['pais_id'];
    $edita = edita('paises','
    pais_nombre="'.$_POST['paisNombre'].'",
    codigo="'.$_POST['paisCodigo'].'",
    moneda="'.$_POST['paisMoneda'].'",
    capital="'.$_POST['paisCapital'].'",
    idioma_id="'.$_POST['paisIdioma'].'",
    continente_id="'.$_POST['paisContinente'].'"',
    'pais_id='.$pais_id.'');
    if ($edita) {
        $json = array("status" => 1, "msg" => "Se editó correctamente el pais");
    } else {
        $json  = array("status" => 0, "msg" => "No se logró editar correctamente");
    }
    echo (json_encode($json));
} else {
    echo ('Error en el parametro');
}
