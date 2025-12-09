/* 
INSERT INTO nomeTabela (coluna1, coluna2, coluna3, ...)
VALUES (valorColuna1, valorColuna2, valorColuna3, ...),
(valorColuna1, valorColuna2, valorColuna3, ...);
*/

use atividade03;

/* modificação dos tipos de dados das tabelas*/

alter table projetos modify data date not null;

alter table usuarios modify senha varchar(45) default '123mudar';

-- Não informando a coluna o valor para ela será null 
-- ou o valor padrão definido
INSERT INTO usuarios (nome, nomeUsuario, email)
VALUES ('Maria','Rh_maria','maria@empresa.com');

-- a senha não será a padrão. Informar a coluna e os valores
INSERT INTO usuarios (nome, nomeUsuario,senha, email)
VALUES ('Paulo', 'Ti_paulo', '123@456', 'paulo@empresa.com'),
('Ana', 'Rh_ana', '123mudar', 'ana@empresa.com'),
('Clara', 'Ti_clara', '123mudar', 'clara@empresa.com'),
('Aparecido', 'Rh_apareci', '55@!cido', 'aparecido@empresa.com');


INSERT INTO projetos ( nome, descricao, data)
VALUES ('Refolha', 'Refaturação das folhas', '2014-05-19'),
("Manutenção PC's", "Manutenção PC's", '2014-06-09' ),
('Auditoria', null, '2014-07-09');

INSERT INTO usuarios_em_projetos (usuario_id, projeto_id)
VALUES (1,1),
(5,1),
(3,3),
(4,2),
(2,2);

-- Erro de inserção. Valor já existe dentro do banco. 
-- Chave primária composta
/*INSERT INTO usuarios_em_projetos (usuario_id, projeto_id)
VALUES (1,1); */

