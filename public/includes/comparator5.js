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
         var qwe = document.getElementById("escondido"+ref);
        
         var lixo = qwe.value;
        
       
        }
    }

        http.send();
}



 function avoidCompare(){
    if (totalSearchs <= 1)
    {
        document.getElementById("vehicle1").style.visibility = "hidden";
    }

 }




function loadSearchResult()
{
  
    document.getElementById("remove1").addEventListener("click",removeVehicle);
    document.getElementById("remove2").addEventListener("click",removeVehicle);
  
    avoidCompare();
}





function addVehicle2(teste)
    {
             
          
           

            vehicle = 1;
           
          

             removeDisplay = 1;
             if (caixa == 0){
                var vehicleToCompare = document.getElementById("vehicle1ToCompare");
           
                vehicleToCompare.innerHTML = teste;
                caixa = 1;

                var photo1 = document.getElementById("vehicleImage1"); 
                var vehicleImage = document.getElementById("vehicleImage"); 
                photo1.src =  vehicleImage.src ; 
                document.getElementById("vehicle1ToCompareBox").style.visibility = "visible";
              
                
              vehicle_1 = this.id;
              totalChecks = totalChecks +1;
       

             }
             else
             {
          
             var vehicleToCompare = document.getElementById("vehicle2ToCompare");
        
             vehicleToCompare.innerHTML = teste;

             var photo2 = document.getElementById("vehicleImage2"); 
             var vehicleImage = document.getElementById("vehicleImage"); 
                photo2.src =  vehicleImage.src ;
                 document.getElementById("vehicle2ToCompareBox").style.visibility = "visible";
         
            
            caixa = 2;

             vehicle_2 = this.id;
           
            totalChecks = totalChecks +1;
         
      

             }

             
    }
    




//

function addVehicle()
    {
    	     var vehicle = this.id.slice(7,10);
            
             this.disabled = true;

             alert("Clique no checkbox");
            
       

             removeDisplay = 1;
             if (caixa == 0){
                var vehicleToCompare = document.getElementById("vehicle1ToCompare");
                vehicleToCompare.innerHTML = this.value;
                caixa = 1;

                var photo1 = document.getElementById("vehicleImage1"); 
                var vehicleImage = document.getElementById("vehicleImage"); 
                photo1.src =  vehicleImage.src ;
              
                
              vehicle_1 = this.id;
              totalChecks = totalChecks +1;
        

             }
             else
             {
       
             var vehicleToCompare = document.getElementById("vehicle2ToCompare");
             vehicleToCompare.innerHTML = this.value;

             var photo2 = document.getElementById("vehicleImage2"); 
             var vehicleImage = document.getElementById("vehicleImage"); 
                photo2.src =  vehicleImage.src ;
         
            
            caixa = 2;

             vehicle_2 = this.id;
           
            totalChecks = totalChecks +1;
         
   

             }

             
    }
    


  

function removeVehicle(){
     	var vehicle = this.id;

         vehicle = vehicle.slice(6,8);

        
    

       
         document.getElementById("vehicle" + vehicle +"ToCompareBox").style.visibility = "hidden";
             
            
        // document.getElementById("remove" + vehicle).style.visibility = "hidden";

         if (vehicle == 1)
         {
            caixa = 0;
         
         }
         else
         {  
   
             totalChecks = totalChecks  - 1;
     

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