
<!DOCTYPE html>
<html lang="pl-PL">
<head>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700" rel="stylesheet">
	<link rel="stylesheet" href="css/email.css">
	<title>Mail</title>
</head>
<body style="background-color:black">

<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/autoload.php';

//header('Content-type: text/html; charset=utf-8');

if (isset($_POST['send'])) {
  $to = 'zuk.pawel86@gmail.com';
  $subject = 'Nowa wiadomosc od uzytkownika';
	$name = validate_input($_POST['name']);
	$nameVal = false;
	$email = validate_input($_POST['email']);
	$emailVal = false;
	$message = validate_input($_POST['message']);
	$messageVal = false;
}

if(strlen($name) > 0) {
	$text = 'Imię: ' . $name . "<br />";
	$nameVal = true;
} else {
	echo "Imię nie może być puste, ";
	$nameVal = false;
}

if(strpos($email,'@') !== false) {
	$text .= 'Email: ' . $email . "<br />";
	$emailVal = true;
} else {
	echo "Podaj prawidłowy email, ";
	$emailVal = false;
}

if(strlen($message) > 0) {
	$text .= 'Wiadomość: ' . $message;
	$messageVal = true;
} else {
	echo "Wiadomość nie może być pusta, ";
	$messageVal = false;
}

function validate_input($input) {
   $input = trim($input);
   $input = stripslashes($input);
   $input = htmlspecialchars($input);
   return $input;
}
$emailSended = false;

$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = "test@gmail.com";
$mail->Password = "test123";
$mail->setFrom('bluetransferweb@gmail.com', 'Formularz strony internetowej');
$mail->addAddress($to, 'Admin');
$mail->Subject = $subject;
$mail->Body = $text;
$mail->AltBody = 'This is a plain-text message body';

if ($nameVal && $emailVal && $messageVal) {
	$mail->send();
	$emailSended = true;
} else {
	$emailSended = false;
}
?>

<?php if (!$emailSended) { ?>

	<h1 style="color:red">Nieudane wysłanie wiadomości</h1>

<?php } else { ?>

	<h1 style="color:lightgreen">Dziękujemy za przesłanie wiadomości</h1>

<?php } ?>

	<script>
		document.addEventListener('DOMContentLoaded',function() {
				var timeout = setTimeout(function() {
					window.location = 'index.html';
				}, 3000);
		});
	</script>

	<a href="index.html" style="text-decoration:none">
		<h1>Za 3 sekundy zostaniesz przekierewany do strony głównej...</h1>
		<h1>Powrot do strony glownej</h1>
	</a>

	<div class="logo"></div>

</body>
</html>
