<?php
// if ($_SERVER['HTTP_ORIGIN'] === 'https://pitaramulia.tjip.work') {
# code...
$server = "localhost";
$user = "u1656361_root";
$pass = "ZH_{?b_3I@4F";
$db = "u1656361_accounting";
// } else {
//   $server = "localhost";
//   $user = "root";
//   $pass = "";
//   $db = "accounting";
// }

// Create connection
$conn = mysqli_connect($server, $user, $pass, $db);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
