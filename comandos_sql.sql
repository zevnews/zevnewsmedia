select * from materias_relacionadas;
ALTER TABLE empresas ADD UNIQUE (nome);


DELETE FROM materias_relacionadas WHERE ID = 1;

ALTER TABLE ARTICLES
  DROP COLUMN titulo_sugestao5;

INSERT INTO materias_relacionadas(cod,sugestao1,titulo_sugestao1,sugestao2,titulo_sugestao2)
values(168,163,"titulo 163",165,"titulo 165");

select * from ARTICLES inner join materias_relacionadas on ARTICLES.cod = materias_relacionadas.cod WHERE ARTICLES.COD = 168;



CREATE TABLE sugestoes (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
cod int NOT NULL,
artigo int NOT NULL,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) 

insert into sugestoes (cod,artigo)values(165,148);

select * from sugestoes;

describe ARTICLES;

select sugestoes.artigo, ARTICLES.foto1, ARTICLES.title from sugestoes inner join ARTICLES on sugestoes.artigo = ARTICLES.COD where sugestoes.COD = 168;

select * from empresas;


UPDATE empresas set nome = "Cake" where nome = "Ösa";

insert into empresas(nome,descricao)values("Bolinger","EUA");

describe empresas;

select * from sugestoes;

delete from sugestoes where cod = 155;

select count(publi_date) as total from ARTICLES;

SELECT count(publi_date) as total FROM ARTICLES WHERE publi_date <= "2020-2-28";

SELECT count(publi_date) as total FROM ARTICLES WHERE publi_date >= "2020-2-28" LIMIT 2,4;

SELECT * FROM ARTICLES;

SELECT * FROM ARTICLES LIMIT 2,4;
 
SELECT  COUNT(*) FROM ARTICLES WHERE publi_date >= "2020-2-28";

select * from ARTICLES WHERE publi_date >= "2020-2-28" LIMIT 2,4;

select publi_date from ARTICLES WHERE publi_date >= "2020-2-28" LIMIT 4;

select publi_date from ARTICLES WHERE publi_date >= "2020-2-28" LIMIT 4;

select * from ARTICLES where publi_date in (select publi_date from ARTICLES as teste WHERE publi_date >= "2020-2-28" ORDER by publi_date);


 
ESTA É A INSTRUCAO ANTERIOR

select count(*) from ARTICLES where publi_date >= "2019-12-28";

select publi_date,title from ARTICLES as teste WHERE publi_date >= "2019-12-28" ORDER by publi_date DESC LIMIT 10 OFFSET 30;

select title, publi_date from ARTICLES where cod > 164 ORDER BY publi_date DESC LIMIT 10;

select count(cod) as total, cod, title from ARTICLES;

ESTA É INSTRUÇÃO DEPOIS

select count(cod) as referencia, publi_date from ARTICLES as teste WHERE publi_date < "2020-2-28" ORDER by publi_date DESC LIMIT 10;

select publi_date from ARTICLES ORDER by publi_date DESC LIMIT 10;

select * from ARTICLES as teste WHERE >  (select teste WHERE publi_date >= "2020-2-28");

Pagina 1

select * from ARTICLES order by cod DESC LIMIT 10;

select * from ARTICLES ORDER by publi_date DESC limit 10;

select * from ARTICLES ORDER by publi_date DESC LIMIT 10 offset 10;

select * from ARTICLES where cod >= 148 order by publi_date DESC limit 10;

Pagina 2

select count(*) from ARTICLES;

select * from ARTICLES where cod < 148 order by publi_date DESC limit 10;

select * from ARTICLES where cod >= 131 order by publi_date DESC limit 10 offset 20;

PRIMEIRA PÁGINA

select cod, publi_date, title from ARTICLES order by publi_date DESC limit 10;

select cod, publi_date, title from ARTICLES where publi_date >= "2020-02-27" order by publi_date DESC limit 10;

SEGUNDA PÁGINA

select cod, publi_date, title from ARTICLES where publi_date <= "2020-02-27" order by publi_date DESC limit 10;

select cod, publi_date, title from ARTICLES where publi_date >= "2020-02-07" order by publi_date DESC limit 10 offset 8;


TERCEIRA PÁGINA

select count(*) from ARTICLES;

select cod, publi_date, title from ARTICLES where publi_date <= "2020-02-07" order by publi_date DESC limit 10;

select cod, publi_date, title from ARTICLES where publi_date >= "2020-01-21" order by publi_date DESC limit 10 offset 17;


-----



1 PÁGINA

select cod, publi_date, title from ARTICLES order by publi_date DESC limit 10;

select cod, publi_date, title from ARTICLES where publi_date >= "2020-02-27" order by publi_date DESC limit 10;

2 PÁGINA

select cod, publi_date, title from ARTICLES where publi_date <= "2020-02-27" order by publi_date DESC limit 10;

select cod, publi_date, title from ARTICLES where publi_date >= "2020-02-07" order by publi_date DESC limit 10 offset 8;

39 - 20 = 19

3 PÁGINA

select count(*) from ARTICLES;

select cod, publi_date, title from ARTICLES where publi_date <= "2020-02-07" order by publi_date DESC limit 10;

select cod, publi_date, title from ARTICLES where publi_date >= "2020-01-21" order by publi_date DESC limit 10 offset 17;

4 PAGINA

select cod, publi_date, title from ARTICLES where publi_date <= "2020-01-21" order by publi_date DESC limit 10;

select cod, publi_date, title from ARTICLES where publi_date >= "2019-12-18" order by publi_date DESC limit 10 offset 22;



Listagem via cod

select * from ARTICLES  order by cod DESC LIMIT 10;

1 PÁG

select cod, publi_date, title from ARTICLES order by cod DESC limit 10 offset 10;

select cod, publi_date, title from ARTICLES order by cod limit 10;

2 PÁG

select cod, publi_date, title from ARTICLES order by cod DESC limit 10 offset 20;

select cod, publi_date, title from ARTICLES order by cod DESC limit 10 offset 10;



3 PÁG

select count(*) from ARTICLES;

select cod, publi_date, title from ARTICLES order by cod DESC limit 10 offset 30;

select cod, publi_date, title from ARTICLES order by cod DESC limit 10 offset 20;

4 PAG

select cod, publi_date, title from ARTICLES order by cod DESC limit 10 offset 40;

select cod, publi_date, title from ARTICLES order by cod DESC limit 10 offset 30;


Listagem via publidate

select * from ARTICLES  order by publi_date DESC LIMIT 10;

1 PÁG

select  * from ARTICLES order by publi_date DESC limit 10 offset 10; 

select cod, publi_date, title from ARTICLES where section = "motos" order by publi_date DESC limit 10 offset 0;

2 PÁG

select cod, publi_date, title from ARTICLES order by publi_date DESC limit 10 offset 20;

select cod, publi_date, title from ARTICLES order by publi_date DESC limit 10 offset 10;



3 PÁG

select count(*) from ARTICLES;

select cod, publi_date, title from ARTICLES order by publi_date DESC limit 10 offset 30;

select cod, publi_date, title from ARTICLES order by publi_date DESC limit 10 offset 20;

4 PAG

select cod, publi_date, title from ARTICLES order by publi_date DESC limit 10 offset 40;

select cod, publi_date, title from ARTICLES order by publi_date DESC limit 10 offset 30;

select cod from ARTICLES order by publi_date  limit 1

show tables;

describe ARTICLES;

select * from sugestoes;

select * from empresas;

delete from sugestoes where cod = 186 and artigo = 183;

select * from ARTICLES where article like "%Tesla%" ORDER BY PUBLI_DATE DESC LIMIT 9;

select * from empresas where nome = "Karma";

insert into empresas (nome,descricao) values ("Lordstown","EUA");


