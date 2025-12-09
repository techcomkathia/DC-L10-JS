--  ------------ DDL BANCO ----------------

create database lojal10;
use lojal10;

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
-- 2) Crie informações para  : 5 itens, 5 produtores e 7 Nfs
-- 1️⃣ Inserir 5 itens (produtos disponíveis)
INSERT INTO item (nomeItem, valorUnit) VALUES
('Notebook Dell Inspiron', 3500.00),
('Mouse Gamer Logitech', 150.00),
('Teclado Mecânico Redragon', 280.00),
('Monitor Samsung 24"', 900.00),
('Headset HyperX Cloud', 450.00);

-- 2️⃣ Inserir 5 produtores (fabricantes ou fornecedores)
INSERT INTO produtor (nomeProdutor) VALUES
('Dell Technologies'),
('Logitech International'),
('Redragon Brasil'),
('Samsung Electronics'),
('HyperX Gaming');

-- 3️⃣ Inserir 7 notas fiscais (NF)
INSERT INTO nf (numeroNf, dataNf) VALUES
(1001, '2025-01-15'),
(1002, '2025-01-17'),
(1003, '2025-02-02'),
(1004, '2025-02-18'),
(1005, '2025-03-10'),
(1006, '2025-03-22'),
(1007, '2025-04-05');




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