

function puxadados(x,y)

{

  
  {
 
  var http = new XMLHttpRequest();
 // var vehicleToSearch = vehicleSearch();
 var valorx = "ok"
 var selecao = y;

 selecao = selecao.toString();
 /* var url = '/fazcomparacao/'+ valorx +'/'+ selecao +'';*/
    var url = '/fazcomparacao/'+ selecao +'';
   http.open('GET', url, true);

//Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
var x  = 1;

    http.onreadystatechange = function()
    {//Call a function when the state changes.

    if(http.readyState == 4 && http.status == 200) 
        {
         var com = "comparave"+x;
         document.getElementById(com).innerHTML = this.responseText;
          alert("selecao " + selecao + " com " + com);
         
        }
    }

        http.send();
        
      }
}
