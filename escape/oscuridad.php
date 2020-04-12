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
				<p>Al entrar en la url aparecen 4 imágenes, de las partes del cuerpo que va a usar en su receta especial. En el pie de la página veis
					en letra cambria 11 una siniestra frase "Recolectar en".
					Examináis las fotos a fondo para saber más. Debe de haber alguna pista dentro de ellas.
				</p>
				<section id="two" class="wrapper style2">
					<header>
						<h2>Ingredientes de la receta especial:</h2>
					</header>
					<div class="content">
						<div class="gallery">
							<div>
								<div class="image fit flush">
									<a href="images/ojo.jpg" title="María Luisa González" rel="tooltip"><img src="images/ojo.jpg"
																							   alt="María Luisa González"
										/></a>
								</div>
							</div>
							<div>
								<div class="image fit flush">
									<a href="images/oreja.jpg" title="Pedro Cristobal" rel="tooltip"><img src="images/oreja.jpg" alt="Pedro Cristobal"
										/></a>
								</div>
							</div>
							<div>
								<div class="image fit flush">
									<a href="images/lengua.jpg" title="Ignacio de Lucas" rel="tooltip"><img src="images/lengua.jpg"
																							  alt="Ignacio de Lucas"
										/></a>
								</div>
							</div>
							<div>
								<div class="image fit flush">
									<a href="images/pie.jpg" title="Susana Romero" rel="tooltip"><img src="images/pie.jpg" alt="Susana Romero"
										/></a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="special align-center padding">
					<h3>Cuál es la imagen que contiene la pista final:</h3>
					<section>
						<details>
							<summary>Pedir ayuda a tu colega Margarita Díez.</summary>
							<p>Te comenta que Pedro Cristobal murió asesinado el 15 de febrero de este año.</p>
						</details>
					</section>
					<form action="escape_end.php" method="post">
						<div class="align-center">
							<input id="name" type="text" name="name">
							<label for="name">Nombre de la próxima víctima</label>
						</div>

						<div class="row margin-top pull-right">
							<button class="button alt" type="submit">Enviar</button>
						</div>
					</form>
				</section>
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
<script src="assets/js/tooltip.js"></script>

</body>
</html>
