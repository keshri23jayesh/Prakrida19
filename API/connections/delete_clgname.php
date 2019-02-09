<?php

	include '../../login/config.php';
	if(isset($_GET['id']))
           {
        
        $link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
		//DROP TABLE Shippers;
		
		$sql = "DELETE FROM clg_name WHERE id = '".$_GET['id']."'";

		if($link->exec($sql))
                {
		        	header('location: ../');
		        }
             }

?>