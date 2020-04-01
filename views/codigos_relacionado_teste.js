console.log("Essas são as noticias noticias_relacionadas" + noticias_relacionadas); 
       var cont = 0;
       var not_rel = noticias_relacionadas.split(",");
       var compr = not_rel.length;
       do{
        console.log("Valor de array" + not_rel[cont])
        if (cont == (compr -1))
        {
            sqlOr = sqlOr + " cod = " +  not_rel[cont] + " "
        }                  
        
        else
        {
        sqlOr = sqlOr + " cod = " + not_rel[cont] + " or ";
        }
        cont =  cont + 1;

      }while (cont < compr)



      connection.query(sqlOr, (err,registros_x) => {
          if(err) throw err;
          registros = registros_x;
            
            registros.forEach(row =>{ console.log(row.title);});  
            
              console.log("Instrução" + sqlOr); 
              console.log("Registros dentro da conexao" + registros);
            
            });

      console.log("Registros fora da conexao " + registros); 
            console.log(empresas);