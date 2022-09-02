<?php

$db_local = [
    'host' => 'localhost',
    'username' => 'root',
    'password' => '',
    'db' => 'bsale_test' //Cambiar al nombre de tu base de datos
];

$db_remote = [
    'host' => 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    'username' => 'bsale_test',
    'password' => 'bsale_test',
    'db' => 'bsale_test' //Cambiar al nombre de tu base de datos
];

//$db = $db_local;
$db = $db_remote;

?>
