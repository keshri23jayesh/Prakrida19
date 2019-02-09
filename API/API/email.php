<?php 
                      include '../../login/config.php';
                      $vids = $link->prepare("SELECT * FROM games_reg");
                      $vids->execute();
                      $result = $vids->fetchAll();
                      $string="";
                      foreach($result as $row):
                            $string .= $row['Email'];
                            $string .= "<br>";
        			  endforeach;
        			  echo $string;
        			  ?>