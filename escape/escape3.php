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
                if ($_POST['direction'] === "4") { ?>
					<p>Llegáis a un chalet en las afueras, en una calle tranquila llena de adosados. Accedéis por la puerta de atrás, pistola en alto,
						pero nadie acude en vuestra busca. Al entrar en el salón veis los restos de una partida de póker clandestina. Han dejado las
						cartas sobre la mesa con las fichas de la última jugada (y sus sitios llevan sus nombres como si los hubieran repartido
						aleatoriamente antes de jugar, lo cual os resulta extremadamente útil) pero han desaparecido por algún motivo no hace mucho.
						La sala está un poco revuelta, parece que hubo una pelea. Descubrir qué ha pasado es la única manera de averiguar su siguiente
						movimiento. Daros prisa, ¡se os acaba el tiempo! </p>
					<section id="three" class="wrapper">
						<div class="spotlight alt">
							<div class="image flush">
								<a href="images/poker_table.jpg" download>
									<img src="images/poker_table.jpg" alt="poker"/>
								</a>
							</div>
							<div class="inner">
								<h3>Baraja</h3>
								<p title="Sin embargo, hay una carta que falta" rel="tooltip">El mazo consta, contando con las cartas de la
									mesa, de 54
									cartas. Los comodines se han dejado apartados para este tipo de poker.</p>
							</div>
						</div>
					</section>
					<section class="special margin-top padding">
						<details>
							<summary>Estáis nerviosos, apoyaros en vuestra amiga Tina, que nunca falla.</summary>
							<p>Sus dotes de observación le llevan a resaltar que el número de cartas no cuadran ¿alguien ha hecho trampas?.</p>
						</details>
					</section>
					<section class="special align-center padding">
						<h3>Qué jugador vais a perseguir:</h3>
						<form action="escape4.php" method="post">
							<input type="radio" id="_one" name="player" value="1">
							<label for="_one">Julio Sánchez</label><br>
							<input type="radio" id="_two" name="player" value="2">
							<label for="_two">David Sebastián</label><br>
							<input type="radio" id="_three" name="player" value="3">
							<label for="_three">Amador Pérez</label><br>
							<input type="radio" id="_four" name="player" value="4">
							<label for="_four">Roberto Aguilar</label><br>

							<div class="row margin-top pull-right">
								<button class="button alt" type="submit">Enviar</button>
							</div>
						</form>
					</section>
                <?php } else { ?>
					<div class="align-center padding">
						<p>¡Vaya!, habeis seguido al criminal que no era y habéis perdido el rastro de Murdechef. Os destituyen del cuerpo y os pasáis
							vuestros
							días
							comiendo doritos en la penumbra de vuestro cuarto. Looosers.</p>
						<form action="escape2.php" method="post">
							<input type="hidden" name="password" value="TenedoR">
							<button type="submit" class="button fit special">Volver atrás y reintentar</button>
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
<script src="assets/js/tooltip.js"></script>

</body>
</html>
