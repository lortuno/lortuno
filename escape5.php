<!DOCTYPE HTML>
<html>
<head>
	<title>Escape</title>
	<meta charset="UTF-8">
	<meta name="author" content="lortuno">
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<link rel="stylesheet" href="escape/assets/css/main.css"/>
</head>
<body>

<!-- Header -->
<header id="header">
	<div class="logo"><a href="#">Escape <span>the QUARENTEEN</span></a></div>
</header>

<!-- Main -->
<section id="main">
	<div class="inner">

		<!-- One -->
		<section id="one" class="wrapper style1">

			<div class="image fit flush">
				<img src="escape/images/header_police.jpg" alt="header"/>
			</div>
			<header class="special">
				<h2>El caso</h2>
				<p>Sigue las pistas y atrapa al asesino antes de que escape.</p>
			</header>
			<div class="content">
                <?php
                if ($_POST['paso'] === "2163") { ?>
					<p>Al abrir la puerta se descubre una pequeña cocina con toda una suerte de utensilios, ingredientes y tarros, algunos con lo que
						parecen
						muy probablemente
						partes del cuerpo de sus víctimas que ha conservado murderchef para sus recetas. Anotado en un papel pone "la receta
						definitiva" y una web a
						la que ir a consultarla.</p>
					<section id="three" class="wrapper">
						<div class="spotlight alt">
							<div class="image flush"><img src="escape/images/tarros.jpg" alt="jars"/></div>
							<div class="inner">
								<h3>Receta</h3>
								<p>1:16 <a href="" target="_blank">Aceite</a></p>
								Ver en:
								<p>lortuno.mipropia.com/xxxxxxxx.php</p>
							</div>
						</div>
					</section>
                <?php } else { ?>
					<section class="align-center padding">
						<h2>Oh no!</h2>
						<p>El candado no cede y de hecho, se rompe con el forcejeo. Tenéis que esperar a que vengan refuerzos
							para tirar la puerta abajo, y para entonces, Murderchef ha asesinado a su siguiente víctima y os destituyen
							del caso. Nunca superaréis este fracaso.
							Loosers.</p>
						<form action="escape4.php" method="post">
							<input type="hidden" name="player" value="2">
							<button type="submit" class="button big special">Volver atrás y reintentar</button>
						</form>
					</section>
                <?php } ?>
			</div>
		</section>
	</div>
</section>

<!-- Footer -->
<footer id="footer">
	<div class="copyright">
		&copy; lortuno. All rights reserved. Thanks for: Images <a href="https://unsplash.com">Unsplash</a> Design <a href="https://templated.co">TEMPLATED</a>
	</div>
</footer>

<!-- Scripts -->
<script src="escape/assets/js/jquery.min.js"></script>
<script src="escape/assets/js/jquery.poptrox.min.js"></script>
<script src="escape/assets/js/skel.min.js"></script>
<script src="escape/assets/js/util.js"></script>
<script src="escape/assets/js/main.js"></script>

</body>
</html>
