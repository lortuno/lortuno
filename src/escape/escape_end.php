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
                function parseName($name = false)
                {
                    if ($name) {
                        $cadena = strtolower(str_replace(' ', '', $name));
                        $cadena = str_replace(array('á', 'í'), array('a', 'i'), $cadena);

                        return $cadena;
                    }

                    return null;
                } ?>
                <?php
                if (parseName($_POST['name']) == "marialuisagonzalez") { ?>
					<p>Descubrís que tiene apuntados los nombres de las víctimas con tinta invisible. Tras un
						exhaustivo examen llegáis a la conclusión de que la siguiente víctima es María Luisa González.
						Enviáis una patrulla a su dirección y... ¡Felicidades! Habéis pillado a Murderchef con las manos en la masa
						antes de que cometiera el crimen. Maria Luisa os está muy agradecida y vuestro jefe os va a otorgar
						una medalla al honor por vuestro excelente trabajo.</p>
					<h1 class="align-center">ENHORABUENA</h1>
					<div class="gallery">
						<div>
							<div class="image fit flush">
								<img src="images/police.jpg" alt="police"/>
							</div>
						</div>
						<div>
							<div class="image fit flush">
								<img src="images/medal.jpg" alt="medal"/>
							</div>
						</div>
					</div>
					<section class="row">
						<h2>THE END</h2>
					</section>
                <?php } else { ?>
                    <?php if (parseName($_POST['name']) == "pedrocristobal") { ?>
						<div class="align-center padding">
							<p>¡Pero cómo va a ser Pedro, lumbreras!, Tu jefe te dice que no le hagas perder el tiempo con
								órdenes de protección a personas que ya están muertas y te recomienda que te esmeres más si no quieres
								que estos sean tus últimos minutos como policía.</p>
							<form action="oscuridad.php" method="post">
								<button type="submit" class="button fit special">Volver atrás y reintentar</button>
							</form>
						</div>
                    <?php } else { ?>
						<div class="align-center padding">
							<p>¡Vaya!, habéis enviado una patrulla a la dirección que no era y habéis dejado escapar al criminal.
								Una persona aparece muerta a las pocas horas, y Murderchef sigue suelto.
								Os destituyen del cuerpo y os pasáis vuestros días comiendo nachos con queso en el sótando de vuestros padres.
								Looosers.</p>
							<form action="oscuridad.php" method="post">
								<button type="submit" class="button fit special">Volver atrás y reintentar</button>
							</form>
						</div>
                    <?php } ?>
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
