

var totalChecks = 0;
var removeDisplay = 0;

var vehicles = new Array();
var caixa = 0;
    
var vehicle_1 = "";
var vehcile_2 = "";
var totalSearchs = 0;


function startVariables()
{

    totalChecks = 0;
    removeDisplay = 0;
    caixa = 0;
    vehicle_1 = "";
    vehicle_2 = "";
    document.getElementById("vehicle1ToCompare").innerHTML = "";
    document.getElementById("vehicle2ToCompare").innerHTML = "";
   
}




function vehicleSearch()
  {

    startVariables();
    var searchBoxValue = document.getElementById("searchBox").value;

    if (searchBoxValue == ""){
        alert("Please fill the search box");
        document.getElementById("searchBox").focus();
    }
    else
    {
    document.getElementById("searchBox").value = "";
    return searchBoxValue;
    }
  }



function vehiclesSearchList()
{
  var http = new XMLHttpRequest();
  var vehicleToSearch = vehicleSearch();
  var url = '/mongodb/'+ vehicleToSearch +'';
   http.open('GET', url, true);

//Send the proper header information along with the request
     http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function()
    {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) 
        {
         
         document.getElementById("caixadeareia").innerHTML = this.responseText;
         var totalResults = document.getElementById("totalSearchs").value;
         totalSearchs = parseInt(totalResults);
         //alert("Resultados" + totalSearchs);
         loadSearchResult();
        }
    }

        http.send();
}

function loadSearchResult()
{
  
    var vehicles = new Array();
    z = 1;

    while (z <= totalSearchs)
    {
        vehicles[z] = document.getElementById("vehicle" + z)
        vehicles[z].addEventListener("click",addVehicle);
        z = z + 1;
    }


    document.getElementById("remove1").addEventListener("click",removeVehicle);
    document.getElementById("remove2").addEventListener("click",removeVehicle);
    document.getElementById("remove1").style.visibility = "hidden";
    document.getElementById("remove2").style.visibility = "hidden";
}



function addVehicle()
    {
    	     var vehicle = this.id.slice(7,10);
             this.disabled = true;
            
            showItens();

             removeDisplay = 1;
             if (caixa == 0){
                var vehicleToCompare = document.getElementById("vehicle1ToCompare");

                vehicleToCompare.innerHTML = this.value;
                caixa = 1;
                
                vehicle_1 = this.id;
              totalChecks = totalChecks +1;
              disableChecks(totalChecks);     

             }
             else
             {
              showItens();
             var vehicleToCompare = document.getElementById("vehicle2ToCompare");
             vehicleToCompare.innerHTML = this.value;
             caixa = 2;

             vehicle_2 = this.id;
           
            totalChecks = totalChecks +1;
         
            disableChecks(totalChecks);     

             }

             
    }
    



    

function removeVehicle(){
     	var vehicle = this.id;

         vehicle = vehicle.slice(6,8);
    

         var removeVehicle = document.getElementById("vehicle" + vehicle +"ToCompare");
         removeVehicle.innerHTML = "";

         if (vehicle == 1)
         {
            caixa = 0;
            document.getElementById(vehicle_1).checked = false;
             document.getElementById(vehicle_1).disabled = false;
             totalChecks = totalChecks  - 1;
             disableChecks(totalChecks);                  

         }
         else
         {  
            document.getElementById(vehicle_2).checked = false;
             document.getElementById(vehicle_2).disabled = false; 
             totalChecks = totalChecks  - 1;
             disableChecks(totalChecks);            

         }
     }


function disableChecks(totalChecks)
   {
     var z  = 1;
     var y = 1;
     
     if (totalChecks === 2)
     {
       
        vehicle1.disabled = true;

       while (z <= totalSearchs){
                vehicles[z] = document.getElementById("vehicle" + z);
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
        

   }