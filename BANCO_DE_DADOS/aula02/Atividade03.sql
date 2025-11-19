create database if not exists atividade03;

use atividade03;

-- criar todas as tabelas com chaves primárias

create table projetos (
 id  int auto_increment primary key ,
 nome varchar(45),
 descricao varchar(45), 
 data varchar(45)
);

create table usuarios(
	id int auto_increment primary key,
    nome varchar(45),
    nomeUsuario varchar(45),
    senha varchar(45),
    email varchar(45)
);

-- criar a tabela de ligação com as chaves estrangeiras 
-- que irão compor a chave primária

create table usuarios_em_projetos(
	usuario_id int,
    projeto_id int,
    primary key (usuario_id , projeto_id),
    -- configuração das chaves estrangeiras
    foreign key (usuario_id) references usuarios(id),
    foreign key (projeto_id) references projetos(id)
);