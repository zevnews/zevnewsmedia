/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
	
  }
}

function closePrivacy()
{
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
  //   document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://localhost:21171/testesessaocookie", true);
  xhttp.send();
  var privacyBox = document.getElementById("privacyBox");
  privacyBox.style.display = "none";


}

/*
  document.getElementById("searchForm").addEventListener("submit", function(event){

  var searchItem = document.getElementById("searchItem");
  if (searchItem.value == ""){
      event.preventDefault()
      alert("Campo Vazio!");
  }
});*/


