<?php
$user = "user_name";
$password = "password";
$host = "host_name";
$dbase = "database_name";
$table = "table_name";

$email= $_POST['email'];


// Connection to DBase
$dbc= mysqli_connect($host,$user,$password, $dbase)
or die("Unable to select database");


$query= "INSERT INTO $table  ". "VALUES ('$email')";

mysqli_query ($dbc, $query)
or die ("Error querying database");

echo 'You have been successfully added.' . '<br>';

mysqli_close($dbc);

?>
