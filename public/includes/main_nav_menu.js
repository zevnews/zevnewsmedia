

function activate_main_menu() {
	
		

 
  /*var page_section = document.getElementById("page_section");*/
 
   if (document.getElementById("page_section")) {
	   
	   
	  var page_section = document.getElementById("page_section");
	  
	  switch (page_section.value) {
		
	  	case "home":
		var page = page_section.value + "_item";
		var element = document.getElementById(page);
	    element.classList.add("active");
        break;
    

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
		
		case "mercado":
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
		
		case "contato":
		var page = page_section.value + "_item";
		var element = document.getElementById(page);
	    element.classList.add("active");
		break;
		
		
	  
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

