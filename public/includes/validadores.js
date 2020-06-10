document.getElementById("searchForm").addEventListener("submit", function(event){

  var searchItem = document.getElementById("searchItem");
  if (searchItem.value == ""){
      event.preventDefault()
      alert("Digite termo para pesquisa");
      document.getElementById("searchItem").focus();
  }
});

document.getElementById("searchForm2").addEventListener("submit", function(event){

  var searchItem = document.getElementById("searchItem2");
  if (searchItem.value == ""){
      event.preventDefault()
      alert("Digite termo para pesquisa");
      document.getElementById("searchItem").focus();
  }
});






function getResolution() {
        //alert("Your screen resolution is: " + screen.width + "x" + screen.height);

        var tela = screen.width;

        var elemento = document.getElementById("contat_item");

        if (tela > 700)
        {
          document.getElementById("contat_item").remove();
        }

        //alert(elemento.id + " " + tela);
    }

    getResolution();