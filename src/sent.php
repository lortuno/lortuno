<!DOCTYPE HTML>
<html>
<head>
	<title>Sent</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<link href='//fonts.googleapis.com/css?family=Courgette' rel='stylesheet' type='text/css'>
	<style type="text/css">
		body {
			font-family: 'Courgette', cursive;
		}

		body {
			background: #F0F0F0;
		}

		.wrap {
			margin: 0 auto;
			width: 1000px;
		}

		.logo {
			margin-top: 50px;
		}

		.logo h1 {
			font-size: 100px;
			text-align: center;
			margin-bottom: 1px;
			text-shadow: 1px 1px 6px #fff;
			color: #003;
		}

		.logo p {
			color: #600;
			font-size: 20px;
			margin-top: 1px;
			text-align: center;
		}

		.logo p span {
			color: #606;
		}

		.sub a {
			color: white;
			background: #003;
			text-decoration: none;
			padding: 7px 120px;
			font-size: 13px;
			font-family: arial, serif;
			font-weight: bold;
			-webkit-border-radius: 3em;
			-moz-border-radius: .1em;
			-border-radius: .1em;
		}
	</style>
</head>


<body>

<!---728x90--->
<div class="wrap">
	<div class="logo">
		<h1><? if ($_GET['result'] == "success") {
                echo "Mensaje Enviado";
            } elseif ($_GET['result'] == "error") {
                echo "Se ha producido un error";
            } ?> </h1>
		<p> <? if ($_GET['result'] == "success") {
                echo "He recibido su mensaje y me pondré en contacto tan pronto como pueda. Gracias por su interés.";
            } else {
                echo "El envío no se ha ejecutado correctamente, por favor, inténtelo más tarde";
            } ?> </p>
		<!---728x90--->
		<div style="text-align: center;">
		</div>
		<div class="sub">
			<p><a href="es.html">Volver</a></p>
		</div>
	</div>
</div>
<!---728x90--->
<div style="text-align: center;"></div>
</body>
</html>
