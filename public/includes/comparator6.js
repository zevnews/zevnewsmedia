

function puxadados(x,motoca)

{

  
  {
 
  var http = new XMLHttpRequest();
 // var vehicleToSearch = vehicleSearch();
 var xx = x;
 var selecao = motoca;

// selecao = selecao.toString();
 /* var url = '/fazcomparacao/'+ valorx +'/'+ selecao +'';*/
    var url = '/fazcomparacao/'+ selecao +'/'+ x +'';
   http.open('GET', url, true);

//Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
var x  = 1;

    http.onreadystatechange = function()
    {//Call a function when the state changes.

    if(http.readyState == 4 && http.status == 200) 
        {
         var com = "comparave"+xx;
         document.getElementById(com).innerHTML = this.responseText;
     //     alert("selecao " + selecao + " com " + com);
         
        }
    }

        http.send();
        
      }
}


function superior(v1,v2)
{

  var newNumber = 0;
  var originalNumber = 0;


  if (v1 > v2)
  {
    newNumber = parseInt(v1);
    originalNumber = parseInt(v2);
  }
  else
  {
    newNumber = parseInt(v2);
    originalNumber =  parseInt(v1);
  }

  var Increase = newNumber - originalNumber;
  var percentualIcrease = Increase / originalNumber * 100;

  return percentualIcrease;

}