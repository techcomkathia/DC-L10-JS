create database livraria_l10;

use livraria_l10;

-- criação tabela autores
create table autores (
	id_autor int auto_increment primary key,
    nome varchar(100) not null,
    nacionalidade varchar(50)    
);

create table categorias (
	id_categoria int auto_increment primary key,
    nome varchar(50) not null unique
);


create table livros (
	id int auto_increment primary key, 
    titulo varchar(100) not null,
    ano_publicacao int,
    preco decimal(4,2),
    autor_id int,
    categoria_id int,
    -- configuração da chave estrangeira
    foreign key (autor_id) references
    autores(id_autor),
    foreign key (categoria_id) references
    categorias(id_categoria)
);