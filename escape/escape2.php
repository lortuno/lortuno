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
                if ($_POST['password'] === 'tenedoR') { ?>
					<p>Habéis desbloqueado la tablet. Al hacerlo veis el email abierto con un mensaje destacado en pantalla.
						Para entenderlo miráis inmediatamente el historial de las últimas ubicaciones visitadas. Curiosamente,
						todas coinciden con localizaciones en las que murderchef ha matado con su modus operandi.</p>
					<section id="three" class="wrapper">
						<div class="spotlight alt">
							<div class="image flush"><a href="images/historial.png" download>
									<img src="images/historial.png" alt="maps"/>
								</a>
							</div>
							<div class="inner">
								<h3>Mensaje de: Anónimo</h3>
								<p>ñs vsds rdys urmfp rm ñs dohirmyr fotrvvopm.
									Br im nñpwir jsvos fpmfr giodyr rm kimop, fpd nñpwird jsvos
									fpmfr giodyr rm dr`yor,ntr. Ims ,smxsms frdfr yi tiys fr ,sup.
									Fpd vsdsd fotrvvopm yi bodoys fr sntoñ.
									Mpd br,pd `tpmyp.</p>
							</div>
						</div>
					</section>
					<section class="special align-center padding">
						<h3>Qué dirección vais a tomar ahora:</h3>
						<form action="escape3.php" method="post">
							<div class="align-center">
								<input type="radio" id="optionOne" name="direction" value="1">
								<label for="optionOne">Arriba derecha abajo arriba arriba derecha izquierda</label>
							</div>
							<div class="align-center">
								<input type="radio" id="optionTwo" name="direction" value="2">
								<label for="optionTwo">Arriba derecha arriba derecha abajo arriba izquierda</label>
							</div>
							<div class="align-center">
								<input type="radio" id="optionThree" name="direction" value="3">
								<label for="optionThree">Arriba derecha abajo arriba izquierda arriba derecha</label>
							</div>
							<div class="align-center">
								<input type="radio" id="optionFour" name="direction" value="4">
								<label for="optionFour">Arriba izquierda arriba derecha abajo arriba derecha</label>
							</div>

							<div class="row margin-top pull-right">
								<button class="button alt" type="submit">Aceptar</button>
							</div>
						</form>
					</section>
                <?php } else { ?>
					<div class="align-center padding">
						<p>Contraseña incorrecta</p>
						<a href="index.php" target="_self">Volver atrás</a>
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
