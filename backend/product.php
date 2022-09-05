<?php
include "config.php";
include "utils.php";

$dbConn =  connect($db);

/*
  listar todos los productos, algunos, o solo uno
 */
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{

  if (isset($_GET['id']))
  {
    //Mostrar un producto
    $sql = $dbConn->prepare("SELECT * FROM product where id=:id");
    $sql->bindValue(':id', $_GET['id']);
    $sql->execute();
    header("HTTP/1.1 200 OK");
    echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
    exit();
  }elseif (isset($_GET['category']))
  {
    //Mostrar lista de productos por categoría
    $sql = $dbConn->prepare("SELECT * FROM product where category=:category");
    $sql->bindValue(':category', $_GET['category']);
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $sql->fetchAll()  );
    exit();
  }
  else {
    //Mostrar lista de productos
    $sql = $dbConn->prepare("SELECT * FROM product");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $sql->fetchAll()  );
    exit();
  }
}

//En caso de que ninguna de las opciones anteriores se haya ejecutado
header("HTTP/1.1 400 Bad Request");

?>