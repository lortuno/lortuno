<!DOCTYPE HTML>
<html>
<head>
	<title>Escape</title>
	<meta charset="UTF-8">
	<meta name="author" content="lortuno">
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<link rel="stylesheet" href="assets/css/main.css"/>
</head>
<body>

<!-- Header -->
<header id="header">
	<div class="logo"><a href="#">Escape <span>the QUARANTINE</span></a></div>
</header>

<!-- Main -->
<section id="main">
	<div class="inner">

		<!-- One -->
		<section id="one" class="wrapper style1">

			<div class="image fit flush">
				<img src="images/header_police.jpg" alt="header"/>
			</div>
			<header class="special">
				<h2>El caso</h2>
				<p>Sigue las pistas y atrapa al asesino antes de que escape.</p>
			</header>
			<div class="content">
                <?php
                if ($_POST['paso'] === "0426") { ?>
					<p>Al abrir la puerta se descubre una pequeña cocina con toda una suerte de utensilios, ingredientes y tarros, algunos con lo que
						parecen
						muy probablemente
						partes del cuerpo de sus víctimas que ha conservado Murderchef para sus recetas. Anotado en un papel pone "la receta
						definitiva" y una web a
						la que ir a consultarla.</p>
					<section id="three" class="wrapper">
						<div class="spotlight alt">
							<div class="image flush"><img src="images/tarros.jpg" alt="jars"/></div>
							<div class="inner">
								<h3 title="Pista: es un acertijo">Receta</h3>
								<p>Coger las piezas en el orden indicado, de una en una (o el número que se indique) y batir a 0.5 de velocidad.</p>
								<ol>
									<li>0:24 <a href="https://www.youtube.com/watch?v=97SvRSXehM0" target="_blank">2 huevos</a></li>
									<li>0:40 <a href="https://www.youtube.com/watch?v=uDZ716e4eSU" target="_blank">Mantequilla</a></li>
									<li>2:26 <a href="https://www.youtube.com/watch?v=8WHlhgJ_uB4" target="_blank">Sal</a></li>
									<li>4:19 <a href="https://www.youtube.com/watch?v=B7UTrWig73c" target="_blank">Aceite</a></li>
									<li>2:44 <a href="https://www.youtube.com/watch?v=bX4CmPR4qIU" target="_blank">1 cebolla</a></li>
									<li>0:04 <a href="https://www.youtube.com/watch?v=X4xwEx0SMVo" target="_blank">Dos Patatas</a></li>
								</ol>

								Ver en:
								<p>lortuno.mipropia.com/<wbr>escape/xxxxxxxx.php</p>
							</div>
						</div>
						<section class="margin-top">
							<details>
								<summary>Pedir ayuda a tu colega Carlos Piedra.</summary>
								<p>Te indica que cada vídeo contiene la palabra de un <strong>acertijo</strong>, en ese orden para formar una frase.</p>
								<p>Si el nº de ingredientes es 2, son dos palabras. Te aconseja que apuntes lo que oigas y le des sentido en conjunto.</p>
							</details>
						</section>
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
							<button type="submit" class="button fit special">Volver atrás y reintentar</button>
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
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.poptrox.min.js"></script>
<script src="assets/js/skel.min.js"></script>
<script src="assets/js/util.js"></script>
<script src="assets/js/main.js"></script>

</body>
</html>
