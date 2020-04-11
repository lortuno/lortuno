/**
 * Created by SH on 07/05/2016.
 */
var today = new Date();
var yyyy = today.getFullYear();
today = yyyy;
// grab our template code from the DOM
var source = $('#page-template')
  .html(); //paso 1

// compile the template so we can use it
var template = Handlebars.compile(source); //paso2

// create some data
var data = {
    /*menus*/
    home_menu: 'PERSONAL',
    studies_menu: 'ESTUDIOS',
    experience_menu: 'EXPERIENCIA',
    portfolio_menu: 'PORTFOLIO',
    contact_menu: 'CONTACTO',
    /*next content*/
    myname: 'Laura Ortu\u00F1o L\u00F3pez',
    url1: 'es',
    url2: 'en',
    lang1: 'Espa\u00F1ol',
    lang2: 'Ingl\u00E9s',
    next: '#More',
    tellme: 'Saber m\u00E1s',
    cv: 'MI CV',
    about: 'Sobre m\u00ED',
    mytech: 'Tecnolog\u00EDas que domino.',
    link_linkedin: 'https://es.linkedin.com/in/lauraortunolopez',
    link_infojobs: 'https://www.infojobs.net/laura-ortuno-lopez.prf',
    aboutme: 'Actualmente trabajando en una revista de entretenimiento internacional. Me dedico a la programaci\u00F3n, ' +
      'arquitectura y maquetaci\u00F3n web, especialmente en la parte de lógica Backend. ' +
      'Me considero capacitada para llevar un equipo de trabajo, entender las necesidades del cliente y diferenciar entre urgente e importante a la hora de priorizar proyectos e incidencias.' +
      'Tengo experiencia como programadora tanto en la parte FRONT como BACKEND y estoy interesada en la mejora continua y la puesta en marcha de nuevas tecnologías y posibilidades.' +
      ' Por ello estoy abierta a proyectos que me supongan un nuevo reto en cuanto a innovación y calidad.',
    p_parrafo: 'Si te interesa mi curriculum puedes ponerte en contacto conmigo a trav\u00E9s de este formulario.',
    year: today,
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    send: 'Enviar',
    desc: 'Puestos en los que he trabajado.',
    estudios_category: [
        {
            name: 'UAM',
            src: 'images/uam.png',
            details: [
                {
                    description: 'Licenciada en Ciencias Ambientales (2006-2010).[Universidad Aut\u00F3noma de Madrid] .'
                }
            ]
        },
        {
            name: 'IMF',
            src: 'images/imf.jpg',
            details: [
                {
                    description: 'Master oficial en Gesti\u00F3n Integrada de Prevenci\u00F3n de riesgos laborales, calidad y medio ambiente (ISO and OHSAS auditories) (2010-2011, 1800 hours) [CEU-IMF].'
                }
            ]
        },
        {
            name: 'FP',
            src: 'images/fp.gif',
            details: [
                {
                    description: 'Formaci\u00F3n Profesional Superior en Administraci\u00F3n de Sistemas inform\u00E1ticos en Red (media 9,1) [Diploma de excelencia] (2013-2014) [IES Virgen de la Paloma / Clara del Rey ].'
                }
            ]
        },
        {
            name: 'Other Courses',
            src: 'images/53.jpg',
            details: [
                {
                    description: 'Symfony 4: The whole path'
                },
                {
                    description: 'Course: Clean Code: Writing code for humans'
                },
                {
                    description: 'ES6 for everyone'
                },
                {
                    description: '	HTML, CSS &JS for developers ( Johns Hopkins University)'
                },
                {
                    description: 'Responsive Web Design (Coursera)'
                },
                {
                    description: 'PCL for Facilitators & HP Certified Instructor (HPE)'
                },
                {
                    description: '	Building Server Solutions (HPE)'
                },
                {
                    description: '	HP3-F18: HP OneView & HP Oneview 1.20 course  (HPE)'
                },
                {
                    description: '	Course: Community Manager (Aeprosome)'
                },
                {
                    description: '	Course: CCNA (CISCO)'
                },
                {
                    description: '	MICROSOFT IT and IT essentials (Microsoft)'
                },
                {
                    description: '	Course: Excel ( HEDIMA)'
                },
                {
                    description: '	Course: Autocad (HEDIMA)'
                }
            ]
        }

    ],

    experience_category: [
        {
            name: 'Consultora',
            src: 'images/consultoria.jpg',
            details: [
                {
                    company_name: 'Pleiades',
                    tasks: 'Labores de consultor\u00EDa de servidores HPE, impartiendo formaci\u00F3n espec\u00EDfica tanto de cursos oficiales como a medida, y presentaciones preventa a clientes y partners, redacci\u00F3n de documentos y manuales, grabaci\u00F3n y edici\u00F3n de webinars, instalaci\u00F3n de piezas, firmware, sistemas operativos y despliegue y mantenimiento de m\u00E1quinas virtuales.'
                },
                {
                    company_name: 'ISBAN',
                    tasks: 'Consultora inform\u00E1tica para Banca (Santander S.A) en gesti\u00F3n de proyectos para la implantaci\u00F3n de aplicaciones desde su desarrollo (PRODUBAN) hasta la entrega con el cliente.'
                },
                {
                    company_name: 'CRRL',
                    tasks: 'Consultora en pr\u00E1cticas en el \u00E1mbito de Prevenci\u00F3n de riesgos laborales, elaborando y supervisando el manual y la pol\u00EDtica de prevenci\u00F3n para la adaptaci\u00F3n a la OHSAS 18001 de la empresa.'
                }
            ]
        },
        {
            name: 'Help-Desk',
            src: 'images/14.jpg',
            details: [
                {
                    company_name: 'Pleiades',
                    tasks: 'Supervisi\u00F3n e implementaci\u00F3n de instalaciones de piezas en servidores enracables y blades, actualizaci\u00F3n de firmware, instalaci\u00F3n de sistemas operativos y despliegue y mantenimiento de m\u00E1quinas virtuales.'
                },
                {
                    company_name: 'Libertia',
                    tasks: 'Colaboradora del \u00E1rea de soporte del Banco Pichincha como externa de Libertia S.L, resolviendo incidencias de manera remota y maquetando equipos (Windows, Teamviewer y WDS)'
                },
                {
                    company_name: 'Plan Internacional',
                    tasks: 'Colaboradora del \u00E1rea de soporte de PIE para mantenimiento de equipos e impresoras.'
                }
            ]
        },
        {
            name: 'Programadora',
            src: 'images/18.jpg',
            details: [
                {
                    company_name: 'HOLA',
                    tasks: 'Enfocada a backend development (con Symfony y docker) para desarrollar las webs de la compañía.'
                },
                {
                    company_name: 'Intermundial',
                    tasks: 'Desarrolladora web Senior Full Stack, (front-end & back-end, con Symfony y ES6) para conducir la página web de la empresa a nuevos niveles de performance.'
                },
                {
                    company_name: 'Brand Value',
                    tasks: 'Desarrollo y maquetaci\u00F3n Web (Front-end & back-end, con PHP, CSS3, HTML5, MYSQL y JavaScript) para mantener y mejorar la plataforma actual de promociones y valoraci\u00F3n de productos de Monavislerendgratuit.com. Tambi\u00E9n implementando procedimientos de minificaci\u00F3n y procesado de less y js para aumentar el rendimiento en entornos de cargas exigentes y con una importante base de datos.'
                },
                {
                    company_name: 'Pleiades',
                    tasks: 'Desarrollo Web (front-end y back-end, en PHP, MYSQL y HTML y entorno linux (CentOS) para; rcreaci\u00F3n de la Web corporativa, implementaci\u00F3n de una nueva herramienta Intranet para gesti\u00F3n de la compa\u00F1\u00EDa tanto para formularios de entrada como informes de salida, y colaboraci\u00F3n en un portal de contenidos para subida y descarga de archivos de usuarios registrados.'
                },

                {
                    company_name: 'Plan Internacional',
                    tasks: 'Implementaci\u00F3n del sistema de incidencias con software libre en lenguaje PHP-MYSQL (xampp), as\u00ED como de la automatizaci\u00F3n de tickets y correos.'
                },
                {
                    company_name: 'ISBAN',
                    tasks: 'Testing de web de venta de divisas, con acceso a la base de datos para querys de chequeo.'
                }
            ]
        }
    ],
    portfolio: [
        {
            src: 'images/pleiades.png',
            title: 'Pleiades Corporativa',
            url: 'http://www.pleiades-ti.com/eng/home/'
        },
        {
            src: 'images/pbc.png',
            title: 'Pleiades Business Backend',
            url: 'https://pbc.plds.es'
        },
        {
            src: 'images/webinars_foto.png',
            title: 'Portal contenidos Pleiades',
            url: 'https://portal.plds.es'
        },
        {
            src: 'images/distrito22.jpg',
            title: 'Distrito22',
            url: 'https://distrito22.org'
        },
        {
            src: 'images/cumapp.png',
            title: 'Estad\u00EDsticas Cumapp',
            url: 'http://www.cumapp.org/estadisticas/cumappalminuto.php'
        },
        {
            src: 'images/dcl.png',
            title: 'Dental Ciudad Lineal',
            url: 'http://www.dentalciudadlineal.com'
        },
        /*{
            src: "images/paire.png",
            title: "Bisuter\u00EDa Pair\u00E9",
            url: "http://www.paire.esnuestraweb.com"
        },*/
        {
            src: 'images/calendar_mon.png',
            title: 'Monavislerendgratuit',
            url: 'https://www.monavislerendgratuit.com'
        },
        {
            src: 'images/tata.png',
            title: 'Opa! Ta-Ta',
            url: 'https://opa.shopadvizor.com.uy'
        },
        {
            src: 'images/admin.png',
            title: 'Administrator TrialPanel',
            url: 'http://www.monavislerendgratuit.com/administrator'
        },
        {
            src: 'images/dulcescavi.png',
            title: 'Dulces Cavi',
            url: 'http://dulcescavi.wix.com/Dulcescavi'
        },
        {
            src: 'images/escape.png',
            title: 'Lortuno',
            url: 'http://www.lortuno.mipropia.com/escape'
        },
        {
            src: 'images/hola.png',
            title: 'HOLA',
            url: 'https://www.hola.com/cocina/recetas/20200331164495/video-receta-pollo-ajillo/'
        }
    ],
    technologies: [

        {
            width: '100px',
            heigth: '100px',
            name: 'PHPStorm',
            src: 'https://www.stickpng.com/assets/images/584816c8cef1014c0b5e4987.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Symfony',
            src: "https://lineadecodigo.com/wp-content/uploads/2019/04/symfony.png"
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'VMware',
            src: 'http://img03.deviantart.net/c792/i/2012/047/c/b/vmware_vsphere_client_high_def_icon_by_flakshack-d4o96dy.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Photoshop',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Adobe_Photoshop_CS6_icon.svg/100px-Adobe_Photoshop_CS6_icon.svg.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'PHP',
            src: 'https://webmentor.org/blog_images/php-logo.png'
        },
        {
            width: '100px',
            heigth: '90px',
            name: 'HTML5',
            src: 'https://www.webreflection.co.uk/img/html5.svg'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'MySql',
            src: 'http://www.anerbarrena.com/wp-content/uploads/2015/06/mysql.jpg'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Filezilla',
            src: 'https://i0.wp.com/organicweb.com.au/wp-content/uploads/2011/08/FileZilla-220x350.png?resize=350%2C220&quality=96&strip=all&ssl=1'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Git',
            src: 'https://miro.medium.com/max/480/1*zzvdRmHGGXONZpuQ2FeqsQ.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Office 365',
            src: 'https://videotron.com/vtrn/images/products/fr_final/hebergement/office-365/office-365_grande.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Gulp',
            src: 'https://www.returngis.net/wp-content/uploads/2016/06/gulp-logo.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Teamviewer',
            src: 'http://www.teamviewer.com/images/opengraph/teamviewer-icon200x200.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'JQuery',
            src: 'http://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2013/07/jQuery_css3_logo.jpg'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Jira',
            src: 'https://www.prodpad.com/wp-content/uploads/2013/05/LOGO_JIRA1.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Redmine',
            src: 'https://blog.desdelinux.net/wp-content/uploads/2013/05/redmine.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Node',
            src: 'https://cdn1.altiria.com/wp-content/uploads/2017/03/node-logo.jpg'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Postman',
            src: 'https://www.getpostman.com/img/v2/logo-glyph.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Swagger',
            src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'PatternLab',
            src: 'https://raw.githubusercontent.com/pattern-lab/patternlab-node/master//patternlab.png'
        },
        {
            width: '100px',
            heigth: '100px',
            name: 'Handlebars',
            src: 'https://cdn.tutsplus.com/net/uploads/legacy/2143_handlebars/handlebars-thumb.jpg'
        }

    ]

};

// generate HTML from the data
var html = template(data); //paso 3
// add the HTML to the content div
$('#content')
  .html(html); //paso 4
