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

    if( empty($_POST['username']) && empty($_POST['password']) ) {
        echo json_encode(
            [
               "message" => "Empty data"
            ]
        ); 
        exit();
    }

    if ($_POST){
        //@important: Please change this before using
        http_response_code(200);
        $username = $_POST['username'];
        $password = $_POST['password'];
        $mobile = $_POST['mobile']; 
        $type = $_POST[ 'type'];
        $created_date = $_POST['date'];
        $arr="INSERT INTO tabuser (username, password, mobile, type, created_date) VALUES ('$username',md5('$password'),'$mobile','$type','$created_date')";
        
        //Actual sending email
        // $sendEmail = new Sender($username, $password, $mobile);
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

    if (mysqli_query($conn,$arr)) {
        echo "new record created succesfully";
    } else {
        echo "error: " . $arr . "<br>" . $conn->error;
    }

    mysqli_close($conn);

?>