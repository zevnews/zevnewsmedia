alert("BEM-VINDO A EVDI!");

var z = 1;
var totalChecks = 0;
var removeDisplay = 0;

var vehicles = new Array();
 var caixa = 0;
    
     var vehicle_1 = "";
     var vehcile_2 = "";

    while (z <= 5)
    {

        vehicles[z] = document.getElementById("vehicle" + z)

        alert(vehicles[z].id);
        vehicles[z].addEventListener("click",addVehicle);
        z = z + 1;
    }

    function comeca(){
   // var xz = document.getElementById("vehicle1");
    var vehicles = new Array();
    //alert("comeca aqui" + xz + "op");
    z = 1;

    while (z <= 5)
    {

        vehicles[z] = document.getElementById("vehicle" + z)

        //alert(vehicles[z].id + "comeca");
        vehicles[z].addEventListener("click",addVehicle);
        z = z + 1;
    }


    document.getElementById("remove1").addEventListener("click",removeVehicle);
    document.getElementById("remove2").addEventListener("click",removeVehicle);

    document.getElementById("remove1").style.visibility = "hidden";
    document.getElementById("remove2").style.visibility = "hidden";

    alert("Isso ai");
    //addVehicle();
}


function searchVeh()
  {

    var valor = document.getElementById("searchBox").value;
    alert(valor);
    return valor;
  }

function manda()
{

  var http = new XMLHttpRequest();
  var teste = searchVeh();
var url = '/mongodb/'+ teste +'';
var searchItem = 'Tesla';
http.open('GET', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
       // alert(http.responseText);
         document.getElementById("caixadeareia").innerHTML = this.responseText;
         comeca();
         //comeca();
    }
}
alert(searchItem);
http.send(searchItem);
}

 function addVehicle()
    {
    	     var vehicle = this.id.slice(7,10);
             this.disabled = true;
             alert(vehicle);

             

             showItens();

             removeDisplay = 1;
             if (caixa == 0){
                var vehicleToCompare = document.getElementById("vehicle1ToCompare");

                vehicleToCompare.innerHTML = this.value;
                caixa = 1;
                
                vehicle_1 = this.id;
              //  alert("ID da caixa" + vehicle_1);
              //alert("Caixa" +caixa);
              totalChecks = totalChecks +1;
              alert("total" + totalChecks);
              disableChecks(totalChecks);     

             }
             else
             {
              showItens();
             var vehicleToCompare = document.getElementById("vehicle2ToCompare");
             vehicleToCompare.innerHTML = this.value;
             caixa = 2;

             vehicle_2 = this.id;
            // alert("ID da caixa" + vehicle_2);
            alert("Caixa" + caixa);
            
            totalChecks = totalChecks +1;
            alert("total de checks" + totalChecks);
            disableChecks(totalChecks);     

             }

             
    }
    

    document.getElementById("remove1").addEventListener("click",removeVehicle);
    document.getElementById("remove2").addEventListener("click",removeVehicle);

    document.getElementById("remove1").style.visibility = "hidden";
    document.getElementById("remove2").style.visibility = "hidden";

   




   
    // showItens();

    

     function removeVehicle(){
     	var vehicle = this.id;

         vehicle = vehicle.slice(6,8);
    

         var removeVehicle = document.getElementById("vehicle" + vehicle +"ToCompare");
         removeVehicle.innerHTML = "";

         if (vehicle == 1)
         {
            caixa = 0;
            document.getElementById(vehicle_1).checked = false;
             alert("Caixa Remove" + caixa);
             document.getElementById(vehicle_1).disabled = false;

             totalChecks = totalChecks  - 1;
            alert("total" + totalChecks);
             disableChecks(totalChecks);                  

         }
         else
         {  
            document.getElementById(vehicle_2).checked = false;
             alert("Caixa Remove" + caixa);
             document.getElementById(vehicle_2).disabled = false; 
             totalChecks = totalChecks  - 1;
            alert("total" + totalChecks);
            disableChecks(totalChecks);            

         }
     }


     function disableChecks(totalChecks)
   {
     var z  = 1;
     var y = 1;
     if (totalChecks === 2)
     {
        alert("destivado");
    vehicle1.disabled = true;

       while (z <= 5){
            
                vehicles[z].disabled = true;
            

            z = z + 1;
        }

     } 
     else
     {
      
         while (y <= 5){
                
                if (vehicles[y].checked != true)
                {
                    vehicles[y].disabled = false;
                }
            

            y = y + 1;
        }
     }
   }

   function showItens(){

        if (removeDisplay == 0)
        {
            document.getElementById("remove1").style.visibility = "visible";
        }
        else
        {
            document.getElementById("remove2").style.visibility = "visible";
        }
        alert("Visivel");
    

   }