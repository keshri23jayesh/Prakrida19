<?php
	
	//Start session
	
	//Check whether the session variable SESS_MEMBER_ID is present or not
	if(!isset($_SESSION['username'])) 
        {
		header("location: index.php");
		exit();
	}


	$session_admin_name = $_SESSION['username'];
?>