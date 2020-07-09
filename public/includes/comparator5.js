var totalChecks = 0;
var removeDisplay = 0;

var vehicles = new Array();
var caixa = 0;
    
var vehicle_1 = "";
var vehcile_2 = "";
var totalSearchs = 0;

var v1,v2 = "";
var cv1, cv2 = 0;


var controle1, controle2 = "";




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
         
         document.getElementById("vehiclesForComparision").innerHTML = this.responseText;
         var totalResults = document.getElementById("totalSearchs").value;
         totalSearchs = parseInt(totalResults);
         loadSearchResult();
        }
    }

        http.send();
}


  

function seeVehicleSpecs(ref, teste)
{   
       
      var variavel ="vehicle" + ref.name;
      var teste = document.getElementById(ref);   
      var http = new XMLHttpRequest();
      var vehicleToSearch = ref;
      var url = '/selecionaveiculo/'+ vehicleToSearch +'';
      http.open('GET', url, true);

//Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function()
    {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) 
        {
         
         document.getElementById("vehicleSpecs").innerHTML = this.responseText;
         var btnve = document.getElementById("btnve");
         if (controle1 == ref || controle2 == ref )
         {
            alert("vai desativar");
            btnve.style.visibility = "hidden";
         }
        }
    }

        http.send();
}






function loadSearchResult()
{
  
    document.getElementById("remove1").addEventListener("click",removeVehicle);
    document.getElementById("remove2").addEventListener("click",removeVehicle);
  
}





function addVehicle(addVeh,valor)
    {
             
            vehicle = 1;
            alert("O id " + valor);
           
         

             removeDisplay = 1;
             if (caixa == 0)
             {
                var vehicleToCompare = document.getElementById("vehicle1ToCompare");           
                vehicleToCompare.innerHTML = addVeh;
                caixa = 1;
                var photo1 = document.getElementById("vehicleImage1"); 
                var vehicleImage = document.getElementById("vehicleImage"); 
                photo1.src =  vehicleImage.src ; 
                document.getElementById("vehicle1ToCompareBox").style.visibility = "visible";
                vehicle_1 = this.id;
                totalChecks = totalChecks +1;
                controle1 = valor;
               
                

              
            }
             
             else
             {
                 var vehicleToCompare = document.getElementById("vehicle2ToCompare");
                 vehicleToCompare.innerHTML = addVeh;
                 var photo2 = document.getElementById("vehicleImage2"); 
                 var vehicleImage = document.getElementById("vehicleImage"); 
                 photo2.src =  vehicleImage.src ;
                 document.getElementById("vehicle2ToCompareBox").style.visibility = "visible";
                 caixa = 2;
                 vehicle_2 = this.id;
                 totalChecks = totalChecks +1;
                 controle2 = valor;
                
             }

             
    }
    




  

function removeVehicle(){
     	
        var vehicle = this.id;
        vehicle = vehicle.slice(6,8);
        document.getElementById("vehicle" + vehicle +"ToCompareBox").style.visibility = "hidden";
       
         if (vehicle == 1)
         {
            caixa = 0;
            v1 = "";
            cv1 = 0;

            alert (v1 + cv1 );
            controle1 = "";
            alert("controle1 zerado");
         
         }
         else
         {  
   
             totalChecks = totalChecks  - 1;
             controle2 = "";
            alert("controle2 zerado");
            
         
     

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
      
         while (y <= totalSearchs){

               
                
                if (vehicles[y].checked != true)
                {
                   vehicles[y].disabled = false;
                   vehicles[y].style.visibility = "hidden";
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