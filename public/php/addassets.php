<?php
header("Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type,Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    exit(0);
}


include 'conn.php';

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// if( isset($_POST) {
if (empty($_POST['name']) && empty($_POST['mobile'])) {
    echo json_encode(
        [
            "message" => "Please fill all the required field."
        ]
    );
    exit();
}

if ($_POST) {

    //@important: Please change this before using
    http_response_code(200);
    $code = $_POST['code'];
    $name = $_POST['name'];
    $qty = $_POST['qty'];
    $date = $_POST['date'];
    $init_value = $_POST['init_value'];
    $eco_value = $_POST['eco_value'];
    $lifetime = $_POST['lifetime'];
    $description = $_POST['description'];
    $created_date = date("Y-m-d h:i:s");
    $modified_date = date("Y-m-d h:i:s");
    $created_by = "admin";
    $status = "1";
    $arr = "INSERT INTO tabassets (code,name,qty,date,init_value,eco_value,lifetime,description, created_date, modified_date, created_by, status) VALUES ('$code','$name','$qty','$date','$init_value','$eco_value','$lifetime','$description','$created_date','$modified_date','$created_by','$status')";

    // echo json_encode(
    //     [
    //        "message" => $arr
    //     ]
    // ); 


    //Actual sending email
    // $sendEmail = new Sender($number, $name, $is_group);
    // $sendEmail->send();

} else {
    // tell the user about error
    echo json_encode(
        [
            "error: " => $arr,
            "message" => $conn->error
        ]
    );
}

if (mysqli_query($conn, $arr)) {
    echo json_encode(
        [
            "message" => "new record created succesfully"
        ]
    );
} else {
    echo json_encode(
        [
            "error: " => $arr,
            "message" => $conn->error
        ]
    );
}

mysqli_close($conn);
