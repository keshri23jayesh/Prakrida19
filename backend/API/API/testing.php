<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age:86400');
header('Access-Control-Allow-Headers: Access-Control-Allow-Methods, Access-Control-Allow-Credentials, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Origin, Content-Type, X-Auth-Token,  Accept, Authorization, X-Requested-With');
                     
include '../../login/config.php';

$link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);                    

$new = file_get_contents("php://input");
$data = array();
$data = json_decode($new, true);

 var_dump(json_decode($new, true));
// echo $data['Game'][0];

//print_r($new);
//echo $data[Name]."----".$data[College];
    
//      if($data['Name'])
//      $Name = (string) $data['Name'];
//      else
//      $Name = "";
     
//      if($data['Gender'])
//      $Gender = (string) $data['Gender'];
//      else
//      $Gender = "";
     
//      if($data['College'])
//      $College = (string) $data['College'];
//      else
//      $College = "";
     
//      if($data['City'])
//      $City = (string) $data['City'];
//      else
//      $City = "";
     
//      if($data['Phone'])
//      $Phone = (string) $data['Phone'];
//      else
//      $Phone = "";
     
//      if($data['Alt_Phone'])
//      $Alt_Phone = (string) $data['Alt_Phone'];
//      else
//      $Alt_Phone = "";
     
//      if($data['Email'])
//      $Email = (string) $data['Email'];
//      else
//      $Email = "";
     
     
//      if($data['Game']){
//          //$sam = array($data['Game']);
//          $Game = $data['Game'][0];
//          $Game1 = $data['Game'][1];
//          $Game2 = $data['Game'][2];
//      }
//      else{
//          $Game = "";
//          $Game1 = "";
//          $Game2 = "";
//      }
     
     
    
//      if($data['Type'])
//      {
//          //$Typearr = array($data['Type']);
//          $Type =  $data['Type'][0];
//          $Type1 =  $data['Type'][1];
//          $Type2 =  $data['Type'][2];
         
//      }
//      else{
//          $Type = "";
//          $Type1 = "";
//          $Type2 = "";
//      }
     
//      if($data['Accomodation'])
//      $Accomodation = $data['Accomodation'];
//      else
//      $Accomodation = "";
     
//      if($data['Charge'])
//      $Charge = $data['Charge'];
//      else
//      $Charge = "";
     
//      $sql = "INSERT INTO games_reg(Name, Gender, College, City, Phone, Alt_Phone, Email, Accomodation, Game, Game1, Game2, Type, Type1, Type2, Charge) VALUES ('$Name', '$Gender', '$College', '$City', '$Phone', '$Alt_Phone', '$Email', '$Accomodation', '$Game', '$Game1', '$Game2', '$Type', '$Type1', '$Type2', '$Charge')";
  

    
// if(true)
// {
//     if($link->exec($sql))
//     {
//         http_response_code(201);
//         echo json_encode(array("message" => "Successfully Registered!!"));
        
//         $email = $Email;
//         $message = "<h2>You have registered successfully!</h2>
//                     <h2> We welcome you to be a part of Prakrida’19.</h2>
//                     <p>Registration Details:</p>
//                     <p>NAME:" . $data['Name']. "</p>
//                     <p>COLLEGE:" .$data['College']. "</p>
//                     <p>GAMES REGISTERED:" . $Game . "</p>
//                     <p>ACCOMMODATION:" . $Accomodation ."</p>
//                     <p>AMOUNT PAYABLE:" .$Charge. "</p>
//                     <p>For queries:</p>
//                     <p>Contact</p>
//                     <p>PAWAN (+91 8890792269)</p>
//                     <p>PREMAN (+91 9523222485)</p>
//                     <p>Mail  us : info@prakridabit.in</p>
//                     <p>Facebook: @prakrida2019</p>
//                     <p>Instagram: bitp_prakrida</p>";

//         require("/home/prakrida/public_html/PHPMailer_5.2.4/class.phpmailer.php");
//         $mail = new PHPMailer();
//         $mail->IsSMTP();
//         $mail->Host = "prakridabit.in";
//         $mail->SMTPAuth = true;
//         $mail->Username = "info@prakridabit.in";  // SMTP username
//         $mail->Password = "dcBZn28}v#3{";              // SMTP password
//         $mail->From = "info@prakridabit.in";
//         $mail->Port = 25;                            // set the SMTP port
//         $mail->AddAddress($email, "Feedback mail");
//         $mail->WordWrap = 50;
//         $mail->IsHTML(true);
//         $mail->SMTPDebug  = 1;
//         $mail->Subject = "Reg Successfull";
//         $mail->Body    = $message;
//         $mail->AltBody = $message;
        
//         if(!$mail->Send())
//         {
//           echo "Message could not be sent. <p>";
//           echo "Mailer Error: " . $mail->ErrorInfo;
//           exit;
//         }
        
//         //echo "Message has been sent";
        
//     }
//     else
//     {
//         http_response_code(503);
//         echo json_encode(array("message" => "Unable register try again"));
//     }
    
// }
// else{
//     http_response_code(400);
//     echo json_encode(array("message" => "Unable to register. Data is incomplete."));
// }

?>