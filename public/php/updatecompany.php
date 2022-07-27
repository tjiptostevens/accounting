<?php
header("Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type,Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// header("Access-Control-Allow-Origin: http://localhost:3000");
// header("Access-Control-Allow-Methods: POST");
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

if (empty($_POST['id'])) {
    echo json_encode(
        [
            "message" => "Empty data"
        ]
    );
    exit();
}

if ($_POST) {
    //@important: Please change this before using
    http_response_code(200);
    $id = $_POST['id'];
    $user = $_POST['user'];
    $name = $_POST['name'];
    $abbr = $_POST['abbr'];
    $phone = $_POST['phone'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $website = $_POST['website'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $country = $_POST['country'];
    $other = $_POST['other'];
    $date = date("Y-m-d h:i:s");

    $arr = "UPDATE
                tabcompany 
            SET 
                `name` = '$name',
                abbr = '$abbr',
                phone = '$phone',
                mobile = '$mobile',
                email = '$email',
                website = '$website',
                `address` = '$address',
                city = '$city',
                country = '$country',
                other = '$other',
                modified_date = '$date',
                modified_by = 'admin' 
            WHERE
                id = $id";
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
    echo json_encode([
        "message" => "Data was update succesfully"
    ]);
} else {
    echo json_encode(
        [
            "error: " => $arr,
            "message" => $conn->error
        ]
    );
}

mysqli_close($conn);
