<?php

 include '../../login/config.php';
 $count = 0;
  try 
  {
      $clg_name=$_POST['clg_name'];
      
      $link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           
      $sql = "INSERT INTO clg_name(clg_name) VALUES ('$clg_name')";       
     
      if($link->exec($sql))
          $count++;
      else
        echo "jayesh";
  }
catch(PDOException $e)
    {
    //$msg = $sql . "<br>" . $e->getMessage();
    }
      
    $link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $q = $link->query("SELECT id FROM vendors ORDER BY id DESC LIMIT 1");
    $id = $q->fetch();
    
    session_start();
    $_SESSION['email'] = $email;
    $_SESSION['phone'] = $phone;
    $_SESSION['id'] = $id[0];
    
    if($count!=0)
    header('location: ../');
    else
    echo "";
    ?>
    
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <div class="jumbotron">
    <h1>Error</h1>      
    <p><?php echo $msg; ?></p>
    <ul>
  <li>Make sure you have entered a correct email id.<b><?php echo $_SESSION['email']; ?></b> </li>
  <li>May be connection didn't work</li>
  <li>Try once more</li>
</ul>
<a href="../"><button type="button" class="btn btn-primary">Go Back</button></a>
  </div>
     
</div>

</body>
</html>

    
    
    
    
    
    
    
    
