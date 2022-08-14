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
	*,
	( debit - credit ) AS 
total
	
FROM
	(
	SELECT
		tabchartofaccount.`name`,
		tabjournalentry.acc AS number,
		tabchartofaccount.parent,
		0 AS is_group,		
		tabchartofaccount.type,
		SUM( CASE WHEN tabjournalentry.acc = tabchartofaccount.number THEN tabjournalentry.debit ELSE 0 END ) AS debit,
		SUM( CASE WHEN tabjournalentry.acc = tabchartofaccount.number THEN tabjournalentry.credit ELSE 0 END ) AS credit 
	FROM
		tabchartofaccount
		INNER JOIN tabjournalentry ON tabchartofaccount.number = tabjournalentry.acc 
	GROUP BY
		2 UNION
	SELECT
		tabchartofaccount.`name`,
		tabchartofaccount.number,
		tabchartofaccount.parent,
		tabchartofaccount.is_group,
		tabchartofaccount.type,
		0 AS debit,
		0 AS credit 
	FROM
		tabchartofaccount 
	) AS b 
GROUP BY
	number");
$result = array();

while ($data = $sql->fetch_assoc()) {
	$result[] = $data;
}

echo json_encode($result);

mysqli_close($conn);
