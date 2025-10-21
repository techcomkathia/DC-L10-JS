/* 🔹 Parte 1 – Objetos Básicos
    a) Crie um objeto chamado `pessoa` com as propriedades: `nome`, `idade`, `cidade`, `altura`, `profissao`. Mostre no console todas as propriedades.  
    b)Adicione ao objeto `pessoa` uma nova propriedade chamada `profissao`e atribua um valor a ela.  
    c) Mostre no console todas as propriedades e valores do objeto `pessoa`.  
    d) Altere o valor da propriedade `cidade` para 'Recife'.  
    e) Remova a propriedade `altura` do objeto `pessoa`.  
    f) Adicione a propriedade endereco. Endereço receberá como valor um objeto com as propriedades rua, cidade, estado.
    g) Adicione a propriedade cursos. Cursos receberá como valor um array as strings 'JS', 'HTML', 'CSS', 'React'.

---

## 🔹 Parte 2 – Loops em Objetos
   a) Use um `for...in` para imprimir todas as propriedades e valores do objeto `pessoa`.  
   b) Crie uma função que receba um objeto e retorne a quantidade de propriedades que ele possui.  
   c) Verifique se o objeto `pessoa` possui a propriedade `altura` e mostre no console `true` ou `false`.   
   d) Crie uma função que receba um objeto e retorne a quantidade de propriedades que ele possui.
   e) Crie uma função que receba um objeto e verifique se ele possui um curso especifico, caso possua retorne true, caso contrario retorne false. (Teste com o curso de TypeScript e o retorno deverá ser false para o objeto criado na parte 1.)
---

## 🔹 Parte 3 – Arrays de Objetos
 let produtos = [
    {
        id: 1,
        nome: 'Notebook',
        preco: 2500,
        categoria: 'eletrônico'
    },
    {
        id: 2,
        nome: 'Smartphone',
        preco: 1500,
        categoria: 'eletrônico'
    },
    {
        id: 3,
        nome: 'Camisa',
        preco: 80,
        categoria: 'vestuario'
    },
    {
        id: 4,
        nome: 'Calcão',
        preco: 50,
        categoria: 'vestuario'
    },
    {
        id: 5,
        nome: 'Teclado',
        preco: 100,
        categoria: 'eletrônico'
    },
    {
        id: 6,
        nome: 'Mouse',
        preco: 50,
        categoria: 'eletrônico'
    },
    {
        id: 7,
        nome: 'cadeira',
        preco: 800,
        categoria: 'mobilia'
    },
    {
        id: 8,
        nome: 'mesa',
        preco: 300,
        categoria: 'mobilia'
    },
    {
        id: 9,
        nome: 'cama',
        preco: 500,
        categoria: 'mobilia'
    },
    {
        id: 10,
        nome: 'estante',
        preco: 1200,
        categoria: 'mobilia'
    },
    {
        id: 11,
        nome: 'abajur',
        preco: 300,
        categoria: 'mobilia'
    }
];
 a) Usando o método `filter`, retorne apenas os produtos que pertencem à categoria `"eletrônicos"`.  
 b) Usando o método `map`, crie um novo array que contenha apenas os nomes dos produtos em maiúsculo. 
 c) Usando o método `reduce`, calcule o preço total de todos os produtos do array. 
 d) Usando o método `forEach`, percorra o array produtos e adicione uma propriedade `emEstoque` com o valor `true` em todos os produtos.
 e) Crie uma função que receba um array de objetos `produtos` e um `id`. A função deve retornar o objeto do produto correspondente.


DESAFIO:
    a)Usando `reduce`, crie um objeto que agrupe os produtos por categoria. O resultado deve ser algo como:  
    ```js
    {
      eletronicos: [ {...}, {...} ],
      vestuario: [ {...}, {...} ]
      mobilia: [ {...}, {...} ]
    }
    ```

    b) Calcule o valor total de produtos por categoria.
    c) Calcule a média do valor de produtos por categoria.
    d) Calcule o valor total de produtos por categoria.

*/