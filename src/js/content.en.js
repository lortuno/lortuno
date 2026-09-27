/**
 * CV content — English.
 * Source: assets/Laura_Ortuno_Lopez_Senior_PHP_CV (092026).pdf
 */
window.CV_CONTENT = {
	lang: "en",
	ui: {
		nav: {
			about: "About",
			skills: "Skills",
			experience: "Experience",
			education: "Education",
			certifications: "Courses",
			contact: "Contact"
		},
		skip: "Skip to content",
		switchLang: { label: "ES", title: "Ver en español", href: "es.html" },
		themeToLight: "Switch to light theme",
		themeToDark: "Switch to dark theme",
		openMenu: "Open menu",
		closeMenu: "Close menu",
		downloadCv: "Download CV",
		contactMe: "Get in touch",
		available: "Based in Madrid · open to new challenges",
		present: "Present",
		showMore: (n) => "Show " + n + " more",
		showLess: "Show less",
		sections: {
			highlights: { kicker: "What I do", title: "Engineering that scales with the business" },
			skills: { kicker: "Toolbox", title: "Core technical skills" },
			experience: { kicker: "Career", title: "Professional experience" },
			earlier: { title: "Earlier technical experience" },
			education: { kicker: "Background", title: "Education & languages" },
			languages: "Languages",
			certifications: { kicker: "Always learning", title: "Certifications & courses" },
			contact: {
				kicker: "Contact",
				title: "Let's build something solid together",
				text: "Looking for a Tech Lead or Senior PHP / Symfony engineer for your ecommerce platform, cloud migration or backend team? I'd be happy to talk."
			}
		},
		footer: "Built with React · Hosted on GitHub Pages"
	},

	profile: {
		name: "Laura Ortuño López",
		role: "Senior PHP / Symfony Engineer & Tech Lead",
		location: "Madrid, Spain",
		email: "laura.ortunolopez@outlook.es",
		linkedin: "https://www.linkedin.com/in/lauraortunolopez",
		github: "https://github.com/lortuno",
		cv: "assets/docs/Laura_Ortuno_Lopez_Senior_PHP_CV%20(092026).pdf",
		intro: "I design, build and lead the backend of large ecommerce platforms.",
		summary: "Senior PHP / Symfony Engineer and Tech Lead with 10+ years of professional software development experience, including extensive work building and maintaining ecommerce platforms. My focus is technical leadership: Azure architecture, Terraform IaC, GitHub Actions CI/CD, technical decision-making, planning, estimation, code reviews and engineering standards."
	},

	stats: [
		{ value: "10+", label: "years in software development" },
		{ value: "PHP 8.4", label: "Symfony 7.x in production" },
		{ value: "AWS → Azure", label: "full platform migration led" },
		{ value: "3", label: "languages: ES · EN · FR" }
	],

	highlights: [
		{
			icon: "cloud",
			title: "Cloud architecture & IaC",
			text: "Leading the migration of a complete project architecture from AWS to Azure, with the target infrastructure designed in Terraform: Container Apps, Azure Functions, MySQL Flexible Server, queues, Key Vault and monitoring workbooks."
		},
		{
			icon: "pipeline",
			title: "CI/CD & DevOps",
			text: "GitHub Actions pipelines built from scratch, automated deployment workflows and containerized environments with Docker — from development to QA and production."
		},
		{
			icon: "zap",
			title: "Performance & scalability",
			text: "Slow-query monitoring, index analysis, schema optimization and usage-driven table design, combined with caching strategies using Redis, Symfony Cache and Varnish."
		},
		{
			icon: "users",
			title: "Technical leadership",
			text: "Technical point of contact for project decisions: planning, estimation, code reviews and development standards for the Thermomix and Kobold ecommerce platforms."
		}
	],

	skills: [
		{ group: "PHP & Backend", items: ["PHP 8.4", "PHP 8.3", "PHP 7.4", "Symfony 7.x", "Symfony 6.4", "Symfony 4.4", "REST APIs", "API versioning", "API documentation", "OAuth2"] },
		{ group: "Architecture", items: ["Software architecture", "Scalable backend systems", "MVC", "SOLID", "Clean code", "Design patterns", "Technical decision-making"] },
		{ group: "Database & Performance", items: ["MySQL", "Slow-query monitoring", "Indexing", "Schema design", "Usage-driven table design", "Performance optimization"] },
		{ group: "Caching & Security", items: ["Redis", "Symfony Cache", "Varnish", "OAuth2 tokens", "Form authentication"] },
		{ group: "Testing & Quality", items: ["PHPUnit", "Selenium", "Regression testing", "Automated testing", "Code reviews", "QA collaboration"] },
		{ group: "Cloud & IaC", items: ["Azure", "AWS", "Terraform", "Container Apps", "Azure Functions", "MySQL Flexible Server", "Queues", "Key Vault", "Container Registry", "Monitoring"] },
		{ group: "CI/CD & Containers", items: ["GitHub Actions", "GitLab", "Jenkins", "Docker", "Automated deployments", "Containerized environments"] },
		{ group: "Tools & Frontend", items: ["Claude", "Git", "Composer", "Linux / CLI", "macOS", "Jira", "Confluence", "JavaScript", "React", "Twig", "Sass", "LESS"] }
	],

	experience: [
		{
			company: "Vorwerk",
			context: "Thermomix & Kobold ecommerce",
			roles: [
				{
					title: "Tech Lead SW Digital Experience",
					start: "01/2026",
					end: null,
					location: "Madrid",
					stack: ["Azure", "Terraform", "GitHub Actions", "Symfony", "Redis", "Varnish", "MySQL"],
					bullets: [
						"Lead hands-on software engineering and solution architecture for the Thermomix and Kobold ecommerce platforms, combining backend development with technical leadership and architectural decision-making.",
						"Lead the migration of a complete project architecture from AWS to Azure, designing the target infrastructure with Terraform and Infrastructure as Code (IaC).",
						"Design and implement Azure infrastructure using Container Apps, Azure Functions, MySQL Flexible Server, queues, Key Vault, Container Registry and monitoring workbooks.",
						"Build GitHub Actions CI/CD pipelines from scratch, establishing automated deployment workflows and strengthening DevOps practices.",
						"Design and maintain REST APIs with versioning and API documentation, supporting structured integration and compatibility across consumers.",
						"Optimize application and database performance through slow-query monitoring, index analysis, schema optimization and usage-driven table design.",
						"Implement caching strategies using Redis, Symfony Cache and Varnish to support application performance and scalability.",
						"Lead technical planning and estimation, act as the technical point of contact for project decisions, and establish development standards through code reviews and technical guidance.",
						"Resolve critical production incidents and contribute to deployments, monitoring, automation and continuous improvement of the ecommerce platform."
					]
				},
				{
					title: "Senior PHP Developer",
					start: "11/2021",
					end: "03/2026",
					location: "Madrid",
					stack: ["PHP 8.3", "Symfony", "PHPUnit", "Selenium", "Docker", "React", "OAuth2"],
					bullets: [
						"Developed and maintained PHP/Symfony ecommerce applications in a multilingual, multi-country environment serving end users and advisor partners.",
						"Built backend solutions with PHP 8.3 and Symfony, contributing to the modernization and migration toward current language and framework versions.",
						"Designed, implemented and maintained REST APIs with API versioning and comprehensive API documentation.",
						"Built automated test coverage with PHPUnit and Selenium, supporting regression prevention and reliable software delivery.",
						"Worked with Docker and Git-based development workflows across development, QA and deployment environments.",
						"Analyzed and optimized MySQL performance by monitoring slow queries, reviewing indexes and adapting database structures to usage patterns.",
						"Redesigned the frontend with React, AJAX and JUnit testing.",
						"Implemented secure authentication mechanisms including OAuth2 tokens and form-based authentication.",
						"Collaborated with cross-functional teams on requirements, delivery, QA acceptance and technical solutions across the ecommerce platform."
					]
				}
			]
		},
		{
			company: "¡HOLA!",
			context: "Media & publishing",
			roles: [
				{
					title: "Senior Web Developer",
					start: "10/2019",
					end: "11/2021",
					location: "Madrid",
					stack: ["PHP 7.4", "Symfony 4.4", "Docker", "PHPUnit", "Jenkins", "GitLab", "jQuery"],
					bullets: [
						"Developed and maintained web applications using PHP 7.4, Symfony 4.4, Docker, PHPUnit, JavaScript and jQuery.",
						"Maintained and evolved Symfony-based applications across multiple projects and country-specific requirements.",
						"Developed automated tests with PHPUnit and supported deployment workflows through Jenkins and GitLab.",
						"Worked across backend and frontend components, applying clean-code and maintainability practices to existing codebases."
					]
				}
			]
		},
		{
			company: "InterMundial",
			context: "Travel insurance",
			roles: [
				{
					title: "Senior Full Stack Developer",
					start: "05/2019",
					end: "10/2019",
					location: "Madrid",
					stack: ["Symfony", "Twig", "Sass", "Git", "Bitbucket", "Linux"],
					bullets: [
						"Combined project coordination with hands-on software development for a travel-insurance business, translating business requirements into technical solutions.",
						"Planned projects, analyzed technical impact, organized development activities and coordinated delivery with the IT team.",
						"Developed applications using Symfony, Twig and Sass with Git and Bitbucket in a Linux environment.",
						"Promoted clean code, development best practices and improved engineering processes across the team."
					]
				}
			]
		}
	],

	earlier: [
		{
			company: "BrandValue",
			role: "Web & Frontend Developer",
			period: "05/2016 – 05/2019",
			text: "Developed and maintained PHP/JavaScript web applications in MVC/Joomla environments, working with MySQL, AJAX, ECMAScript 6, Node.js and Gulp; contributed across frontend, backend, application logic and databases within Scrum teams."
		},
		{
			company: "Pleiades Tecnología",
			role: "Consultant & Web Manager",
			period: "08/2014 – 05/2016",
			text: "Designed and maintained websites and web portals while providing technical support, user helpdesk services, software/OS deployment, technical training, VMware administration, documentation and infrastructure/server consulting for HPE partners."
		},
		{
			company: "Libertia S.L.",
			role: "System Department Scholarship",
			period: "04/2014 – 06/2014",
			text: "Provided enterprise IT support, including Windows Server 2012, WDS migration activities and technical support for Banco Pichincha."
		},
		{
			company: "Plan International",
			role: "Computing Systems Volunteer",
			period: "12/2013 – 03/2014",
			text: "Implemented a PHP-based open-source ticketing system and supported Active Directory, DNS and SMTP services."
		},
		{
			company: "ISBAN",
			role: "Bank Software Consulting Scholarship",
			period: "03/2013 – 10/2013",
			text: "Supported IT projects from requirements through production, including debugging of a currency-exchange web application."
		}
	],

	education: [
		{
			title: "Higher Technician in Networked Computer Systems Administration",
			school: "IES Virgen de la Paloma / IES Clara del Rey",
			period: "2012 – 2014"
		},
		{
			title: "Degree in Environmental Sciences",
			school: "Universidad Autónoma de Madrid",
			period: "2006 – 2010"
		}
	],

	languages: [
		{ name: "Spanish", level: "Professional", value: 100 },
		{ name: "English", level: "Professional", value: 85 },
		{ name: "French", level: "Basic", value: 30 }
	],

	certifications: [
		{ title: "The Complete Microservices & Event-Driven Architecture", issuer: "Udemy", date: "09/2026" },
		{ title: "Upgrading & What's New in Symfony 7", issuer: "SymfonyCasts", date: "08/2026" },
		{ title: "Software Development Ecosystems & Management 3.0", issuer: "Aúna Formación y Coaching", date: "04/2026" },
		{ title: "Use Case Requirements Course", issuer: "EscuelaIT", date: "03/2026" },
		{ title: "Symfony Foundation Certification", issuer: "BCS", date: "07/2025" },
		{ title: "Agile and Heavyweight Software Architectures", issuer: "EscuelaIT", date: "01/2024" },
		{ title: "Design Patterns for Fun and Proficiency", issuer: "SymfonyCasts", date: "01/2024" },
		{ title: "Laravel 2019: The Complete Guide with Real-World Projects", issuer: "Udemy", date: "10/2023" },
		{ title: "Modern Software Architecture: DDD, Events & Microservices", issuer: "Udemy", date: "04/2023" },
		{ title: "Advanced Course in Unit Testing", issuer: "EscuelaIT", date: "05/2022" },
		{ title: "Leadership and Team Management", issuer: "TP Oficina Técnica de Prevención", date: "11/2021" }
	]
};
