-- ATIVIDADE 04
-- Execute todos os comandos no mesmo script sql 

-- No banco de dados Livraria (atividaded 02), altere a tabela autores para adiconar uma 
-- nova coluna chamada data_nascimento. O formato dessa nova coluna será date. 
-- O auto incremento do id dos livros deve iniciar em 2000 e dos categorias em 110.   
use livraria_l10;

-- data_nascimento à tabela autores
ALTER TABLE autores ADD COLUMN data_nascimento DATE;

-- 2. Definir o auto incremento da tabela livros para 2000
ALTER TABLE livros AUTO_INCREMENT = 2000;

-- 3. Definir o auto incremento da tabela categorias para 110
ALTER TABLE categorias AUTO_INCREMENT = 110;

-- Mude o tipo de dado da tabela projetos na coluna data (do banco de dados da ATIVIDADE 3) para DATE
-- mude o valor padrão para as senhas da tabela users para 123mudar
-- Mude o auto incremento dos projetos para 2000
-- Mude o nome de usuário para único
-- mude a descrição do projeto para um tipo textual de até 200 caracteres

use atividade03;
alter table projetos
modify column data date;

alter table autoresusarios
alter column senha set default '123mudar';

alter table projetos
auto_increment = 2000;

alter table projetos
modify column descricao varchar(200);
 
