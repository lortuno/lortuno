/**
 * Contenido del CV — Español.
 * Fuente: src/assets/docs/Laura_Ortuno_Lopez_Senior_PHP_CV (092026).pdf
 */
window.CV_CONTENT = {
	lang: "es",
	ui: {
		nav: {
			about: "Perfil",
			skills: "Habilidades",
			experience: "Experiencia",
			education: "Formación",
			certifications: "Cursos",
			contact: "Contacto"
		},
		skip: "Saltar al contenido",
		switchLang: { label: "EN", title: "View in English", href: "../index.html" },
		themeToLight: "Cambiar a tema claro",
		themeToDark: "Cambiar a tema oscuro",
		openMenu: "Abrir menú",
		closeMenu: "Cerrar menú",
		downloadCv: "Descargar CV",
		contactMe: "Hablemos",
		available: "Madrid · abierta a nuevos retos",
		present: "Actualidad",
		showMore: (n) => "Ver " + n + " más",
		showLess: "Ver menos",
		sections: {
			highlights: { kicker: "Qué hago", title: "Ingeniería que escala con el negocio" },
			skills: { kicker: "Herramientas", title: "Habilidades técnicas" },
			experience: { kicker: "Trayectoria", title: "Experiencia profesional" },
			earlier: { title: "Experiencia técnica previa" },
			education: { kicker: "Formación", title: "Estudios e idiomas" },
			languages: "Idiomas",
			certifications: { kicker: "Aprendizaje continuo", title: "Certificaciones y cursos" },
			contact: {
				kicker: "Contacto",
				title: "Construyamos algo sólido juntos",
				text: "¿Buscas una Tech Lead o ingeniera Senior PHP / Symfony para tu plataforma ecommerce, tu migración cloud o tu equipo de backend? Estaré encantada de hablar contigo."
			}
		},
		footer: "Hecho con React · Alojado en GitHub Pages"
	},

	profile: {
		name: "Laura Ortuño López",
		role: "Ingeniera Senior PHP / Symfony & Tech Lead",
		location: "Madrid, España",
		email: "laura.ortunolopez@outlook.es",
		linkedin: "https://www.linkedin.com/in/lauraortunolopez",
		github: "https://github.com/lortuno",
		cv: "../assets/docs/Laura_Ortuno_Lopez_Senior_PHP_CV%20(092026).pdf",
		intro: "Diseño, desarrollo y lidero el backend de grandes plataformas ecommerce.",
		summary: "Ingeniera Senior PHP / Symfony y Tech Lead con más de 10 años de experiencia profesional en desarrollo de software, con amplia trayectoria construyendo y manteniendo plataformas ecommerce. Mi foco es el liderazgo técnico: arquitectura en Azure, IaC con Terraform, CI/CD con GitHub Actions, toma de decisiones técnicas, planificación, estimación, revisiones de código y estándares de ingeniería."
	},

	stats: [
		{ value: "10+", label: "años desarrollando software" },
		{ value: "PHP 8.4", label: "Symfony 7.x en producción" },
		{ value: "AWS → Azure", label: "migración completa liderada" },
		{ value: "3", label: "idiomas: ES · EN · FR" }
	],

	highlights: [
		{
			icon: "cloud",
			title: "Arquitectura cloud e IaC",
			text: "Lidero la migración de la arquitectura completa de un proyecto de AWS a Azure, con la infraestructura objetivo diseñada en Terraform: Container Apps, Azure Functions, MySQL Flexible Server, colas, Key Vault y workbooks de monitorización."
		},
		{
			icon: "pipeline",
			title: "CI/CD y DevOps",
			text: "Pipelines de GitHub Actions construidos desde cero, flujos de despliegue automatizados y entornos contenerizados con Docker, desde desarrollo hasta QA y producción."
		},
		{
			icon: "zap",
			title: "Rendimiento y escalabilidad",
			text: "Monitorización de consultas lentas, análisis de índices, optimización de esquemas y diseño de tablas según su uso real, junto con estrategias de caché con Redis, Symfony Cache y Varnish."
		},
		{
			icon: "users",
			title: "Liderazgo técnico",
			text: "Punto de contacto técnico en las decisiones del proyecto: planificación, estimación, revisiones de código y estándares de desarrollo para las plataformas ecommerce de Thermomix y Kobold."
		}
	],

	skills: [
		{ group: "PHP y Backend", items: ["PHP 8.4", "PHP 8.3", "PHP 7.4", "Symfony 7.x", "Symfony 6.4", "Symfony 4.4", "APIs REST", "Versionado de APIs", "Documentación de APIs", "OAuth2"] },
		{ group: "Arquitectura", items: ["Arquitectura de software", "Sistemas backend escalables", "MVC", "SOLID", "Clean code", "Patrones de diseño", "Decisiones técnicas"] },
		{ group: "Bases de datos y rendimiento", items: ["MySQL", "Monitorización de slow queries", "Indexación", "Diseño de esquemas", "Diseño de tablas según uso", "Optimización de rendimiento"] },
		{ group: "Caché y seguridad", items: ["Redis", "Symfony Cache", "Varnish", "Tokens OAuth2", "Autenticación por formulario"] },
		{ group: "Testing y calidad", items: ["PHPUnit", "Selenium", "Tests de regresión", "Tests automatizados", "Code reviews", "Colaboración con QA"] },
		{ group: "Cloud e IaC", items: ["Azure", "AWS", "Terraform", "Container Apps", "Azure Functions", "MySQL Flexible Server", "Colas", "Key Vault", "Container Registry", "Monitorización"] },
		{ group: "CI/CD y contenedores", items: ["GitHub Actions", "GitLab", "Jenkins", "Docker", "Despliegues automatizados", "Entornos contenerizados"] },
		{ group: "Herramientas y frontend", items: ["Claude", "Git", "Composer", "Linux / CLI", "macOS", "Jira", "Confluence", "JavaScript", "React", "Twig", "Sass", "LESS"] }
	],

	experience: [
		{
			company: "Vorwerk",
			context: "Ecommerce de Thermomix y Kobold",
			roles: [
				{
					title: "Tech Lead SW Digital Experience",
					start: "01/2026",
					end: null,
					location: "Madrid",
					stack: ["Azure", "Terraform", "GitHub Actions", "Symfony", "Redis", "Varnish", "MySQL"],
					bullets: [
						"Lidero la ingeniería de software y la arquitectura de soluciones de las plataformas ecommerce de Thermomix y Kobold, combinando desarrollo backend con liderazgo técnico y decisiones de arquitectura.",
						"Lidero la migración de la arquitectura completa de un proyecto de AWS a Azure, diseñando la infraestructura objetivo con Terraform e Infraestructura como Código (IaC).",
						"Diseño e implemento infraestructura en Azure con Container Apps, Azure Functions, MySQL Flexible Server, colas, Key Vault, Container Registry y workbooks de monitorización.",
						"Construyo desde cero pipelines de CI/CD con GitHub Actions, estableciendo flujos de despliegue automatizados y reforzando las prácticas DevOps.",
						"Diseño y mantengo APIs REST con versionado y documentación, facilitando una integración estructurada y la compatibilidad entre consumidores.",
						"Optimizo el rendimiento de la aplicación y la base de datos mediante monitorización de consultas lentas, análisis de índices, optimización de esquemas y diseño de tablas según su uso.",
						"Implemento estrategias de caché con Redis, Symfony Cache y Varnish para mejorar el rendimiento y la escalabilidad.",
						"Lidero la planificación y estimación técnica, actúo como punto de contacto técnico en las decisiones del proyecto y establezco estándares de desarrollo mediante code reviews y orientación técnica.",
						"Resuelvo incidencias críticas en producción y contribuyo a despliegues, monitorización, automatización y mejora continua de la plataforma ecommerce."
					]
				},
				{
					title: "Senior PHP Developer",
					start: "11/2021",
					end: "03/2026",
					location: "Madrid",
					stack: ["PHP 8.3", "Symfony", "PHPUnit", "Selenium", "Docker", "React", "OAuth2"],
					bullets: [
						"Desarrollo y mantenimiento de aplicaciones ecommerce en PHP/Symfony en un entorno multiidioma y multipaís, para clientes finales y asesores comerciales.",
						"Desarrollo de soluciones backend con PHP 8.3 y Symfony, contribuyendo a la modernización y migración hacia las versiones actuales del lenguaje y del framework.",
						"Diseño, implementación y mantenimiento de APIs REST con versionado y documentación completa.",
						"Cobertura de tests automatizados con PHPUnit y Selenium para prevenir regresiones y garantizar entregas fiables.",
						"Trabajo con Docker y flujos basados en Git en los entornos de desarrollo, QA y despliegue.",
						"Análisis y optimización del rendimiento de MySQL monitorizando consultas lentas, revisando índices y adaptando las estructuras de datos a los patrones de uso.",
						"Rediseño del frontend con React, AJAX y tests con JUnit.",
						"Implementación de mecanismos de autenticación seguros, incluyendo tokens OAuth2 y autenticación por formulario.",
						"Colaboración con equipos multidisciplinares en requisitos, entregas, aceptación de QA y soluciones técnicas de la plataforma ecommerce."
					]
				}
			]
		},
		{
			company: "¡HOLA!",
			context: "Medios y editorial",
			roles: [
				{
					title: "Senior Web Developer",
					start: "10/2019",
					end: "11/2021",
					location: "Madrid",
					stack: ["PHP 7.4", "Symfony 4.4", "Docker", "PHPUnit", "Jenkins", "GitLab", "jQuery"],
					bullets: [
						"Desarrollo y mantenimiento de aplicaciones web con PHP 7.4, Symfony 4.4, Docker, PHPUnit, JavaScript y jQuery.",
						"Mantenimiento y evolución de aplicaciones Symfony en múltiples proyectos con requisitos específicos por país.",
						"Desarrollo de tests automatizados con PHPUnit y soporte a los flujos de despliegue con Jenkins y GitLab.",
						"Trabajo en componentes de backend y frontend, aplicando prácticas de clean code y mantenibilidad sobre bases de código existentes."
					]
				}
			]
		},
		{
			company: "InterMundial",
			context: "Seguros de viaje",
			roles: [
				{
					title: "Senior Full Stack Developer",
					start: "05/2019",
					end: "10/2019",
					location: "Madrid",
					stack: ["Symfony", "Twig", "Sass", "Git", "Bitbucket", "Linux"],
					bullets: [
						"Combinación de coordinación de proyectos con desarrollo de software para una empresa de seguros de viaje, traduciendo requisitos de negocio en soluciones técnicas.",
						"Planificación de proyectos, análisis de impacto técnico, organización del desarrollo y coordinación de entregas con el equipo de IT.",
						"Desarrollo de aplicaciones con Symfony, Twig y Sass usando Git y Bitbucket en entorno Linux.",
						"Impulso del clean code, las buenas prácticas de desarrollo y la mejora de los procesos de ingeniería del equipo."
					]
				}
			]
		}
	],

	earlier: [
		{
			company: "BrandValue",
			role: "Desarrolladora Web y Frontend",
			period: "05/2016 – 05/2019",
			text: "Desarrollo y mantenimiento de aplicaciones web PHP/JavaScript en entornos MVC/Joomla, con MySQL, AJAX, ECMAScript 6, Node.js y Gulp; participación en frontend, backend, lógica de aplicación y bases de datos dentro de equipos Scrum."
		},
		{
			company: "Pleiades Tecnología",
			role: "Consultora y Web Manager",
			period: "08/2014 – 05/2016",
			text: "Diseño y mantenimiento de webs y portales, además de soporte técnico, helpdesk a usuarios, despliegue de software y sistemas operativos, formación técnica, administración de VMware, documentación y consultoría de infraestructura y servidores para partners de HPE."
		},
		{
			company: "Libertia S.L.",
			role: "Beca en Departamento de Sistemas",
			period: "04/2014 – 06/2014",
			text: "Soporte IT empresarial, incluyendo Windows Server 2012, tareas de migración con WDS y soporte técnico para Banco Pichincha."
		},
		{
			company: "Plan International",
			role: "Voluntaria en Sistemas Informáticos",
			period: "12/2013 – 03/2014",
			text: "Implantación de un sistema de tickets open source en PHP y soporte de servicios Active Directory, DNS y SMTP."
		},
		{
			company: "ISBAN",
			role: "Beca en Consultoría de Software Bancario",
			period: "03/2013 – 10/2013",
			text: "Apoyo a proyectos IT desde la toma de requisitos hasta producción, incluida la depuración de una aplicación web de cambio de divisas."
		}
	],

	education: [
		{
			title: "Técnico en Administración de Sistemas Informáticos en Red",
			school: "IES Virgen de la Paloma / IES Clara del Rey",
			period: "2012 – 2014"
		},
		{
			title: "Licenciada en Ciencias Ambientales",
			school: "Universidad Autónoma de Madrid",
			period: "2006 – 2010"
		}
	],

	languages: [
		{ name: "Español", level: "Profesional", value: 100 },
		{ name: "Inglés", level: "Profesional", value: 85 },
		{ name: "Francés", level: "Básico", value: 30 }
	],

	certifications: [
		{ title: "The Complete Microservices & Event-Driven Architecture", issuer: "Udemy", date: "09/2026" },
		{ title: "Upgrading & What's New in Symfony 7", issuer: "SymfonyCasts", date: "08/2026" },
		{ title: "Software Development Ecosystems & Management 3.0", issuer: "Aúna Formación y Coaching", date: "04/2026" },
		{ title: "Curso de Requisitos con Casos de Uso", issuer: "EscuelaIT", date: "03/2026" },
		{ title: "Symfony Foundation Certification", issuer: "BCS", date: "07/2025" },
		{ title: "Arquitecturas de Software Ágiles y Pesadas", issuer: "EscuelaIT", date: "01/2024" },
		{ title: "Design Patterns for Fun and Proficiency", issuer: "SymfonyCasts", date: "01/2024" },
		{ title: "Laravel 2019: The Complete Guide with Real-World Projects", issuer: "Udemy", date: "10/2023" },
		{ title: "Modern Software Architecture: DDD, Events & Microservices", issuer: "Udemy", date: "04/2023" },
		{ title: "Curso avanzado de Testing Unitario", issuer: "EscuelaIT", date: "05/2022" },
		{ title: "Liderazgo y Gestión de Equipos", issuer: "TP Oficina Técnica de Prevención", date: "11/2021" }
	]
};
