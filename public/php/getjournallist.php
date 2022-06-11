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


$sql = $conn->query("SELECT
IF
	( tabjournalentry.acc <=> NULL, 'Total', tabjournalentry.acc ) AS acc,
	tabchartofaccount.`name` as acc_name,
	tabjournalentry.idx,
IF
	( tabjournalentry.acc <=> NULL, '', IF ( tabjournalentry.parent = '', 'Grand', tabjournalentry.parent ) ) AS parent,
IF
	( tabjournalentry.acc <=> NULL, sum( tabjournalentry.debit ), tabjournalentry.debit ) AS debit,
IF
	( tabjournalentry.acc <=> NULL, sum( tabjournalentry.credit ), tabjournalentry.credit ) AS credit,
	tabjournalentry.created_date 
FROM
	tabjournalentry
	INNER JOIN tabchartofaccount ON tabjournalentry.acc = tabchartofaccount.number
	INNER JOIN tabjournal ON tabjournalentry.parent = tabjournal.`name` 
GROUP BY
	tabjournalentry.parent,
	tabjournalentry.acc WITH ROLLUP");
$result = array();

while ($data = $sql->fetch_assoc()) {
    $result[] = $data;
}

echo json_encode($result);

mysqli_close($conn);
