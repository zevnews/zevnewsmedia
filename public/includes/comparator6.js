
var contadorOrdemPar = 1;
var contadorOrdemImpar = 1;
function pullVeSpecs(ordem,vehicle)

{

  
  {
 
  var http = new XMLHttpRequest();
 // var vehicleToSearch = vehicleSearch();
 var vehicle = vehicle;
 var url = '/fazcomparacao/'+ vehicle +'/'+ ordem +'';
   http.open('GET', url, true);

//Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


    http.onreadystatechange = function()
    {//Call a function when the state changes.

    if(http.readyState == 4 && http.status == 200) 
        {
         var com = "comparave"+ordem;
       
          document.getElementById(com).innerHTML = this.responseText;

          if (ordem == 4)
          {
            
            document.getElementById("vbl4").innerHTML = "carregou";

          //  var va5 = document.getElementById("va5").value;
         //   alert("ok!!!");
           // alert(va5);

          }

           alert(isOdd(ordem));

               if (isOdd(ordem) == 1)
               {
              
           
               var alertar = document.getElementById("va"+contadorOrdemImpar).value;
              alert("va"+contadorOrdemImpar + " " + alertar);
         
               contadorOrdemImpar++;
           }
           else
           {
              var alertar = document.getElementById("vb"+contadorOrdemPar).value;
              alert("vb" + contadorOrdemPar);
        
              contadorOrdemPar++;
           }
                   
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

