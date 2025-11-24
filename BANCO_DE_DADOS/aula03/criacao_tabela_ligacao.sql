-- tabela de ligação entre usuarios e projetos
USE atividade03;

CREATE TABLE usuarios_projetos(
	usuario_id int ,
    projeto_id int ,
    PRIMARY KEY ( usuario_id, projeto_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
	FOREIGN KEY (projeto_id) REFERENCES projetos(id));
