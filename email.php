<?php

$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;
require("/home/prakrida/public_html/PHPMailer_5.2.4/class.phpmailer.php");
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Host = "prakridabit.in";
$mail->SMTPAuth = true;
$mail->Username = "info@prakridabit.in";  // SMTP username
$mail->Password = "dcBZn28}v#3{";              // SMTP password
$mail->From = "info@prakridabit.in";
$mail->Port = 25;                            // set the SMTP port
$mail->AddAddress($email, "Feedback mail");
$mail->WordWrap = 50;
$mail->IsHTML(true);
$mail->SMTPDebug  = 1;
$mail->Subject = "Feed back from website!!!";
$mail->Body    = $message;
$mail->AltBody = $message;

if(!$mail->Send())
{
   echo "Message could not be sent. <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo "Message has been sent";
?> 