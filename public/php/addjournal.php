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
    if( empty($_POST['name']) && empty($_POST['title'])) {
        echo json_encode(
            [
               "message" => "Please fill all the required field."
            ]
        ); 
        exit();
    }

    if ($_POST){      
        
        //@important: Please change this before using
        http_response_code(200);
        $type = $_POST['type'];
        $name = $_POST['name'];
        $posting_date = $_POST['posting_date'];
        $title = $_POST['title'];
        $pay_to_recd_from = $_POST[ 'pay_to_recd_from'];
        $user_remark = $_POST['user_remark'];
        $created_date = date("Y-m-d h:i:s");
        $modified_date = date("Y-m-d h:i:s");        
        $created_by = "admin";
        $company=1;
        $arr="INSERT INTO tabjournal (type,name,posting_date,title,pay_to_recd_from,user_remark, created_date, modified_date, created_by,company ) VALUES ('$type','$name','$posting_date','$title','$pay_to_recd_from','$user_remark','$created_date','$modified_date','$created_by','$company')";
        
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

    if (mysqli_query($conn,$arr)) {
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

?>