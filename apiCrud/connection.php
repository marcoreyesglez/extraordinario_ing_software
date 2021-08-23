<?php


function get_conn(){
    $servername= "localhost";
    $username= "root";
    $password="";
    $dbname="ing_software";
    
        //Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: ". $conn->connect_error);
        }
        return $conn;
    }


function consulta($tabla, $columnas, $condicion){
if(empty($conn)){
    $conn = get_conn();
}
$query_consulta = 'select ' . $columnas . ' from ' . $tabla . ' where ' . $condicion . '';
$result = $conn->query($query_consulta);
$conn->close();
return $result;
}

function query($query){
    if(empty($conn)){
        $conn = get_conn();
    }
    $result = $conn->query($query);
    $conn->close();
    return $result;
}

function crea($tabla, $columnas, $valores){
    if(empty($conn)){
        $conn = get_conn();
    }
    $query_crea = "insert into $tabla ($columnas) values ($valores);";
    $result = $conn->query($query_crea);
    $conn->close();
    return $result;
}

function edita($tabla, $valor, $condicion){
    if(empty($conn)){
        $conn = get_conn();
    }
    $query_edita = "update $tabla set $valor where $condicion;";
    $result = $conn->query($query_edita);
    $conn->close();
    return $result;
}

function elimina($tabla, $condicion){
    if(empty($conn)){
        $conn = get_conn();
    }
    $query_elimina = "delete from $tabla where $condicion;";
    $result = $conn->query($query_elimina);
    $conn->close();
    return $result;
}
?>