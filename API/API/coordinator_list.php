<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

                      include '../../login/config.php';
                      $vids = $link->prepare("SELECT * FROM vendors");
                      $vids->execute();
                      $result = $vids->fetchAll();
                      $clg_arr=array();
                      $clg_arr["coordinator"]=array();
                      
                      foreach($result as $row):
                        $array_item=array( "id" => $row['id'],
                                           "game" => $row['game'],
                                           "charge" => $row['charge'],
                                           "Name" => $row['Name'],
                                           "Phone" => $row['Phone'],
                                           "Name1" => $row['Name1'],
                                           "Phone1" => $row['Phone1'],
                                           "Email" => $row['Email'],
                                           "Email1" => $row['Email1'],
                                           "venue" => $row['venue'],
                                            );
                        array_push($clg_arr["coordinator"], $array_item);
                      endforeach;
                      
                      echo json_encode($clg_arr);
                      
?>