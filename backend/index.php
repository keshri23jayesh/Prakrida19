<?php
// Include config file
include 'config.php';
 
// Define variables and initialize with empty values
session_start();
 $page = $_SESSION['pagename'];
 //echo $page;
// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
 
    // Check if username is empty
    if(empty(trim($_POST["username"]))){
        $username_err = 'Please enter username.';
    } else{
        $username = trim($_POST["username"]);
    }
    
    // Check if password is empty
    if(empty(trim($_POST['password']))){
        $password_err = 'Please enter your password.';
    } else{
        $password = trim($_POST['password']);
    }
    
    // Validate credentials
    if(empty($username_err) && empty($password_err))
	{
        // Prepare a select statement
		
                $sql = $link->query("SELECT * FROM user WHERE username ='" .$username. "'");
                $f4 = $sql->fetch();
		if($password == $f4[2])
		{
		  
		  session_start();
		  $_SESSION["username"] = $username;
		  
		  
		  $location = "location: ";
		  $location .= $page;
		  echo "line 42";
		  echo $location;
		  $j = strlen($location);
		  if($j > 10)
		  header($location);
		  else
		  header("location: editHome.php");
		  
		}
		else
		{
		 $jay = "fill again";
		}
    }
    
}
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <style type="text/css">
        body{ font: 14px sans-serif; }
        .wrapper{ width: 350px; padding: 20px; }
    </style>
</head>
<body>
    <div class="wrapper">
        <h2>Login</h2>
        <p>Please fill in your credentials to login.</p>
		<p><?php echo $jay; ?></p>
        <form action="" method="post">
            <div class="form-group">
                <label>Username:<sup>*</sup></label>
                <input type="text" name="username" class="form-control" value="<?php echo $username; ?>">
                <span class="help-block"><?php echo $username_err; ?></span>
            </div>    
            <div class="form-group">
                <label>Password:<sup>*</sup></label>
                <input type="password" name="password" class="form-control">
                <span class="help-block"><?php echo $password_err; ?></span>
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Submit">
            </div>
        </form>
    </div>    
</body>
</html>