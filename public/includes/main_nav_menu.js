

function activate_main_menu() {
	
		
activate_sub_menu();


 document.getElementById("myTopnav").innerHTML = '<a href="/home"    id="home_item">HOME</a>'+ 
												'<a href="/carros"   id="carros_item">CARROS</a>'+
												' <a href="/motos"   id="motos_item">MOTOS</a>'+
												'<a href="/bikes"    id="bikes_item">BIKES</a>'+
												'<a href="/tech"     id="tech_item"">TECH</a>'+
												'<a href="/negocios" id="negocios_item">NEGÓCIOS</a>'+
												'<a href="/racing"   id="racing_item">RACING</a>'+
												'<a href="/startups" id="startups_item">STARTUPS</a>'+
												'<a href="http://www.zev.news/contato"  id="contato_item">CONTATO</a>'+
												'<a href="#about"><img src="icons/facebooklogo.png"  class="logo_social"></a>'+
												'<a href="#about"><img src="icons/twitterlogo.png"   class="logo_social"></a>'+
												'<a href="#about"><img src="icons/instagramlogo.png" class="logo_social"></a>'+
												'<a href="javascript:void(0);" class="icon" onclick="myFunction()">'+
												'<i class="fa fa-bars"></i>'+
												'</a>'
												
 
 
 
  /*var page_section = document.getElementById("page_section");*/
 
   if (document.getElementById("page_section")) {
	   
	   
	  var page_section = document.getElementById("page_section");
	  
	  switch (page_section.value) {
		case "carros":
		var page = page_section.value + "_item";
		var element = document.getElementById(page);
	    element.classList.add("active");
        break;
    
		case "tech":
        var page = page_section.value + "_item";
		var element = document.getElementById(page);
	    element.classList.add("active");
		break
		
		case "startups":
        var page = page_section.value + "_item";
		var element = document.getElementById(page);
	    element.classList.add("active");
		break;
		
		case "negocios":
		var page = page_section.value + "_item";
		var element = document.getElementById(page);
	    element.classList.add("active");
		break;
		
		case "racing":
		var page = page_section.value + "_item";
		var element = document.getElementById(page);
	    element.classList.add("active");
		break;
		
		case "bikes":
		var page = page_section.value + "_item";
		var element = document.getElementById(page);
	    element.classList.add("active");
		break;
		
		
		case "motos":
		var page = page_section.value + "_item";
		var element = document.getElementById(page);
	    element.classList.add("active");
		break;
		
		;	
	  
	  
	  }
   }
   
   else{
	   
	   var x = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
	   x = x.substring(0, x.indexOf('.'));
	   x = x + "_item";
	   var element = document.getElementById(x);
 	   element.classList.add("active");
  
	  }

 
  
  /**/
  
 
 
 
 
}

function activate_sub_menu(){
	
	document.getElementById("menu_footer").innerHTML = '<ul>'+
														'<li><a href="https://zev.news/termo_de_uso_zevnews.html">Termos de Uso</a></li>'+
			                                            '<li><a href="https://zev.news/politica_de_privacidade_zevnews.html">Política de Privacidade</a></li>'+
			                                            '<li><a href="https://zev.news/sobre_zevnews.html">Sobre Zev.News</a></li>'+
			                                            '<li><a href="https://zev.news/contato.html">Entre em Contato</a></li>'+
		                                                '</ul>'
	
}