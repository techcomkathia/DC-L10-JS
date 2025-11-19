# Aula de Revisão

- Objetivos: Revisar os conteúdos anteriores
- UseState : Controle de estado
- UseEffect : Aplicação de efeito colateral ( no consumo de API)
- CreateContext e  UseContext : Criação e uso de contexto pela aplicação
- React-router-DOM : Navegação entre muitas páginas no contexto do single page application 
- UseParams : Permite captar parâmetros da rota

## Qual a estrutura do projeto:

Página Home : Mostrará todos os produtos em cards ( React Bootstrap) dos produtos da Fake Store API
Página Detalhe de produto: Usará o Hook useParams para captar o parâmetro id da rota e exibir apenas o produto com o id na URL
Página Carrinho: mostrará todos os produtos adicionados ao carrinho, podendo retirar produtos específicos. Mostrará o total a ser pago na compra. 

## Como iniciar o projeto:

- Instalação das depedências : 
    - React-router-dom
    - Bootstrap 
    - React-bootstrap

```
npm install react-router-dom bootstrap react-bootstrap 
```

- Estruturação das pastas
    - Componentes:
        -- BarraNavegacao.jsx
        -- CardProduto
    - Paginas
        -- Home.jsx
        -- DetalheProduto.jsx
        -- Carrinho.jsx
        -- PaginaNaoEncontrada.jsx
    - Contextos
        -- CarrinhoContext.jsx
        -- CarrinhoProvider.jsx
        -- ProdutosContext.jsx
        -- ProdutosProvider.jsx
    - Rotas
        --Rotas.jsx

- Criação dos Componentes: BarraNavegacao e CardProduto.
    -CardProduto terá as seguintes props: imagem, nomeProduto e preco. Usará como base o componente card do react-bootstrap

- Criação dos Contextos: Criar o contexto e o provedor de contexto. 
    - Use o hook createContext
    - Importe o contexto para o arquivo do provider
    - Use o hook useState para criar uma variável de estado controlado para o provider. 

    let listaprodutos = [
        {
            id: 1,
            nome: 'coisa1',
            preco: 10.00,
            imagem: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            
        }
        ,
        {
            id: 2,
            nome: 'coisa2',
            preco: 10.00,
            imagem: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            
        }
        ,
        {
            id: 3,
            nome: 'coisa3',
            preco: 10.00,
            imagem: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            
        }
    ]

let carrinho = []


- Criar as páginas da aplicação - No primeiro momento, apenas com os nomes das páginas

- Criar as rotas: Route e Routes

- Prover contexto a aplicação - Produtos > Carrinho > Rotas

- Consumir o contexto nas páginas da aplicação:  useContext e o arquivo do contexto
    - Listar todos os produtos na página Home. Use o componente CardProduto em uma renderização por lista

- Adico
