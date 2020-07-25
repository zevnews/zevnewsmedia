var totalChecks = 0;
var removeDisplay = 0;

var vehicles = new Array();
var caixa = 0;
    
var vehicle_1 = "";
var vehcile_2 = "";
var totalSearchs = 0;

var refRemove1,refRemove2 = "";


var controle1, controle2 = "";

var seletor = "";

var motoca1,motoca2 = "";

var motoca = new Array();


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



function vehicleSearch(testex)
  {

    startVariables();
   
   var searchBoxValue = "";
    if (testex != 0){
      searchBoxValue = "Cake";
      alert("link" + testex)
    }
    else
    {
     searchBoxValue = document.getElementById("searchBox").value;
      alert("caixa" + testex)
    }
  
    return searchBoxValue;
    
  }



function vehiclesSearchList(teste)

{
 
   alert(teste);
  var http = new XMLHttpRequest();
//  alert(vehicleSearch(teste));
  var vehicleToSearch = vehicleSearch(teste);
  alert("veiculo" + vehicleToSearch);
  var url = '/mongodb/'+ vehicleToSearch +'/1';
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
          alert("epa");
        }
    }

        http.send();
}


function carregalistalixo(valor)

{
 
   
  var http = new XMLHttpRequest();
//  alert(vehicleSearch(teste));
  var vehicleToSearch = valor;
  alert("veiculo" + valor);
  var url = '/mongodb/'+ valor +'/2';
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
          alert("epa");
        }
    }

        http.send();
}
  

function seeVehicleSpecs(ref)
{   

       
      var variavel ="vehicle" + ref.name;
    //  var id_val = document.getElementById(ref);   
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
         setBtnInvisible(ref);
        
         
        }
    }

        http.send();
}



function setBtnInvisible(ref)
{
  
     if (controle1 == ref || controle2 == ref || totalChecks > 1 )
         {
            var btnve = document.getElementById("btnve");
            btnve.style.visibility = "hidden";
         }
        else if (controle1 != ref || controle2 != ref && totalChecks < 2)
        {
             var btnve = document.getElementById("btnve");
           btnve.style.visibility = "visible";
        }
}


function loadSearchResult()
{
  
    document.getElementById("remove1").addEventListener("click",removeVehicle);
    document.getElementById("remove2").addEventListener("click",removeVehicle);
  
}





function addVehicle(addVeh,valor)
    {
                 
            vehicle = 1;
      
            seletor = valor;
         

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
                setBtnInvisible(valor);
                refRemove1 = valor;
                motoca1 = valor;
                motoca[1] = valor;
                

              
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
                 setBtnInvisible(valor);
                 refRemove2 = valor;
                 motoca2 = valor;
                 motoca[2] = valor;
                
             }

             
    }
    




  

function removeVehicle(){
        
        var vehicle = this.id;
        vehicle = vehicle.slice(6,8);

        document.getElementById("vehicle" + vehicle +"ToCompareBox").style.visibility = "hidden";
       
         if (vehicle == 1)
         {
            caixa = 0;
            
            controle1 = "";
            totalChecks = totalChecks  - 1;
            setBtnInvisible(refRemove1);
            motoca1 = "";
         
         }
         else
         {  
   
             totalChecks = totalChecks  - 1;
             controle2 = "";
             setBtnInvisible(refRemove2);
             motoca2 = "";
        
     

         }

         if (seletor == refRemove1 || seletor == refRemove2)
         {
              var btnve = document.getElementById("btnve");
              btnve.style.visibility = "visible";
         }
     }


function pullVehicleData(){

    alert(motoca[1] + " " + motoca[2]);
    duasMotos(motoca[1],motoca[2]);

}

/*function pullVehicleData()
{
  var ordem = 1;
  while (ordem <= 4)
   


  {
      
   
      if (isOdd(ordem) == 1)
      {
         pullVeSpecs(ordem,motoca[1]);
         alert("ordem" + ordem);
      }
      else
    {
         pullVeSpecs(ordem,motoca[2]);
          alert("ordem" + ordem);
    }
       

       ordem++;

   
      
      
  }
  
  alert("Superioridade é" + superior(10,20));
     
   
}*/

function duasMotos(moto1,moto2)
{
    var http = new XMLHttpRequest();
 // var vehicleToSearch = vehicleSearch();
 var vehicle = vehicle;
 var url = '/duasmotos/'+ moto1+'/'+ moto2 +'';
 alert(url);
   http.open('GET', url, true);

//Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


    http.onreadystatechange = function()
    {//Call a function when the state changes.

    if(http.readyState == 4 && http.status == 200) 
        {
        
       
          document.getElementById("caixa1").innerHTML = this.responseText;
/*
          if (ordem == 4)
          {
            
            document.getElementById("vbl4").innerHTML = "carregou";

          //  var va5 = document.getElementById("va5").value;
         //   alert("ok!!!");
           // alert(va5);

          }*/

         /*  alert(isOdd(ordem));

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
           }*/
                   
        }
    }
     
       http.send();
        
      }



var w = 1;
var t = 1;
var l = 1;
function testew()
{

    var n = new Array();
    var m = new Array();

    var a = 0;
    var b = 0;
    while (w <= 4)
    {
     //   alert(w);
        var elemento = "va"+w;
        alert(elemento);



  //    alert(elemento);
        var v1 = document.getElementById(elemento);
     alert("Elemento A ->" + v1.value);
        a = v1.value;
        n[w] = v1.value;
        w++;
    }
    while (t <= 4)
    {
     //   alert(w);
        var elementox = "vb"+t;

        
        
  //    alert(elemento);
        var t1 = document.getElementById(elementox);
      alert("Elemento B ->" + t1.value);
        b = t1.value;
        m[t] = t1.value;
        t++;
    }

  /*  if (a > b)
    {
        alert("a > b");
    }
    else
    {
         alert("a < b");
    }*/

    while (l < 4)
    {
        if (n[l] > m[l])
        {   //   alert(n[l]);
             //   alert("moto 1 > moto2");
                var evbl = "vbl"+l;
   //             var vbl = document.getElementById(evbl);
                vbl.innerHTML = evbl;
        }
        else
        {
             //      alert(n[l]);
  //              alert("moto 1 < moto2");

        }
        l++;
    }
}


/*
function testew()
{
    while (w <= 4)
    {
     
        var elemento = "va"+w;
        var v1 = document.getElementById(elemento);
       
        w++;
    }
   
}*/

function isOdd(num) { 

  //  var y = num % 2;
//    alert("numero" + num + "tipo" + y);
    return num % 2;
}