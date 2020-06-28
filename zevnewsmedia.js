
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

/*
app.get('/testeenvia', function (req, res) {
 
    // Read all the documents in "veiculo" collection
  conexao.connect(url, function(err, db) {
      if (err) throw err;
      var resultado;
      var dbo = db.db(database);
      var teste = new Array();
      var x = 0;

      var parametro =  dbo.collection(collection1).find();

      dbo.collection(collection1).find({},{fields:{_id: 0, "brand":1}}).toArray(function(err, result)
      {
        if (err) throw err;
        result.forEach(element => {
          teste[x] = element.brand;
          console.log(teste[x]);
          x = x + 1;});
          res.send(teste);
      });
      console.log(parametro);
    });
  // End of Read
});
*/

app.get('/mongodb/:valor', function (req, res) {
 
    // Read all the documents in "veiculo" collection
  conexao.connect(url, function(err, db) {
      if (err) throw err;
      var resultado;
      var dbo = db.db(database);
     
       var referencia = req.params.valor;
       console.log( "referencia" + referencia);
      dbo.collection(collection1).find({"brand": new RegExp(referencia, 'i')}).toArray(function(err, result) {
        if (err) throw err;
        var codigo = '<ul id="searchResultsList">';
        var soma = 1;
        var contador = 0;
        result.forEach(element => {
          console.log(element.brand);
        /*console.log("O nome é " + element.brand);*/
        codigo = codigo + '<li>'+ element.brand + ''  + element.model +'<input type="checkbox" id="vehicle'+soma+'" name="vehicle'+soma+'"  value="'+ element.model +'" class="selectVehicle"></li>';
        soma =  soma + 1;
        contador++;
         });

         // var page = "list_documents_test";
        codigo = codigo + '</ul>';
        
        codigo = codigo + '<input type="hidden" value="'+ contador +'" id="totalSearchs" name="totalSearchs">'
       // console.log(result + "resul")
        //res.render('comparator.ejs',{result});
        console.log(codigo);
        res.send(codigo)
      });
    });
  // End of Read
});




app.get("/access", function(req, res) { // root route or home route
    //res.send('welcome to home page');
    res.render("access.ejs")
});

app.get('/testeenvia', function (req, res) {
 
    // Read all the documents in "veiculo" collection
  conexao.connect(url, function(err, db) {
      if (err) throw err;
      var resultado;
      var dbo = db.db(database);
      dbo.collection(collection1).find().toArray(function(err, result) {
        if (err) throw err;
        result.forEach(element => {/*console.log("O nome é " + element.brand);*/ });
        var page = "list_documents_test";
        console.log(result + "resul")
        res.render('comparator2.ejs',{result});
      });
    });
  // End of Read
});
app.get("/access", function(req, res) { // root route or home route
    //res.send('welcome to home page');
    res.render("access.ejs")
});


app.post("/login", function(req, res) { // root route or home route
    //res.send('welcome to home page');
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

/*

app.get("/news", function(req, res) { // root route or home route
    //res.send('Motos');
    //res.render("news.ejs")
    connection.query("SELECT * FROM ARTICLES ORDER BY COD DESC LIMIT 9 ", (err,rows) => {
      if(err) throw err;
      
      var estado = "";
      if (Array.isArray(rows) && rows.length === 0.)
      {
           // estado vazio
           res.render("vazio.ejs");
      }
      else
      {
          //estado = "cheio";
          res.render("news.ejs", {rows});

      } 

      //console.log(estado);
       });
});


*/

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
   // res.render("testes.ejs", {

     //searchItem = req.params.searchItem;
      //var section = req.params.x; 
     var searchItem = req.body.searchItem;
      console.log("valor" + searchItem);
      searchTest = searchItem;
      connection.query("select * from ARTICLES where article like '%"+ searchItem +"%' ORDER BY PUBLI_DATE DESC LIMIT 9", (err,rows) => {
      if(err) throw err;
      
      var estado = "";
      if (Array.isArray(rows) && rows.length === 0.)
      {
           // estado vazio
           //res.render("vazio.ejs");
           //res.render("vazio.ejs");
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
   // res.render("testes.ejs", {

     //searchItem = req.params.searchItem;
      //var section = req.params.x; 
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

      //console.log(estado);
       });
});



app.get("/author/:id", function(req, res) { // user route
   // res.render("testes.ejs", {

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
                //res.render("cms.ejs", {rows, sessao_usuario});
               //res.redirect('/all');
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

//var current_datetime = new Date()
//var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();


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
   // res.render("testes.ejs", {


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
      
          

     
      //console.log(estado);
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

/*
   if (ordem == "next")
   {
     operador = "<"
     fim = " ORDER by cod DESC"

   }
   else
   {
       operador = ">"
       fim = ""
   }
 
 if (section == "all" )
 { 
        var cod2 = (parseInt(cod)) + (9-2);
        cod2 = cod2.toString();

        cod3 = (parseInt(cod)) + 18;
        cod3 = cod3.toString();

        if (ordem == "before"){
          operador = ">"
           conexao1 = "select * from ARTICLES where cod "+ operador +" "+ cod3 +" ORDER BY COD DESC LIMIT 9";
        }
        else
        {
        conexao1 = "select * from ARTICLES where cod "+ operador +" "+ cod +" ORDER BY COD DESC LIMIT 9";
        }
        // precisa pegar os 9 anteriores
        
        console.log (" primeira conexao " + conexao1 + "ordem1 " + ordem);
        console.log ("secao " + section + " operador 1 é " + operador + "o fim é" + fim );
       
 }
 else
 {
    conexao1 = "select * from ARTICLES where cod "+ operador +" "+ cod + " and section ='"+ section +"' ORDER by cod DESC";
 }

   connection.query(conexao1, (err,rows) => {
      if(err) throw err;
     conexao1 = "";
     ordem = "";
     operador = "";

      console.log ( " a conexao é " + conexao1 + "operador é" + operador);
      res.render("news.ejs", {rows, section});

    });*/
   
});

app.get("/:x", function(req, res) { // user route
   // res.render("testes.ejs", {


      searchTest = "";

      var section = req.params.x;
      var conexao1;
     

      if (section == "mercado" || section == "carros" || section == "motos" || section == "startups" || section == "bikes" || section == "tech" || section == "racing")
      {
         
        //  conexao1 = "SELECT * FROM ARTICLES WHERE section='"+ section +"' OR subsection='"+ section +"' ORDER BY COD DESC LIMIT 9 "

        //conexao1 = "SELECT * FROM ARTICLES WHERE section='"+ section +"' ORDER BY publi_date DESC LIMIT 9 "
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
        
         
         //res.render("vazio.ejs");
       });
      }
     
      /*
      connection.query(conexao1, (err,rows) => {
      if(err) throw err;
      
      var estado = "";
      if (Array.isArray(rows) && rows.length === 0.)
      {
           // estado vazi
           res.render("vazio.ejs");
      }*
      else
      {
          //estado = "cheio";
          res.render("vazio.ejs");

      } 

      //console.log(estado);*/
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



// INCIA OS SERVIDOR

app.listen(21171, function() {
    console.log("Servidor em operacao");
});

