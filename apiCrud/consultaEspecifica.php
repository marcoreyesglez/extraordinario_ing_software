<?php
require_once('../apiCrud/connection.php');
include './headers.php';

if (isset($_GET['pais_id'])) {
    $pais_id = $_GET['pais_id'];
    $consulta_paises = query('SELECT p.pais_id, p.pais_nombre, p.codigo, p.moneda, p.capital, ci.idioma_id, ci.idioma, cc.continente_id, cc.continente_nombre 
FROM paises p 
JOIN cat_continentes cc on cc.continente_id = p.continente_id 
JOIN cat_idiomas ci on ci.idioma_id = p.idioma_id
WHERE p.pais_id=' . $pais_id);

    if ($consulta_paises->num_rows > 0) {
        while ($row = $consulta_paises->fetch_assoc()) {
            $response[] = $row;
        }
        $json = array("status" => 1, "msg" => "Se encontró el pais", "pais" => $response);
    } else {
        $json  = array("status" => 0, "msg" => "No se encontró el pais");
    }
    echo (json_encode($json));
} else {
    echo ('Error en el parametro');
}
