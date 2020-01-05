
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


      
      connection.query("SELECT * FROM ARTICLES ORDER BY COD DESC", (err,rows) => {
      if(err) throw err;
      res.render("cms.ejs", {rows});
      
      console.log( "Ok");
       
    });
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
    res.render("new_article.ejs")
});



app.post('/insert_article',function(req,res){
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


  var sql = "INSERT INTO ARTICLES (title, subtitle, section, author, article, photo1,legend1, photo2,legend2, photo3,legend3,photo4,legend4,photo5,legend5, highlight, photo_highlight) VALUES ('"+ titulo +"', '"+ subtitulo +"','"+ section +"','"+ author +"','"+ article +"','"+ photo1 +"','"+ legend1 +"','"+ photo2 +"','"+ legend2 +"','"+ photo3 +"','"+ legend3 +"','"+ photo4 +"','"+ legend4 +"','"+ photo5 +"','"+ legend5 +"','"+ highlight +"','"+ photo_highlight +"')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted" + highlight);
   res.redirect("/cms");
  });
});


app.get("/update_article/:cod", function(req, res) { // user route
   // res.render("testes.ejs", {
      var cod = req.params.cod;
      connection.query("SELECT * FROM ARTICLES WHERE cod = "+ cod +"", (err,rows) => {
      if(err) throw err;
      res.render("update_article.ejs", {rows});
      console.log( "Rows" + cod + req);
       });
});


app.post('/update_article2',function(req,res){
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


  var sql = "UPDATE ARTICLES SET title = '"+ titulo +"', subtitle='"+ subtitulo +"', author='"+ author +"', article='"+ article +"', section='"+ section +"', photo1='"+ photo1 +"', legend1='"+ legend1 +"', photo2='"+ photo2 +"', legend2='"+ legend2 +"', photo3='"+ photo3 +"', legend3='"+ legend3 +"', photo4='"+ photo4 +"', legend4='"+ legend4 +"', photo5='"+ photo5 +"', legend5='"+ legend5 +"', highlight='"+ highlight +"', photo_highlight='"+ photo_highlight +"' WHERE COD ="+ cod +" ;";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted" + cod);
   res.redirect("/cms");
  });
});



app.get("/delete_article/:cod", function(req, res) { // user route
   // res.render("testes.ejs", {

      var cod =  req.params.cod
      connection.query("DELETE FROM ARTICLES WHERE cod="+ cod +"", (err,rows) => {
      if(err) throw err;
      res.redirect("/cms");
      //console.log( "teste" + secao());
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

