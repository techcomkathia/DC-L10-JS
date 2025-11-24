--  ------------ DDL BANCO ----------------

create database loja;
use loja;

create table item(
	idItem int auto_increment primary key,
    nomeItem varchar(50),
    valorUnit decimal(10,2)
);

-- alteração das colunas nome e valor para não nulos
alter table item modify nomeItem varchar(50) not null;
alter table item modify valorUnit decimal(10,2) not null;

create table nf(
	idNf int auto_increment primary key,
    numeroNf int not null,
    dataNf date
);

alter table nf modify dataNf date not null;

create table produtor(
  codProd int auto_increment primary key,
  nomeProdutor varchar(100) not null
);


create table venda(
	idVenda int auto_increment primary key,
    fkNf int not null,
    fkItem int not null,
    fkProd int not null,
    quantidade int not null,
    desconto int,
    foreign key (fkNf) references nf (idNf),
    foreign key (fkItem) references item (idItem),
    foreign key (fkProd) references produtor(codProd)
);

-- ---------------- DML--------------------------------
-- 2) Crie informações para  : 5 produtos, 5 itens, 5 produtores e 7 Nfs



-- 3) Reproduza as informações abaixo na tabela de vendas 
INSERT INTO venda (fkNf, fkItem, fkProd, quantidade, desconto) VALUES
( 1 , 1 ,1 , 10, 5 ),
( 1, 2,2 , 3, null),
( 1, 3, 3, 3, null),
( 1, 4 ,4 ,1 , null),
( 1, 5 , 5, 1, null),
( 2 ,1 ,3 , 4, null ),
( 2 ,2 ,4 , 5, null ),
( 2,3 , 5, 7, null),
( 3, 3, 5, 5, null),
( 3, 1, 1,4, null ),
( 3,2 , 4,5 , null),
( 3, 4, 5 ,7 ,null );

INSERT INTO venda (fkNf, fkItem, fkProd, quantidade, desconto) VALUES
(4 ,1 ,5 ,10 , 15),
(4 ,2 ,4 ,12 ,5 ),
(4 ,3 ,1 ,13 ,5 ),
(4 ,4 ,2 ,15 ,5 ),
(5 ,1 ,3 ,3 , null ),
(5 ,2 ,5 ,6 , null ),
(6 ,1 ,1 ,22 , 15 ),
(6 ,2 ,3 ,25 ,20 ),
(7 ,1 ,1 ,10 ,3 ),
(7 ,2 ,2 ,10 ,4 ),
(7 ,3 ,3 ,10 ,4 ),
(7 ,4 ,5 ,10 ,1 );