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
                if ($_POST['direction'] === 4) { ?>
					<p>Llegais a un chalet en las afueras, en una calle tranquila llena de adosados. Accedeis por la puerta de atras, pistola en alto,
						pero nadie acude en vuestra llamada. Al entrar en el salon veis los restos de una partida de poker clandestina. Han dejado la
						partida sobre la mesa con las fichas y han salido a medias y han salido corriendo por algun motivo no hace mucho. Parece la
						pista hacia su siguiente movimiento. A que jugador hay que perseguir</p>
					<section id="three" class="wrapper">
						<div class="spotlight alt">
							<div class="image flush"><img src="escape/images/historial.png" alt="maps"/></div>
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
					<section class="special align-center padding container">
						<h3>Qué jugador vais a perseguir:</h3>
						<form action="escape4.php" method="post">
							<input type="radio" id="one" name="player" value="1">
							<label for="one">Julio Sánchez</label><br>
							<input type="radio" id="two" name="player" value="2">
							<label for="two">David Sebastián</label><br>
							<input type="radio" id="three" name="player" value="3">
							<label for="three">Amador Pérez</label><br>
							<input type="radio" id="four" name="player" value="4">
							<label for="four">Roberto Aguilar</label><br>

							<div class="row margin-top pull-right">
								<button class="button alt" type="submit">Enviar</button>
							</div>
						</form>
					</section>
                <?php } else { ?>
					<div class="align-center padding">
						<p>¡Vaya!, habeis ido a la direccion que no era y habeis perdido al criminal. Os destituyen del cuerpo y os pasais vuestros días
							comiendo doritos en la penumbra de vuestro cuarto. Looosers.</p>
						<form action="escape2.php" method="post">
							<input type="hidden" name="password" value="tenedoR">
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
		&copy; lortuno. All rights reserved. Thans for: Images <a href="https://unsplash.com">Unsplash</a> Design <a href="https://templated.co">TEMPLATED</a>
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
