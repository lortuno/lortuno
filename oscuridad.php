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
				<p>Al entrar en la url aparecen 4 imágenes, de las partes del cuerpo que va a usar en su receta especial. En el pie de la página veis
					en letra cambria 11 una siniestra frase "recolectar en".
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
									<a href="escape/images/ojo.jpg" title="María Luisa González"><img src="escape/images/ojo.jpg"
																									  alt="María Luisa González"
										/></a>
								</div>
							</div>
							<div>
								<div class="image fit flush">
									<a href="escape/images/oreja.jpg" title="Pedro Cristobal"><img src="escape/images/oreja.jpg" alt="Pedro Cristobal"
										/></a>
								</div>
							</div>
							<div>
								<div class="image fit flush">
									<a href="escape/images/lengua.jpg" title="Ignacio de Lucas"><img src="escape/images/lengua.jpg"
																									 alt="Ignacio de Lucas"
										/></a>
								</div>
							</div>
							<div>
								<div class="image fit flush">
									<a href="escape/images/pie.jpg" title="Susana Romero"><img src="escape/images/pie.jpg" alt="Susana Romero"
										/></a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="special align-center padding">
					<h3>Cuál es la imagen que contiene la pista final:</h3>
					<form action="escape_end.php" method="post">
						<div class="align-center">
							<input id="name" type="text" name="name">
							<label for="name">Nombre de la víctima</label>
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
<script src="escape/assets/js/jquery.min.js"></script>
<script src="escape/assets/js/jquery.poptrox.min.js"></script>
<script src="escape/assets/js/skel.min.js"></script>
<script src="escape/assets/js/util.js"></script>
<script src="escape/assets/js/main.js"></script>

</body>
</html>
