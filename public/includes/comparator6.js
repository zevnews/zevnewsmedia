function puxadados()

{
  alert("oi");
  var http = new XMLHttpRequest();
  var vehicleToSearch = vehicleSearch();
  var url = '/fazcomparacao/'+ vehicleToSearch +'';
   http.open('GET', url, true);

//Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function()
    {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) 
        {
         
         document.getElementById("boxEnd").innerHTML = this.responseText;
         
        }
    }

        http.send();
}
