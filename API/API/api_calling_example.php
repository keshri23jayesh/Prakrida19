<?php
$new = file_get_contents("http://prakridabit.in/admin/pages/dfdsfdsv/coordinator_list.php");
$data = array();
$data = json_decode($new, true);
//echo $data;

print_r($data);        // Dump all data of the Array
//echo $someArray[0]["name"];

// echo sizeof($data["coordinator"]);

for($i=0; $i < sizeof($data["coordinator"]); $i++)
{
    
                                echo "<p style='color: blue;'>" .$data['coordinator'][$i]['id']. "</p>";
                                echo $data['coordinator'][$i]['game'];
                                echo $data['coordinator'][$i]['Email'];
                                echo "<br>";
                                $i++;
}

?>