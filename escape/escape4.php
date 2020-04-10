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
	<div class="logo"><a href="#">Escape <span>the QUARENTEEN</span></a></div>
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
                if ($_POST['player'] === "2") { ?>
					<p>David Sebastian no solo es un tramposo empedernido, sino que resulta ser el nombre en clave de vuestro sospechoso, y al conocer
						su apodo desbloqueáis un posible paradero
						de un testigo que un compañero interrogó la semana pasada. Llegáis a un sótano utilizado como cuarto de lavadoras. Vuestra
						linterna de luz negra detecta restos de sangre en una esquina. Podría ser el lugar donde Murderchef lleva a cabo sus
						asesinatos. En la pared hay colgado un póster con un mapa de un laberinto. Santiago descubre un candado numérico en una puerta
						oculta para acceder a otra sala.</p>
					<section id="three" class="wrapper">
						<div class="spotlight alt">
							<div class="image flush"><a href="images/laberinto.png" download>
									<img src="images/laberinto.png" alt="laberinto"/></a>
							</div>
							<div class="inner">
								<p title="Solo funciona si obtenemos un decágono">Para hacer el zumo por cada pieza de fruta hay que echar:</p>
								<ul class="align-left">
									<li>Siete gotas de agua.</li>
									<li>Tres rodajas de plátano.</li>
									<li>Apartar la fresa para la próxima preparación.</li>
								</ul>
							</div>
						</div>
						<div class="spotlight">
							<div class="image flush"><a href="images/candado.png" download><img src="images/candado.png" alt="laberinto"/></a>
							</div>
							<div class="inner">
								<h3>Clave de la puerta:</h3>
								<form action="escape5.php" method="post">
									<input type="text" id="paso" name="paso">
									<div class="row margin-top pull-right">
										<button class="button alt" type="submit">Enviar</button>
									</div>
								</form>
							</div>
						</div>
					</section>
                <?php } else { ?>
					<div class="align-center padding">
						<p>¡Maldita sea!, habeis perseguido a un inocente y perdido toda la credibilidad de vuestro departamento.
							Murderchef ha escapado y a vosotros os han reasignado a allanamientos.
							Looosers.</p>
						<form action="escape3.php" method="post">
							<input type="hidden" name="direction" value="4">
							<button type="submit" class="button big special">Volver atrás y reintentar</button>
						</form>

					</div>
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
