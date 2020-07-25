
var express = require('express');
var ejs = require('ejs');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());


// CRIA SESSÃO

const session = require('express-session')
app.use(session({
  'secret': '343ji43j4n3jn4jk3n'
}))

var sessao_usuario = "";


var searchTest = "";

// CRIA A CONEXÃO MYSQL

var mysql = require('mysql'); //Inclui a biblioteca instalada do Mysql
var connection = mysql.createConnection({
  
  /*host: 'mysql669.umbler.com',
  port: '41890',
  user: 'zevnews',
  password: 'mxcross80',
  database: 'basezevnews'
*/


  /*
  host: 'localhost',
  user: 'root',
  database: 'lixo'
*/

  /*host: 'mysql.zevnews.kinghost.net',
  user: 'zevnews',
  password: 'r4ps4g08',
  database: 'zevnews'
*/


  host: 'mysql.zev.news',
  user: 'zevnews',
  password: 'r4ps4g08',
  database: 'zevnews'



});

var route_selector = 0;


var conexao = require('mongodb').MongoClient;
var url = "mongodb://zev01:r4ps4g08@mongodb.zev.news/zev01";
//var url = "mongodb://zev01:zevnews2020@mongodb.zev.news/zev01";
var database = "zev01";
var collection1 = "vehicles";


app.get('/documento', function (req, res) {
 
    // Read all the documents in "veiculo" collection
  conexao.connect(url, function(err, db) {
      if (err) throw err;
      var resultado;
      var dbo = db.db(database);
      dbo.collection(collection1).find().toArray(function(err, result) {
        if (err) throw err;
        result.forEach(element => {console.log("O nome é " + element.brand); });
        var page = "list_documents_test";
       
        res.send("ok");
      });
    });
  // End of Read
});


app.get('/mongodb/:valor/:v', function (req, res) {
 
    // Read all the documents in "veiculo" collection
  conexao.connect(url, function(err, db)
  {
       if (err) throw err;
       var dbo = db.db(database);
       var referencia = req.params.valor;
       var vx = req.params.v;
       console.log("-------------> ABERTA <--------------------------" + vx + "  " + referencia);
      var busca ="";

      if (vx == "1")
      {
        busca = dbo.collection(collection1).find({'brand': new RegExp(referencia, 'i')});
      }
      else
      {
         busca = dbo.collection(collection1).find({"vclass": referencia});
      }
       
     
       busca.toArray(function(err, result) {
       if (err) throw err;
       var codigo = '<ul id="searchResultsList">';
       var soma = 1
       var contador = 0;
       result.forEach(element =>
        {
             var ok = "um teste";
              codigo = codigo + '<li id="'+ element._id+'" onclick="seeVehicleSpecs(this.id)" name="'+soma+'" value="lixo">'+ element.brand + ''  + element.model +'</li>';
            
             soma++;
             contador++;
         });

        
        codigo = codigo + '</ul>';
        codigo = codigo + '<input type="hidden" value="'+ contador +'" id="totalSearchs" name="totalSearchs">'
        console.log(codigo);
        res.send(codigo)
      });
    });
  // End of Read
});

/*function isOdd(num) { return num % 2;}*/

//POWER TRAIN
var power = new Array();
var torque = new Array();

//DIMENSIONS
var weight = new Array();

//PERFORMANCE
var acceleration = new Array();
var speed = new Array();
var range = new Array();



/*var codigos = new Array();

var codigoHTML = "";*/

app.get("/duasmotos/:moto1/:moto2", function(req, res) { // root route or home route
    //res.send('welcome to home page');
var g  = 1;
var q = 2;
    conexao.connect(url, function(err, db)
          {
              if (err) throw err;
            var dbo = db.db(database);
            var moto1 = req.params.moto1;
            var moto2 = req.params.moto2;    
            var mongox = require('mongodb');
            var x_id1 = new mongox.ObjectID(moto1);
            var x_id2 = new mongox.ObjectID(moto2);

     
         
      
              dbo.collection(collection1).find({"_id": x_id1}).toArray(function(err, result)
                 {
                     result.forEach(element => {
                        power[1] = torque_power(element.power1, element.power2,element.power3,element.power4); 
                        torque[1] = torque_power(element.torque1, element.torque2,element.torque3,element.torque4)
                        weight[1] = element.weight;
                        
                        acceleration[1] = element.acceleration;
                        speed[1] = element.speed;
                        range[1]= element.range;

                                               }); 
                
               
                  });

              dbo.collection(collection1).find({"_id": x_id2}).toArray(function(err, result)
                 {
                     result.forEach(element => {
                        power[2] = torque_power(element.power1, element.power2,element.power3,element.power4); 
                        torque[2] = torque_power(element.torque1, element.torque2,element.torque3,element.torque4);
                        weight[2] = element.weight;
                        acceleration[2] = element.acceleration; 
                        speed[2] = element.speed;
                       res.send(respostaHTM(1,power[1],torque[1],weight[1],acceleration[1],speed[1],range[1],2,power[2],torque[2],weight[2],acceleration[2],speed[2],range[2]));
                                               }); 
                 });
  
          });


      
   
});


function respostaHTM(e1,p1,t1,w1,a1,s1,r1,e2,p2,t2,w2,a2,s2,r2){
 
function melhor (v1,v2)

  {  

var va1 = parseInt(v1);
var va2 = parseInt(v2);

   if (va1 > va2)
          {
            return "<-- " + Math.abs(superior(va1,va2).toFixed(2)) + " %";

          }
          else
          {
            return "" + Math.abs(superior(va1,va2).toFixed(2)) + " % -->";
          }


      

  }

  function menor(v1,v2)
  {

      var va1 = parseInt(v1);
      var va2 = parseInt(v2);

   if (va1 < va2)
          {
            return "<-- " + Math.abs(superior(va1,va2).toFixed(2)) + " %";

          }
          else
          {
            return "" + Math.abs(superior(va1,va2).toFixed(2)) + " % -->";
          }

  }

  code = `<span id="caixa1">
                     <div class="box">
                           <h1 class="boxTitle">POWERTRAIN</h1>
                               <div class="boxContent">
                                   <section class="boxInfoTeste">
                                     <ul class="specsToCompareT">
                                        <li><a href="">Power: `+ p1 +`</a></li>
                                        <li><a href="">Torque: `+t1 +` </a></li>
                                        <li><a href="">Line</a></li>
                                      <ul>
                                    </section>
      
                                  <section class="boxInfoTeste2">
                                    <ul class="specsToCompareT2">
                                       <li><a href="">`+ melhor(p1,p2) +`</a></li>
                                       <li><a href="">`+ melhor(torque[1],torque[2]) +`</a></li>
                                       <li><a href="">Line</a></li>
                                    <ul>
                                   </section>

                               <section class="boxInfoTeste">
                                   <ul class="specsToCompareT">
                                     <li><a href="">Power: `+ p2 +`</a></li>
                                     <li><a href="">Torque: `+t2 +`</a></li>
                                     <li><a href="">Peso: `+w2 +`</a></li>
                                  <ul>
                                 </section>
                     </div>      
                        <h2 class="boxTitleBottom"></h2>
                     </div>

                       <div class="box">
                           <h1 class="boxTitle">DIMENSIONS</h1>
                               <div class="boxContent">
                                   <section class="boxInfoTeste">
                                     <ul class="specsToCompareT">
                                        <li><a href="">Weight: `+ w1  +`</a></li>
                                        <li><a href="">Line </a></li>
                                        <li><a href="">Line</a></li>
                                      <ul>
                                    </section>
      
                                  <section class="boxInfoTeste2">
                                    <ul class="specsToCompareT2">
                                       <li><a href="">`+ menor(w1,w2) +`</a></li>
                                       <li><a href=""> Line</a></li>
                                       <li><a href="">Line</a></li>
                                    <ul>
                                   </section>

                               <section class="boxInfoTeste">
                                   <ul class="specsToCompareT">
                                     <li><a href="">Weight: `+ w2  +`</a></li>
                                     <li><a href="">Line</a></li>
                                     <li><a href="">Line</a></li>
                                  <ul>
                                 </section>
                     </div>      
                        <h2 class="boxTitleBottom"></h2>
                     </div>
                    


                     <div class="box">
                           <h1 class="boxTitle">PERFORMANCE</h1>
                               <div class="boxContent">
                                   <section class="boxInfoTeste">
                                     <ul class="specsToCompareT">
                                        <li><a href="">Acceleration: `+ a1  +`</a></li>
                                        <li><a href="">Speed:  `+ s1 +` </a></li>
                                        <li><a href="">Line</a></li>
                                      <ul>
                                    </section>
      
                                  <section class="boxInfoTeste2">
                                    <ul class="specsToCompareT2">
                                       <li><a href="">`+ menor(a1,a2) +`</a></li>
                                       <li><a href="">`+  melhor(s1,s2) +`</a></li>
                                       <li><a href="">Line</a></li>
                                    <ul>
                                   </section>

                               <section class="boxInfoTeste">
                                   <ul class="specsToCompareT">
                                     <li><a href="">Acceleration: `+ a2  +`</a></li>
                                     <li><a href="">Speed:  `+ s2  +`</a></li>
                                     <li><a href="">Line</a></li>
                                  <ul>
                                 </section>
                     </div>      
                        <h2 class="boxTitleBottom"></h2>
                     </div>
                     </span>
                    `


return code;

}


app.get("/access", function(req, res) { // root route or home route
    //res.send('welcome to home page');
    res.render("access.ejs")
});

app.get('/comparevehicles', function (req, res) {
 
    // Read all the documents in "veiculo" collection
  conexao.connect(url, function(err, db) {
      if (err) throw err;
      var resultado;
      var dbo = db.db(database);
      dbo.collection(collection1).find().toArray(function(err, result) {
        if (err) throw err;
        result.forEach(element => {/*console.log("O nome é " + element.brand);*/ });
        var page = "list_documents_test";
        res.render('comparator4_bk.ejs',{result});
      });
    });
  // End of Read
});


app.get("/access", function(req, res) { // root route or home route
    res.render("access.ejs")
});


app.post("/login", function(req, res) { // root route or home route
     var login = "gaspar";
     var password = "zevnews2020"

     login1 = req.param('login');
     password1 =req.param('password');
     if (login == login1 && password == password1){
     req.session.name = 'junior'
     console.log(req.session.name) 
     sessao_usuario = req.session.name; 
      
         res.redirect('/cms')
     }
     else
     {
      res.redirect('/access')
     }  
 
     console.log("a sessao e " + req.session.name);
});




// AQUI COMEÇAM AS ROTAS DO CMS


app.get("/selecionaveiculo/:valor", (req, res) => {


conexao.connect(url, function(err, db)
  {
       if (err) throw err;
       var dbo = db.db(database);
       var referencia = req.params.valor;
       console.log(referencia);
       var codigo = "";
       var mongox = require('mongodb');
       var x_id = new mongox.ObjectID(referencia);

       dbo.collection(collection1).find({"_id": x_id}).toArray(function(err, result)

        
        {
          if (err) throw err;
             result.forEach(element =>
                {
                  
                 codigo = `<img src="photos/`+element.photo1+ `" class="vehicleImage" id="vehicleImage">
                           <ul class="vehicleSpecs" id="vehicleSpecs">
                           <li>Brand: `+ element.brand+`</li>
                           <li>Model: `+ element.model+`</li>
                           <li>Power: `+ element.power1+`</li>
                           <li>Torque: `+ element.torque1+`</li>
                           <li><a href="" class="moreVehicleInfo" onclick="alert('')">See full specs</a></li>
                           <input type="button" value="Adicionar" name="btnve" id="btnve" onclick="addVehicle('`+ element.model +`','`+ element._id +`')">
                           <input type="hidden"  id="escondido`+ element._id+`" value="`+ element._id+`">
                           </ul>`
               });

            console.log("codigo de resposta" + codigo); 
        res.send(codigo)
      });
    });

    
});

app.get("/evdi", (req, res) => {
    res.render("evdi.ejs");
});

app.get("/comparator", (req, res) => {
    res.render("comparator.ejs");
});

app.get("/ajax", (req, res) => {
    res.render("ajax.ejs");
});

app.get("/jqueryajaxcarrega", (req, res) => {
    res.render("jqueryajaxcarrega.ejs");
});

app.get("/jqueryajaxenvia", (req, res) => {
    res.send('Este é um teste de Ajax');
});


app.get("/cms", function(req, res) { // user route
   // res.render("testes.ejs", {


    if (req.session.name == "junior")
    {
      sessao_usuario = req.session.name; 
      connection.query("SELECT * FROM ARTICLES ORDER BY PUBLI_DATE DESC", (err,rows) => {
      if(err) throw err;
      res.render("cms.ejs", {rows, sessao_usuario});
       
    
    rows.forEach(row => { 
  console.log(row.publi_date); 
}); 

       
    });

    console.log( "Sessao" + req.session.name);
    }
    else
    {
      res.redirect('/access')
    }  


      
      
});


app.get("/politica_de_privacidade_zevnews", function(req, res) { // root route or home route
    //res.send('welcome to home page');
    res.render("politica_de_privacidade_zevnews.ejs")
});


app.get("/termos_de_uso_zevnews", function(req, res) { // root route or home route
    //res.send('welcome to home page');
    res.render("termos_de_uso_zevnews.ejs")
});

app.get("/contato", function(req, res) { // root route or home route
    //res.send('welcome to home page');
    res.render("contato.ejs")
});

app.get("/sobre_zevnews", function(req, res) { // root route or home route
    //res.send('welcome to home page');
    res.render("sobre_zevnews.ejs")
});


app.get("/all", function(req, res) { // user route
   // res.render("testes.ejs", {

      searchTest = "";
      var section = req.params.x;
      connection.query("SELECT * FROM ARTICLES ORDER BY PUBLI_DATE DESC LIMIT 9 ", (err,rows) => {
      if(err) throw err;
      
      var estado = "";
      if (Array.isArray(rows) && rows.length === 0.)
      {
           // estado vazio
           res.render("vazio.ejs");
      }
      else
      {
          pagina = 0;
          paginaBuscas = 9;
          res.render("all.ejs", {rows, section, pagina, paginaBuscas});

      } 

      //console.log(estado);
       });
});


app.get("/search", function(req, res) { // root route or home route
    //res.send('welcome to home page');
    res.render("search.ejs")
});

app.post("/search", function(req, res) { // user route
    var searchItem = req.body.searchItem;
      console.log("valor" + searchItem);
      searchTest = searchItem;
      connection.query("select * from ARTICLES where article like '%"+ searchItem +"%' ORDER BY PUBLI_DATE DESC LIMIT 9", (err,rows) => {
      if(err) throw err;
      
      var estado = "";
      if (Array.isArray(rows) && rows.length === 0.)
      {
          pagina = 0;
          section = "Nenhum resultado";
          linha = null;
          console.log("nada");
          res.render("conteudos.ejs", {rows, section, pagina, linha});
      }
      else
      {
          pagina = 0;
          section = "all";
          linha = 1;
          console.log("Refe " + searchTest);


          paginaBuscas = 0;

           rows.forEach(row => { 
              console.log(row.publi_date); 
              paginaBuscas = paginaBuscas + 1;
          }); 
          res.render("conteudos.ejs", {rows, section, pagina, linha, paginaBuscas});

      } 

      //console.log(estado);
       });
});

app.get("/searchteste/:valor", function(req, res) { // user route
    var searchItem = req.params.valor;
      console.log("valor " + searchItem);
      searchTest = searchItem;
      connection.query("select * from ARTICLES where article like '%"+ searchItem +"%' ORDER BY PUBLI_DATE DESC LIMIT 9", (err,rows) => {
      if(err) throw err;

      var escopo = "";
      
      var estado = "";
      if (Array.isArray(rows) && rows.length === 0.)
      {
           // estado vazio
           //res.render("vazio.ejs");
           //res.render("vazio.ejs");
          pagina = 0;
          section = "Nenhum resultado";
          linha = null;
          console.log("nadaaaa");
          //res.render("conteudos.ejs", {rows, section, pagina, linha});
          res.send("Yepppp");
      }
      else
      {
          pagina = 0;
          section = "all";
          linha = 1;
          console.log("Refe " + searchTest);


          paginaBuscas = 0;

          escopo = '<ul id="searchResultsList">';

           rows.forEach(row => { 
              console.log(row.publi_date); 
              paginaBuscas = paginaBuscas + 1;
              
              escopo = escopo + '<li>'+ row.title + '</li>';

          }); 
          //res.render("conteudos.ejs", {rows, section, pagina, linha, paginaBuscas});
          escopo = escopo + '</ul>'
           res.send(escopo);

      } 

       });
});



app.get("/author/:id", function(req, res) { // user route
 
      var section = req.params.x;
      connection.query("SELECT * FROM ARTICLES ORDER BY PUBLI_DATE DESC LIMIT 9 ", (err,rows) => {
      if(err) throw err;
      
      var estado = "";
      if (Array.isArray(rows) && rows.length === 0.)
      {
           // estado vazio
           res.render("vazio.ejs");
      }
      else
      {
          pagina = 0;
          res.render("author.ejs", {rows, section, pagina});

      } 

      //console.log(estado);
       });
});









app.get("/new_article", function(req, res) { // root route or home route
    //res.send('Motos');
   

   
    if (req.session.name == "junior")
    {
      var data_p = data_publica();
     res.render("new_article.ejs", {sessao_usuario, data_p})
    console.log( "sessao usua " + sessao_usuario);
    }
    else
    {
      res.redirect('/access')
    }

});

app.get("/sugestoes/:cod", function(req, res) { // root route or home route
    //res.send('Motos');
     var cod = req.params.cod;

   
    if (req.session.name == "junior")
    {
     res.render("sugestao.ejs", {sessao_usuario, cod})
      
    }
    else
    {
      res.redirect('/access')
    }

});


/*INSERIR SUGESTÕES */
app.post('/sugestao2',function(req,res){

  var sessao = req.session.name;
 if (req.session.name == "junior")
    {
    
  //var sugestoes = [];
  
  var sugestoes = [];
 sugestoes[1] = req.body.sugestao1;
 sugestoes[2] = req.body.sugestao2;
 sugestoes[3] = req.body.sugestao3;
 sugestoes[4] = req.body.sugestao4; 

 
  var cod = req.body.cod;

  var zx = 1;
  var sql;
  
  
  while (zx < 5){
                    sql = "INSERT INTO sugestoes (cod,artigo) VALUES ("+ cod +","+ sugestoes[zx] +")";
                    
                    if (sugestoes[zx] |= null)
                      {
                        connection.query(sql, function (err, result) {
                        if (err) throw err;  
                        });
                      }
                    
                    zx = zx + 1;
                }
                console.log(sugestoes[1] + " " + sugestoes[2] + " " + sugestoes[3] + " " + sugestoes[4])
                console.log(sql);

                
      
    }
    else
    {
    res.redirect('/access')
  }
  res.redirect("/cms");
  });



app.post('/insert_article',function(req,res){


 if (req.session.name == "junior")
    {
    
  var titulo = req.body.title;
  var subtitulo = req.body.subtitle;
  var author = req.body.author;
  var article = req.body.article;
  var section = req.body.section;
  var subsection =  req.body.subsection;
  
  var photo1 = req.body.photo1;
  var legend1 = req.body.legend1;
  
  var photo2 = req.body.photo2;
  var legend2 = req.body.legend2;
  
  var photo3 = req.body.photo3;
  var legend3 = req.body.legend3;
  
  var photo4 = req.body.photo4;
  var legend4 = req.body.legend4;

  var photo5 = req.body.photo5;
  var legend5 = req.body.legend5;

  var photo_highlight = req.body.photo_highlight; 
  var highlight = req.body.highlight;

   var tags = req.body.tags;

  var publi_date = req.body.publi_date //data_publica();

  var publi_date = converte_data(publi_date);



  var sql = "INSERT INTO ARTICLES (title, subtitle, publi_date, section, subsection, author, article, photo1,legend1, photo2,legend2, photo3,legend3,photo4,legend4,photo5,legend5, highlight, photo_highlight,tags) VALUES ('"+ titulo +"', '"+ subtitulo +"', '"+ publi_date +"','"+ section +"','"+ subsection +"','"+ author +"','"+ article +"','"+ photo1 +"','"+ legend1 +"','"+ photo2 +"','"+ legend2 +"','"+ photo3 +"','"+ legend3 +"','"+ photo4 +"','"+ legend4 +"','"+ photo5 +"','"+ legend5 +"','"+ highlight +"','"+ photo_highlight +"','"+ tags +"')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    var lixo = converte_data(publi_date)
    console.log("1 record inserted" + " Data" + publi_date + " ano?  " + lixo );
   res.redirect("/cms");
  }); 

    }
    else
    {
      res.redirect('/access')
    }




  
});


function data_publica()
{

var current_datetime = new Date()
var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
return formatted_date;

}


function converte_data(x)
{

var current_datetime = new Date(x)

var publicacao = x.split("-");
//var ano = publicacao[0];
//var mes = publicacao[1]
//var dia = publicacao[2]

var ano = publicacao[2];
var mes = publicacao[1]
var dia = publicacao[0]


var publica = ano+"-"+mes+"-"+dia

//x = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
return publica;

}


app.get("/update_article/:cod", function(req, res) { // user route
 


     if (req.session.name == "junior")
    {
    var cod = req.params.cod;
      connection.query("SELECT * FROM ARTICLES WHERE cod = "+ cod +"", (err,rows) => {
      if(err) throw err;
      res.render("update_article.ejs", {rows, sessao_usuario});
      console.log( "Rows" + cod + "Req" + req );
       });
    console.log( "Usuario da sessão  " + req.session.name);
    }
    else
    {
      res.redirect('/access')
    }
 


      
});


app.post('/update_article2',function(req,res){



 if (req.session.name == "junior")
    {
    
    var cod = req.body.cod;
  var titulo = req.body.title;
  var subtitulo = req.body.subtitle;
  var author = req.body.author;
  var article = req.body.article;
  var section = req.body.section;
  var subsection = req.body.subsection;

  var photo1 = req.body.photo1;
  var legend1 = req.body.legend1;
  
  var photo2 = req.body.photo2;
  var legend2 = req.body.legend2;
  
  var photo3 = req.body.photo3;
  var legend3 = req.body.legend3;
  
  var photo4 = req.body.photo4;
  var legend4 = req.body.legend4;

  var photo5 = req.body.photo5;
  var legend5 = req.body.legend5;

  var photo_highlight = req.body.photo_highlight; 
  var highlight = req.body.highlight;               

  var publi_date =  req.body.publi_date;
  var tags =  req.body.tags;

  publi_date = req.body.publi_date;

  publi_date = converte_data(publi_date);



  var sql = "UPDATE ARTICLES SET title = '"+ titulo +"', subtitle='"+ subtitulo +"', publi_date='"+ publi_date +"', author='"+ author +"', article='"+ article +"', section='"+ section +"', subsection='"+ subsection +"', photo1='"+ photo1 +"', legend1='"+ legend1 +"', photo2='"+ photo2 +"', legend2='"+ legend2 +"', photo3='"+ photo3 +"', legend3='"+ legend3 +"', photo4='"+ photo4 +"', legend4='"+ legend4 +"', photo5='"+ photo5 +"', legend5='"+ legend5 +"', highlight='"+ highlight +"', photo_highlight='"+ photo_highlight +"', tags='"+ tags +"' WHERE COD ="+ cod +" ;";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted" + cod + "data original" + publi_date);
   res.redirect("/cms");
  });  

    console.log( "sessao motocas " + req.session.name);
    }
    else
    {
      res.redirect('/access')
    }


  
});



app.get("/delete_article/:cod", function(req, res) { // user route
   // res.render("testes.ejs", {

    if (req.session.name == "junior")
    {
    var cod =  req.params.cod
      connection.query("DELETE FROM ARTICLES WHERE cod="+ cod +"", (err,rows) => {
      if(err) throw err;
      res.redirect("/cms");
      //console.log( "teste" + secao());
       });
    console.log( "sessao motocas " + req.session.name);
    }
    else
    {
      res.redirect('/access')
    }

     
});


app.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        console.log("sessao encerrada");
        res.redirect('/access');
    });
    });


// 	AQUI COMEÇAM AS ROTAS DO SITE

app.get("/next/:pagina/:secao", function(req, res) { // user route
  
  var pagina = req.params.pagina;
  var offSet = parseInt(pagina);
  var section = req.params.secao;

  var instSQl = "";
  var Sql1 = "";
  var Sql2 = "";
  
   if (section != "all")
   {
     var  instSQl = "where section = '" + section +"'";

     if (route_selector != 1)
     {
       instSQl = "where TAGS like '%"+ section +"%'";
     }
   }

   if (searchTest != "")
   {
     var instSQl = "where article like '%"+ searchTest +"%'";
   }
 
  Sql1 =  "select * from ARTICLES "+ instSQl +" order by publi_date DESC limit 9 offset "+ (offSet * 9) +""

  Sql2 = "select cod from ARTICLES "+ instSQl +"  order by publi_date  limit 1";
  
  var linha = "";

  connection.query(Sql1, (err,rows) => {
      if(err) throw err;

         connection.query(Sql2, (err,linhas) => {
         if(err) throw err;
         
            linhas.forEach(linha => { 
            linha = linha.cod; 
              console.log ("linha é" + linha);
              console.log("O termo é " + searchTest);
             res.render("conteudos.ejs", {rows, pagina, section, linha});
             }); 
      
      });
      
          

     
    
       });





});

app.get("/prior/:pagina/:secao", function(req, res) { // user route
  
  
   var pagina = req.params.pagina;
    pagina = pagina - 1;
   var offSet = parseInt(pagina);
   var section = req.params.secao;

  var instSQl = "";
  var Sql1 = "";
  var Sql2 = "";

  
   if (section != "all")
   {
     var  instSQl = "where section = '" + section +"'";
     if (route_selector != 1)
     {
       instSQl = "where TAGS like '%"+ section +"%'";
     }
   }
   if (searchTest != "")
   {
     var instSQl = "where article like '%"+ searchTest +"%'";
   }

  Sql1 = "select * from ARTICLES "+ instSQl +" order by publi_date DESC limit 9 offset "+ (offSet * 9) +"";
  Sql2 = "select cod from ARTICLES "+ instSQl +" order by publi_date  limit 1"
  

  connection.query(Sql1, (err,rows) => {
      if(err) throw err;
     
          connection.query(Sql2, (err,linhas) => {
         if(err) throw err;
         
            linhas.forEach(linha => { 
            linha = linha.cod; 
            console.log ("linha é" + linha);
             
             res.render("conteudos.ejs", {rows, pagina, section, linha});
             }); 
      
      });
      

     
      //console.log(estado);
       });





});



app.get("/:navega/:cod/:section/:ordem", function(req, res) { 
   var cod = req.params.cod;
   var section = req.params.section.toLowerCase()
   var navega = req.params.navega
   var ordem = req.params.ordem

   codz = parseInt(cod) + 18;

   var cod_cod = (codz.toString());

   

   
   var complemento_sql2 = ""

 


   var dia = navega;
    console.log(dia);
    if (section == "all")
    {
      complemento_sql = ""
    }
    else
    {
      complemento_sql = " and section ='"+ section +"'";
    }

   if (ordem  == "antigas")
   {
     ordem = "<"
      
     
   }
   else
   {
     ordem = ">"
 
     
     complemento_sql2 = "and cod < "+ cod_cod +""


   }

   string_sql= "select * from ARTICLES where publi_date "+ ordem +" '"+ dia +"' "+ complemento_sql +""+ complemento_sql2 +" ORDER by publi_date DESC LIMIT 9";
   connection.query(string_sql, (err,rows) => {
      if(err) throw err;
      console.log(string_sql);
      //console.log("ordem " + ordem);
      console.log ("tipo da var " + typeof cod_cod + "valor" + cod_cod )
    
      res.render("news.ejs", {rows, section});

    });


   
});

app.get("/:x", function(req, res) { // user route
 

      searchTest = "";

      var section = req.params.x;
      var conexao1;
     

      if (section == "mercado" || section == "carros" || section == "motos" || section == "startups" || section == "bikes" || section == "tech" || section == "racing")
      {
         
       route_selector = 1;
         
         var url = '/next/0/'+ section +'';
        res.redirect(url);

         

      }
     else  
      {
          var linha = "";   
         conexao1 = "select * from ARTICLES where TAGS like '%"+ section +"%' ORDER BY publi_date DESC LIMIT 9; " 
          connection.query(conexao1, (err,rows) => {
          if(err) throw err;
                
          rows.forEach(linha => { 
            linha = linha.cod; 
            pagina = 0;
             console.log("Linha"  + linha + " secao " + section);
           })
             res.render("conteudos.ejs", {rows, pagina, section, linha});
        
         
        
       });
      }
     
     

  
       });





app.get("/", function(req, res) { // root route or home route
   
    res.render("index.ejs")
});





app.get("/article/:cod/:valor", function(req, res) { // user route
   // res.render("testes.ejs", {
      var cod = req.params.cod;
      var empresas;
      var rows;
      var titulo_noticia = "teste";
      var sugestoes;
      var variaveis;
     variaveis = "select sugestoes.artigo, ARTICLES.title, ARTICLES.photo1 from sugestoes inner join ARTICLES on sugestoes.artigo = ARTICLES.COD where sugestoes.COD = "+ cod +" LIMIT 4"; 

//connection.query("select * from empresas", (err,empresas_x) => {if(err) throw err;empresas = empresas_x});


connection.query("SELECT * FROM ARTICLES WHERE cod = "+ cod +"", (err,rows_x) => {if(err) throw err;
    /*rows.forEach(row => {console.log(row.title);titulo_noticia = row.title;});*/
    //variaveis = "select * from ARTICLES where cod = 165 or cod = 167";
    console.log("ordem");
  rows = rows_x;
  });


connection.query(variaveis, (err,sugestoes_x) => {if(err) throw err;
    /*rows.forEach(row => {console.log(row.title);titulo_noticia = row.title;});*/
  console.log(variaveis);
  sugestoes = sugestoes_x;
  });

      connection.query("select * from empresas", (err,empresas_x) => {if(err) throw err;
        empresas = empresas_x
    res.render("article.ejs", {rows, empresas, sugestoes}); 
      });
      
});

// AQUI ACABAM AS ROTAS DO SITE



// End of starting route






function torque_power(t1,t2,t3,t4)
{

  totalTorque_Power = parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4);

  return totalTorque_Power;
}


function superior(v1,v2)
{
  var va1 = parseInt(v1);
  var va2 = parseInt(v2);
  
  var newNumber = 0;
  var originalNumber = 0;


  if (va1 > va2)
  {
    newNumber = parseInt(va1);
    originalNumber = parseInt(va2);
  }
  else
  {
    newNumber = parseInt(va2);
    originalNumber =  parseInt(va1);
  }

  var Increase = newNumber - originalNumber;
  var percentualIcrease = (Increase / originalNumber) * 100;

  return percentualIcrease;

}

// INCIA OS SERVIDOR

app.listen(21171, function() {
    console.log("Servidor em operacao");
});

