-- Banco de dados Livraria

/*Adicione os seguintes autores à tabela `autores`:

- **J.K. Rowling**: Nacionalidade Britânica, Data de Nascimento 31 de julho de 1965.
- **George R.R. Martin**: Nacionalidade Americana, Data de Nascimento 20 de setembro de 1948.
- **J.R.R. Tolkien**: Nacionalidade Britânica, Data de Nascimento 3 de janeiro de 1892.
- **Isaac Asimov**: Nacionalidade Americana, Data de Nascimento 2 de janeiro de 1920.

Adicione as seguintes categorias à tabela `categorias`:

- **Fantasia**
- **Ficção Científica**
- **Mistério**
- **Romance**

Adicione os seguintes livros à tabela `livros`, associando-os aos autores e categorias correspondentes:

- **Harry Potter e a Pedra Filosofal**: Publicado em 1997, Preço R$39,90, Autor: J.K. Rowling, Categoria: Fantasia.
- **Game of Thrones**: Publicado em 1996, Preço R$49,90, Autor: George R.R. Martin, Categoria: Fantasia.
- **O Senhor dos Anéis**: Publicado em 1954, Preço R$59,90, Autor: J.R.R. Tolkien, Categoria: Fantasia.
- **Eu, Robô**: Publicado em 1950, Preço R$29,90, Autor: Isaac Asimov, Categoria: Ficção Científica.
- **O Hobbit**: Publicado em 1937, Preço R$34,90, Autor: J.R.R. Tolkien, Categoria: Fantasia.*/

use livraria_l10;


insert into autores (nome, nacionalidade, data_nascimento)
values ('J.K. Rowling', 'Britânica', '1965-07-31'), ('George. R.R. Martin', 'Americana','1948-09-20'), 
('J.R.R. Tolkien', 'Britânica','1892-01-03'), ('Isaac Asimov','Americana','1920-01-02');

insert into categorias(nome)
value ('Fantasia1'),('Ficção Científica11'),('Misterio1'),('Romance1');


-- inserir livros com as chaves estrangeiras ( adpate para os valores do seu banco)
insert into livros(titulo, ano_publicacao, preco, autor_id, categoria_id) values
('Harry Potter e a Pedra Filosofal', 1997, 39.90, 1, 122);
-- passe os valores dos ids para a informação pedida. Faça uma seleção na tabela e veja
-- os ids necessários. 