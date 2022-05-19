<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


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