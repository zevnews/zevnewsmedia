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
  alert("Privacidade");
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


