<?php

 include '../../login/config.php';
 $count = 0;
  try 
  {
      $game=$_POST['game'];
      $charge=$_POST['charge'];
      $Name=$_POST['Name'];
      $Name1=$_POST['Name1'];
      $Phone=$_POST['Phone'];
      $Email=$_POST['email'];
      $Email1=$_POST['email1'];
      $Phone1=$_POST['Phone1'];
      $venue=$_POST['venue'];
      //$rules=$_POST['rules'];
    
    
      $link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           
      $sql = "INSERT INTO vendors(game, charge, Name, Phone, Name1, Phone1, Email, Email1, venue) VALUES ('$game', '$charge', '$Name', '$Phone', '$Name1', '$Phone1', '$Email', '$Email1', '$venue')";       
     
      if($link->exec($sql))
          $count++;
      else
        echo "jayesh";
  }
catch(PDOException $e)
    {
    $msg = $sql . "<br>" . $e->getMessage();
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
  <li>Slow coonection</li>
</ul>
<a href="../"><button type="button" class="btn btn-primary">Go Back</button></a>
  </div>
     
</div>

</body>
</html>

    
    
    
    
    
    
    
    
