document.getElementById("searchForm").addEventListener("submit", function(event){

  var searchItem = document.getElementById("searchItem");
  if (searchItem.value == ""){
      event.preventDefault()
      alert("Digite termo para pesquisa");
      document.getElementById("searchItem").focus();
  }
});
