<?php 
require_once('../apiCrud/connection.php');
include './headers.php';


$consulta_paises = query('SELECT p.pais_id, p.pais_nombre, p.codigo, p.moneda, p.capital, ci.idioma_id, ci.idioma, cc.continente_id, cc.continente_nombre 
FROM paises p 
JOIN cat_continentes cc on cc.continente_id = p.continente_id 
JOIN cat_idiomas ci on ci.idioma_id = p.idioma_id;');

if ($consulta_paises->num_rows > 0) {
    while ($row = $consulta_paises->fetch_assoc()) {
        $response[] = $row;
    }
    $json = array("status" => 1, "msg" => "Se encontraron paises","paises" => $response);
} else {
    $json  = array("status" => 0, "msg" => "No se encontraron paises","paises" => $response);
}

echo (json_encode($json));


?>