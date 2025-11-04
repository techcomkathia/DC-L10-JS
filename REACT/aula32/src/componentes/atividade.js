//Atividade 1 :
// crie um contexto, crie um coponente que prove o contexto aos children e o contexto provido será um array de produtos e uma função que altera o estado do array de produtos.
const produtos = [
    {id: 1, nome: 'produto 1', preco: 10, img:'https://picsum.photos/200/300'},
    {id: 2, nome: 'produto 2', preco: 20, img:'https://picsum.photos/200/300'},
    {id: 3, nome: 'produto 3', preco: 30, img:'https://picsum.photos/200/300'},
]
//Dica: passo 1, 2 e 3

//Atividade 2:
//crie um componente que usa o contexto para renderizar vários cards de produtos. Use o componente Card do react-bootstrap
//https://react-bootstrap.netlify.app/docs/components/cards
// para o container que será usado para agrupar os cards use classes do bootstrap para colocar uma borda um espaçamento interno e use o display flex para deixar os cards um ao lado do outro
//https://getbootstrap.com/docs/5.0/getting-started/introduction/
//Essa atividade explora: uso do contexto (hook useContext), renderização com map e o uso de classes do bootstrap e componentes do react-bootstrap

//Atividade 3:
//crie um componente que utilize um formulário para adicionar produtos ao array de produtos
//https://react-bootstrap.netlify.app/docs/forms/overview
//para o formulario, use o preventDefault para evitar o envio do formulário e o reset para limpar os inputs
//você deverá usar o hook useState para armazenar o nome e o preco do produto a imagem e o objetoProduto e o hook useContext para trazer o array de produtos e a funcao para alterar o array de produtos
//Essa atividade trabalha com : controle de estado, eventos (onChange, onClick e onSubmit), uso de classes do bootstrap e componentes do react-bootstrap, o uso do preventDefault e o reset do formulário e o consumo de um contexto.


//Desafio. Em cada card de produto crie um botão que permita excluir o produto do array de produtos (Componente Atividade 2)