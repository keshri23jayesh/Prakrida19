<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  include '../../login/config.php';
  $vids = $link->prepare("SELECT * FROM clg_name");
  $vids->execute();
  $result = $vids->fetchAll();
                      
  $clg_arr=array();
  $clg_arr["college"]=array();
                      
  foreach($result as $row):
    $array_item = array( "id" => $row['id'], "name" => $row['clg_name'] );
    array_push($clg_arr["college"], $array_item);
  endforeach;
                      
  echo json_encode($clg_arr);
                      
?>