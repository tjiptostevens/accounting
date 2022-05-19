<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


    include 'conn.php';

    
    $sql=$conn->query("SELECT * FROM tabchartofaccount");
    $result=array();

    while ($data=$sql-> fetch_assoc()){
        $result[]=$data;
    }

    echo json_encode($result);

    mysqli_close($conn);

?>