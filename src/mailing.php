<?php

$to      = "admin@lortuno.mipropia.com";
$subject = $_POST['subject'];
$from    = $_REQUEST['email'];
$message = $_POST['name'] . " con correo " . $from . " te ha escrito el siguiente mensaje: \r\n " . $_POST['message'];
$headers = "From: " . $_POST['name'] . " <" . $from . ">\r\n";
$retval  = mail($to, $subject, $message, $headers);

if ($retval == true) {
    header("Location: /sent.php?result=success");
} else {
    header("Location: /sent.php?result=error");
}

?>
