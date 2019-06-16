<!DOCTYPE html>
<html>
<head>
  	<meta charset="UTF-8">
	<meta name="author" content="lortuno">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV || Ortuno</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="icon" type="image/png" href="images/cv.png">
    <link href="css/font-awesome.min.css" rel="stylesheet" media="screen">
    <link href="css/responsive.css" rel="stylesheet" media="screen" type="text/css" />
    <link rel="stylesheet" href="js/sidr/stylesheets/jquery.sidr.dark.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/sidr/jquery.sidr.min.js"></script>
    <script src="js/smoothscroll.js"></script>
    <script src="js/handlebars-v3.0.3.js"></script>
</head>

<body>
<div id="content"  class="container-fluid"  role="main">
</div>
<script id="page-template" type="text/x-handlebars-template">
    <div class="header" id="inicio">
        <div class="container">
            <div class="logo-menu">
                <div class="logo">
                    <h1><a href="#">{{cv}}</a></h1>
                </div>
                <div id="mobile-header">
                    <a class="responsive-menu-button" href="#"><img src="images/11.png" />
                    </a>
                </div>
                <div class="menu" id="navigation">
                    <ul>
                        <li>
                            <a href="#home">{{home_menu}}</a>
                        </li>
                        <li>
                            <a href="#Studies">{{studies_menu}}</a>
                        </li>
                        <li>
                            <a href="#Experience">{{experience_menu}}</a>
                        </li>
                        <li>
                            <a href="#Portfolio">{{portfolio_menu}}</a>
                        </li>
                        <li>
                            <a href="#Contact">{{contact_menu}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <section id="banner">
        <div class="inner">
            <header>
                <a name="{{name}}"></a>
                <h2>{{myname}}</h2>
            </header>
            <p>
                <a href="index.php?lang={{url1}}">{{lang1}} </a>
                <!--<a href="/{{url1}}">{{lang1}} </a>-->
            </p>
            <br />
            <p>
                <a href="index.php?lang={{url2}}">{{lang2}} </a>
                <!--<a href="/{{url2}}">{{lang2}} </a>-->
            </p>
            <footer>
                <ul class="buttons vertical">
                    <li>
                        <a href="{{next}}" class="button fit scrolly">{{tellme}}</a>
                    </li>
                </ul>
            </footer>
        </div>
    </section>

    <div class="color-border">
    </div>

    <div class="desc" id="more">
        <div class="container">
            <h2> {{about}} </h2>
            <p> {{aboutme}}</p>
        </div>
    </div>

    <div class="Experiencia gradiente" id="Studies">
        <div class="container">
            <h3 class="text-head" style="color:gold;"> {{studies_menu}} </h3>
            <div class="Experiencia-section">
                <ul>
                    {{#each estudios_category}}
                    <li>
                        <div class="experiencia-img"><img src="{{src}}" />
                        </div>
                        <h4>{{name}}</h4> {{#each details}}
                        <p> {{description}}</p>
                        {{/each}}
                    </li>
                    {{/each}}
                </ul>
            </div>
        </div>
    </div>

    <div class="Estudios" id="Experience">
        <div class="container">
            <h3 class="text-head">{{experience_menu}}  </h3>
            <p class="box-desc"> {{desc}}</p>
            <div class="Estudios-section">
                <ul>
                    {{#each experience_category}}
                    <li>

                        <div class="story-img"><img src="{{src}}" />
                        </div>
                        <div class="story-box">

                            <h4>{{name}}</h4> {{#each details}}
                            <details>
                                <summary> {{company_name}} </summary>
                                <p> {{tasks}} </p>
                            </details>

                            {{/each}}
                        </div>
                    </li>
                    {{/each}}
                </ul>
            </div>
        </div>
    </div>
    <!--portfolio part-->
    <div class="Estudios" id="Portfolio">
        <div class="container">
            <h3 class="text-head"> {{portfolio_menu}}  </h3>
            <p class="box-desc"> {{mytech}}</p>

            <div class="Estudios-section">
                <div id="logos">
                    {{#each technologies}}
                    <img src="{{src}}" width="{{width}}" height="{{height}}" title="{{name}}" /> {{/each}}
                </div>
                <ul>
                    {{#each portfolio}}
                    <li>
                        <div class="story-img">
                            <a href="{{url}}" target="_blank"><img src="{{src}}" /></a>
                        </div>
                        <div class="story-box">
                            <h4>{{title}}</h4>
                        </div>
                    </li>
                    {{/each}}
                </ul>
            </div><!--estudios section-->
        </div><!--container-->
    </div><!--section-->

    <!--contacto-->
    <div class="Contacto" id="Contact">
        <div class="container">
            <h3 class="text-head">{{contact_menu}}</h3>
            <p class="box-desc"> {{p_parrafo}}</p>
            <div class="Contacto-section">
                <form>
                    <input type="text" name="Name" placeholder="{{name}}" />
                    <input type="email" name="email" placeholder="{{email}}" />
                    <textarea placeholder="{{message}}" rows="6"></textarea>
                    <button type="submit" class="submit">{{send}} </button>
                </form>
            </div>
        </div><!--container-->
    </div>

    <!--fin contacto-->
    <div class="color-border">
    </div>

    <div class="footer">
        <div class="container">
            <span class="ir-arriba"></span>
            <div class="infooter">
                <p class="copyright"> Copyright &copy; lortuno {{year}}. <em>{{followme}} </em>
                </p>
            </div>
            <ul class="socialmedia">
                <li>
                    <a href="{{link_linkedin}}" target="_blank"><i class="icon-linkedin"></i></a>
                </li>
                <li>
                    <a href="{{link_infojobs}}" target="_blank"><i class="icon-briefcase"></i></a>
                </li>
            </ul>
        </div>
    </div>
</script>

<!-- javascript code to fill the template -->
<!--<script> document.write('<script src="js/page_' + lang + '.js"><' + '/script>');-->
</script>
<?php  if (isset($_GET['lang']) && $_GET['lang']=="en") {?>
    <script src="js/page_en.js"></script><?
        } else { ?>
    <script src="js/page_es.js"></script><?
        }
?>
<script>
        /*
var Url = window.location.pathname;
var idioma=document.getElementById('idioma');
var language="";
if (Url=="en.html") {
    language="en"
}
else {
    language="es"
}
/*document.documentElement.lang*/
/*if(language=='en')
{
    document.write('<script src="js/page_'+language+'.js"><' + '/script>');
}
else
{
    document.write('<script src="js/page_'+language+'.js"><' + '/script>');
}*/
</script>

<!-- <script src="js/page_en.js"></script>-->
<!-- javascript for responsive and up buttons -->
<script type="text/javascript">
    $(document)
            .ready(function() {
                $('#simple-menu')
                        .sidr({
                            side: 'right'
                        });
            });
    $('.responsive-menu-button')
            .sidr({
                name: 'sidr-main',
                source: '#navigation',
                side: 'right'
            });
    /*boton ir arriba*/
    $(document)
            .ready(function() {

                $('.ir-arriba')
                        .click(function() {
                            $('body, html')
                                    .animate({
                                        scrollTop: '0px'
                                    }, 300);
                        });

                $(window)
                        .scroll(function() {
                            if($(this)
                                            .scrollTop() > 0) {
                                $('.ir-arriba')
                                        .slideDown(300);
                            }
                            else {
                                $('.ir-arriba')
                                        .slideUp(300);
                            }
                        });

            }); /*hasta aki*/


</script>
<script>
    /*polifill*/
    (function(e,t){function r(e){var t=null;if(e.firstChild.nodeName!="#text"){return e.firstChild}else{e=e.firstChild;do{e=e.nextSibling}while(e&&e.nodeName=="#text");return e||null}}function i(e){var t=e.nodeName.toUpperCase();if(t=="DETAILS"){return false}else if(t=="SUMMARY"){return true}else{return i(e.parentNode)}}function s(e){var n=e.type=="keypress",r=e.target||e.srcElement;if(n||i(r)){if(n){n=e.which||e.keyCode;if(n==32||n==13){}else{return}}var s=this.getAttribute("open");if(s===null){this.setAttribute("open","open")}else{this.removeAttribute("open")}setTimeout(function(){t.body.className=t.body.className},13);if(n){e.preventDefault&&e.preventDefault();return false}}}function o(){var e=t.createElement("style"),n=t.getElementsByTagName("head")[0],r=e.innerText===undefined?"textContent":"innerText";var i=["details{display: block;}","details > *{display: none;}","details.open > *{display: block;}","details[open] > *{display: block;}","details > summary:first-child{display: block;cursor: pointer;}",'summary:before{content: "▶ ";}',"details[open]{display: block;}"];f=i.length;e[r]=i.join("\n");n.insertBefore(e,n.firstChild)}if("open"in t.createElement("details"))return;var n=function(){if(t.addEventListener){return function(t,r,i){if(t&&t.nodeName||t===e){t.addEventListener(r,i,false)}else if(t&&t.length){for(var s=0;s<t.length;s++){n(t[s],r,i)}}}}else{return function(t,r,i){if(t&&t.nodeName||t===e){t.attachEvent("on"+r,function(){return i.call(t,e.event)})}else if(t&&t.length){for(var s=0;s<t.length;s++){n(t[s],r,i)}}}}}();var u=t.getElementsByTagName("details"),a,f=u.length,l,c=null,h=t.createElement("summary");h.appendChild(t.createTextNode("Details"));while(f--){c=r(u[f]);if(c!=null&&c.nodeName.toUpperCase()=="SUMMARY"){}else{c=t.createElement("summary");c.appendChild(t.createTextNode("Details"));if(u[f].firstChild){u[f].insertBefore(c,u[f].firstChild)}else{u[f].appendChild(c)}}l=u[f].childNodes.length;while(l--){if(u[f].childNodes[l].nodeName==="#text"&&(u[f].childNodes[l].nodeValue||"").replace(/\s/g,"").length){a=t.createElement("text");a.appendChild(u[f].childNodes[l]);u[f].insertBefore(a,u[f].childNodes[l])}}c.legend=true;c.tabIndex=0}t.createElement("details");n(u,"click",s);n(u,"keypress",s);o()})(window,document)
</script>
</body>
</html>
