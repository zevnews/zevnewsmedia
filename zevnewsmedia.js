
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


app.get("/cms", function(req, res) { // user route
   // res.render("testes.ejs", {


    if (req.session.name == "junior")
    {
      sessao_usuario = req.session.name; 
      connection.query("SELECT * FROM ARTICLES ORDER BY COD DESC", (err,rows) => {
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


app.get("/all", function(req, res) { // user route
   // res.render("testes.ejs", {

      var section = req.params.x;
      connection.query("SELECT * FROM ARTICLES ORDER BY COD DESC LIMIT 8 ", (err,rows) => {
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
          res.render("all.ejs", {rows, section});

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



app.post('/insert_article',function(req,res){


 if (req.session.name == "junior")
    {
    
  var titulo = req.body.title;
  var subtitulo = req.body.subtitle;
  var author = req.body.author;
  var article = req.body.article;
  var section = req.body.section;
  
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

  var publi_date = req.body.publi_date //data_publica();

  var publi_date = converte_data(publi_date);

//var current_datetime = new Date()
//var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();


  var sql = "INSERT INTO ARTICLES (title, subtitle, publi_date, section, author, article, photo1,legend1, photo2,legend2, photo3,legend3,photo4,legend4,photo5,legend5, highlight, photo_highlight) VALUES ('"+ titulo +"', '"+ subtitulo +"', '"+ publi_date +"','"+ section +"','"+ author +"','"+ article +"','"+ photo1 +"','"+ legend1 +"','"+ photo2 +"','"+ legend2 +"','"+ photo3 +"','"+ legend3 +"','"+ photo4 +"','"+ legend4 +"','"+ photo5 +"','"+ legend5 +"','"+ highlight +"','"+ photo_highlight +"')";
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

  publi_date = req.body.publi_date;

  publi_date = converte_data(publi_date);



  var sql = "UPDATE ARTICLES SET title = '"+ titulo +"', subtitle='"+ subtitulo +"', publi_date='"+ publi_date +"', author='"+ author +"', article='"+ article +"', section='"+ section +"', photo1='"+ photo1 +"', legend1='"+ legend1 +"', photo2='"+ photo2 +"', legend2='"+ legend2 +"', photo3='"+ photo3 +"', legend3='"+ legend3 +"', photo4='"+ photo4 +"', legend4='"+ legend4 +"', photo5='"+ photo5 +"', legend5='"+ legend5 +"', highlight='"+ highlight +"', photo_highlight='"+ photo_highlight +"' WHERE COD ="+ cod +" ;";
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


app.get("/:x", function(req, res) { // user route
   // res.render("testes.ejs", {

      var section = req.params.x;
      connection.query("SELECT * FROM ARTICLES WHERE section='"+ section +"' ORDER BY COD DESC LIMIT 9 ", (err,rows) => {
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
          res.render("news.ejs", {rows, section});

      } 

      //console.log(estado);
       });
});




app.get("/", function(req, res) { // root route or home route
    var variavel = "All about zevs"
    res.render("index.ejs", {variavel})
});






app.get("/article/:cod/:valor", function(req, res) { // user route
   // res.render("testes.ejs", {
      var cod = req.params.cod;
      connection.query("SELECT * FROM ARTICLES WHERE cod = "+ cod +"", (err,rows) => {
      if(err) throw err;
      res.render("article.ejs", {rows});
      console.log( "Rows" + cod + req);
       });
       //res.render("article.ejs")
});

// AQUI ACABAM AS ROTAS DO SITE








// INCIA OS SERVIDOR

app.listen(21171, function() {
    console.log("Servidor em operacao");
});

