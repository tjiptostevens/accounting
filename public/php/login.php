<?php
header("Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type,Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

 

    include 'conn.php';

    // session_start();
    $dat = file_get_contents("php://input");
    // check parameter exist
    if (isset($dat)) {
        
        // $dat = stripslashes($_POST['data']);
        $json = json_decode($dat);
        
        
        //If json_decode failed, the JSON is invalid.
        if(isset($json)) {
            http_response_code(200);
            
            $usr = $json->usr;
            $pwd = $json->pwd;

            $sql=$conn->query("SELECT * FROM tabuser WHERE (tabuser.usr =  '$usr' OR tabuser.email =  '$usr' OR tabuser.mobile =  '$usr' ) AND tabuser.`pwd` = '$pwd'");

            $result=array();                    

            while ($data=$sql-> fetch_assoc()){
                $result[]=$data;
            }

            if (isset($result[0]['id'])) {
            $token= $result[0]['id'];

            // $_SESSION['token'] = hash('md5',$token);
            // $_SESSION['message'] = "Yeay.. Anda berhasil login!";
            // $_SESSION['data'] = $result[0];

                echo json_encode(
                    [
                        "token" => hash('md5',$token),
                        "message" => "Yeay.. Anda berhasil login!",
                        "data" => $result[0],
                    ]
                );

            } else {
                echo json_encode(
                [
                    "message" => "kombinasi salah",
                ]
                );
            }


        } else {
            // Send error back to user.
            echo json_encode(
                [
                    "message" => "Ada kesalahan dalam data yang dikirim.",

                ]
            );
        }

    } else {
        echo json_encode(
                [
                    "message" => "salah alamat bro",
                ]
                );

    }

    mysqli_close($conn);

?>