<?php
require_once('../apiCrud/connection.php');
include './headers.php';

if (isset($_POST['paisNombre']) && isset($_POST['paisCodigo']) && isset($_POST['paisCapital']) && isset($_POST['paisMoneda']) && isset($_POST['paisIdioma']) && isset($_POST['paisContinente'])) {
    $inserta = crea('paises',
    'pais_nombre, codigo, moneda, capital, idioma_id, continente_id',
    '"'.$_POST['paisNombre'].'",
    "'.$_POST['paisCodigo'].'",
    "'.$_POST['paisMoneda'].'",
    "'.$_POST['paisCapital'].'",
    '.$_POST['paisIdioma'].',
    '.$_POST['paisContinente'].'');

    if ($inserta) {
        $json = array("status" => 1, "msg" => "Se guardo correctamente el pais");
    } else {
        $json  = array("status" => 0, "msg" => "No se pudo guardar el pais");
    }
    echo (json_encode($json));
} else {
    echo ('Error en el parametro');
}
