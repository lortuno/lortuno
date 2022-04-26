/**
 * Created by SH on 07/05/2016.
 */
var today = new Date();
var yyyy = today.getFullYear();
today = yyyy;
// grab our template code from the DOM
var source = $("#page-template")
	.html(); //paso 1

// compile the template so we can use it
var template = Handlebars.compile(source); //paso2

// create some data
var data = {
	/*menus*/
	home_menu: "PERSONAL",
	studies_menu: "STUDIES",
	experience_menu: "EXPERIENCE",
	portfolio_menu: "PORTFOLIO",
	contact_menu: "CONTACT",
	/*next content*/
	myname: "Laura Ortu\u00F1o L\u00F3pez",
	url1: "es",
	url2: "en",
	lang1: "Spanish",
	lang2: "English",
	next: "#more",
	tellme: "Tell me more",
	cv: "MY CV",
	mytech: "Technologies I manage.",
	link_linkedin: "https://es.linkedin.com/in/lauraortunolopez",
	link_infojobs: "https://www.infojobs.net/laura-ortuno-lopez.prf",
	aboutme: "Currently working on a leading cuisine company, with market in Spain, Germany, France, among others. " +
	"My tasks are backend oriented, using symfony, docker and gitlab, to mantain and improve both the API and the admin area for profiles." +
	"Also implement gitlab steps, testing and frontend requirements such as js, twigs or email templates" +
	"My background with a bachelor and master's degree completes my profile with a more holistic and disciplined way of working, that allows me to be a project manager having a more complete perspective of the company beyond the programming part. " +
	"I'm clever, thorough and good at writing documents, both in english and spanish (and currently improving my french). I consider myself imaginative, responsible, and hard working, and I'm searching for an opportunity to grow my creative skills in a modern and professional environment.",
	name: "Name",
	email: "Email",
	message: "Message",
	send: "Send",
	p_parrafo: "If you're interested in my resume, you can contact me through this form.",
	year: today,
	desc: "Positions I've worked in",
	estudios_category: [
		{
			name: "UAM",
			src: "images/uam.png",
			details: [
				{
					description: "Bachelor's degree in Environmental Science  (2006-2010).[Universidad Aut\u00F3noma de Madrid] ."
				}
			]
		},
		{
			name: "IMF",
			src: "images/imf.jpg",
			details: [
				{
					description: "Master's degree in Management of Risk Prevention, Quality and Environment (ISO and OHSAS auditories) (2010-2011, 1800 hours) [CEU-IMF]."
				}
			]
		},
		{
			name: "FP",
			src: "images/fp.gif",
			details: [
				{
					description: "Systems and Network management. (average marks A++) [Diploma de excelencia] (2013-2014) [IES Virgen de la Paloma / Clara del Rey ]."
				}
			]
		},
		{
			name: "Other Courses",
			src: "images/53.jpg",
			details: [
				{
					description: "Symfony 4: The whole path"
				},
				{
					description: "Course: Clean Code: Writing code for humans"
				},
				{
					description: "ES6 for everyone"
				},
				{
					description: "HTML, CSS &JS for developers ( Johns Hopkins University)"
				},
				{
					description: "Responsive Web Design (Coursera)"
				},
				{
					description: "PCL for Facilitators & HP Certified Instructor (HPE)"
				},
				{
					description: "	Building Server Solutions (HPE)"
				},
				{
					description: "	HP3-F18: HP OneView & HP Oneview 1.20 course  (HPE)"
				},
				{
					description: "	Course: Community Manager (Aeprosome)"
				},
				{
					description: "	Course: CCNA (CISCO)"
				},
				{
					description: "	MICROSOFT IT and IT essentials (Microsoft)"
				},
				{
					description: "	Course: Excel ( HEDIMA)"
				},
				{
					description: "	Course: Autocad (HEDIMA)"
				}
			]
		}

	],

	experience_category: [
		{
			name: "Consulting",
			src: "images/consultoria.jpg",
			details: [
				{
					company_name: "Pleiades",
					tasks: "Server consulting for HPE partners, assisting in presales meetings, giving specific formation to clients including official courses, preparing documentation, editing and supervising webinars..."
				},
				{
					company_name: "ISBAN",
					tasks: "Computing consultant for bank, (Santander S.A)in projects management of apps from its development to the delivery with client, understanding and ensuring his needs."
				},
				{
					company_name: "CRRL",
					tasks: "Writing and supervising the OHSAS 18001 manual of Risks Prevention for a health company."
				}
			]
		},
		{
			name: "Help-Desk",
			src: "images/14.jpg",
			details: [
				{
					company_name: "Pleiades",
					tasks: "Installing parts of rack servers and blades, updating firmware, operating systems, deploying and maintaining virtual machines..."
				},
				{
					company_name: "Libertia",
					tasks: "This company works on technical support and solving incidences at professional level for different businesses. I did my scholarship with them collaborating with support team at Pichincha Bank, both in person and remotely, and implementing a project with Windows Server 2012 and WDS to migrate all operative systems from Windows XP to newer supported OS."
				},
				{
					company_name: "Plan Internacional",
					tasks: "Member of the helpdesk department of PIE to manage and maintain devices and printers."
				}
			]
		},
		{
			name: "Programmer",
			src: "images/18.jpg",
			details: [
				{
					company_name: 'Vorwerk',
					tasks: 'Focused on backend development (with Symfony and docker) to develop the company profiles backend and api.'
				},
				{
					company_name: "HOLA",
					tasks: "Special focus on backend development (with Symfony and docker) to develop the company websites."
				},
				{
					company_name: "Intermundial",
					tasks: "Full Stack Web development (front-end & back-end, with Symfony and ES6) to develop the company web page to new levels of performance."
				},
				{
					company_name: "Brand Value",
					tasks: "Full Stack Web development (front-end & back-end, with PHP, CSS, MYSQL and JavaScript) to maintain and enhance the platform for products promotions and opinions from users of ShopAdvizor websites net. Also learning procedures of web performance optimization with less and js to work in a demanding and with a huge database environment."
				},
				{
					company_name: "Pleiades",
					tasks: "Web development (front-end & back-end, with PHP, MYSQL and LAMPP (CentOS) to; creating the corporative web, deploying a new tool to introduce information on the database such as activities, contacts, expenses, but also to get it out in tables and worksheets.  I also helped in publishing a portal to share contents and upload and download files just for registered users."
				},

				{
					company_name: "Plan Internacional",
					tasks: "Development of a Ticket system based on free software and written in PHP-MYSQL (xampp), which I had to link with the mailing properties in a windows environment."
				},
				{
					company_name: "ISBAN",
					tasks: "Testing a web for selling currencies, having access to database for basic queries for checking issues."
				}
			]
		}
	],
	portfolio: [
		{
			src: "images/pleiades.png",
			title: "Pleiades Corporativa",
			url: "http://www.pleiades-ti.com/eng/home/"
		},
		{
			src: "images/pbc.png",
			title: "Pleiades Business Backend",
			url: "https://pbc.plds.es"
		},
		{
			src: "images/webinars_foto.png",
			title: "Portal contenidos Pleiades",
			url: "https://portal.plds.es"
		},
		{
			src: "images/distrito22.jpg",
			title: "Distrito22",
			url: "https://distrito22.org"
		},
		{
			src: "images/cumapp.png",
			title: "Estad\u00EDsticas Cumapp",
			url: "http://www.cumapp.org/estadisticas/cumappalminuto.php"
		},
		{
			src: "images/dcl.png",
			title: "Dental Ciudad Lineal",
			url: "http://www.dentalciudadlineal.com"
		},
		/*{
			src: "images/paire.png",
			title: "Bisuter\u00EDa Pair\u00E9",
			url: "http://www.paire.esnuestraweb.com"
		},*/
		{
			src: "images/calendar_mon.png",
			title: "Monavislerendgratuit",
			url: "https://www.monavislerendgratuit.com"
		},
		{
			src: "images/tata.png",
			title: "Opa! Ta-Ta",
			url: "https://opa.shopadvizor.com.uy"
		},
		{
			src: "images/admin.png",
			title: "Administrator TrialPanel",
			url: "http://www.monavislerendgratuit.com/administrator"
		},
		{
			src: "images/dulcescavi.png",
			title: "Dulces Cavi",
			url: "http://dulcescavi.wix.com/Dulcescavi"
		},
		{
			src: "images/escape.png",
			title: "Lortuno",
			url: "http://lortuno.lovestoblog.com/escape"
		},
		{
			src: "images/hola.png",
			title: "HOLA",
			url: "https://www.hola.com/cocina/recetas/20200331164495/video-receta-pollo-ajillo/"
		}
	],
	technologies: [
		{
			width: "100px",
			heigth: "100px",
			name: "PHPStorm",
			src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/PhpStorm_Icon.svg"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Symfony",
			src: "https://lineadecodigo.com/wp-content/uploads/2019/04/symfony.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "VMware",
			src: "http://img03.deviantart.net/c792/i/2012/047/c/b/vmware_vsphere_client_high_def_icon_by_flakshack-d4o96dy.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Photoshop",
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Adobe_Photoshop_CS6_icon.svg/100px-Adobe_Photoshop_CS6_icon.svg.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "PHP",
			src: "https://webmentor.org/blog_images/php-logo.png"
		},
		{
			width: "100px",
			heigth: "90px",
			name: "HTML5",
			src: "https://www.webreflection.co.uk/img/html5.svg"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "MySql",
			src: "http://www.anerbarrena.com/wp-content/uploads/2015/06/mysql.jpg"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Filezilla",
			src: "https://i0.wp.com/organicweb.com.au/wp-content/uploads/2011/08/FileZilla-220x350.png?resize=350%2C220&quality=96&strip=all&ssl=1"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Git",
			src: "https://miro.medium.com/max/480/1*zzvdRmHGGXONZpuQ2FeqsQ.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Office 365",
			src: "https://videotron.com/vtrn/images/products/fr_final/hebergement/office-365/office-365_grande.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Gulp",
			src: "https://www.returngis.net/wp-content/uploads/2016/06/gulp-logo.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Teamviewer",
			src: "http://www.teamviewer.com/images/opengraph/teamviewer-icon200x200.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "JQuery",
			src: "http://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2013/07/jQuery_css3_logo.jpg"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Jira",
			src: "https://www.prodpad.com/wp-content/uploads/2013/05/LOGO_JIRA1.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Redmine",
			src: "https://blog.desdelinux.net/wp-content/uploads/2013/05/redmine.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Node",
			src: "https://cdn1.altiria.com/wp-content/uploads/2017/03/node-logo.jpg"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Postman",
			src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Swagger",
			src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "PatternLab",
			src: "https://raw.githubusercontent.com/pattern-lab/patternlab-node/master//patternlab.png"
		},
		{
			width: "100px",
			heigth: "100px",
			name: "Handlebars",
			src: "https://cdn.tutsplus.com/net/uploads/legacy/2143_handlebars/handlebars-thumb.jpg"
		}

	]

};

// generate HTML from the data
var html = template(data); //paso 3
// add the HTML to the content div
$('#content')
	.html(html); //paso 4
