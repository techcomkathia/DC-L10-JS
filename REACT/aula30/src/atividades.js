//CONFIGURAÇÃO DO PROJETO

//Faça a instalação do react-bootrstrap e o bootrstrap
/*npm install react-bootstrap bootstrap */
//faça a importação do bootstrap no App.jsx
/* import 'bootstrap/dist/css/bootstrap.min.css' */


//ATIVIDADE 1
//Crie um componente com o carrousel do react-bootstrap
//https://react-bootstrap.netlify.app/docs/components/carousel
//Esse componente será chamado Promocoes. Deverá ser passado como props um array de imagens e todas elas deverão ser mostradas no carrousel.
//você poderá fazer manualmente todas as imagens ou usar uma renderação com map.


//ATIVIDADE 2
//Crie 2 componentes :
//CardProduto que recebe props ( titulo, descricao, preco)
//CadastroProduto que será um formulário que terá 3 campos de input: titulo, descricao e preco
//O componente CardProduto deverá ser usado para renderizar o produto que acabou de ser cadastrado pelo formulário.

//DICA: use o useState para o cadastro do produto: 4 variáveis de estado controlado: titulo, descricao , preco e produto.
//O produto deverá ser um objeto com as seguintes propriedades: titulo, descricao e preco.
//todas as vezes que for clicado no botão de cadastro, a variável de estado controlado produto deverá ser atualizada com o produto cadastrado ocasionando uma nova renderização do componente CardProduto
//os eventos para os inputs : onChange
//o envento para o formulario: onSubmit
//para o formulario, use o preventDefault para evitar o envio do formulário e o reset para limpar os inputs
//Objetivos: trabalho com formulários e renderização condicional componentes.


//Crie um formulário que permita adiconar atividades a uma lista. Cada atividade poderá ser classificada como urgente ou normal. Atividades normais serão renderizadas com cor azul e atividades urgentes com cor vermelha.
//Ao lado de cada texto de atividade deverá haver um botão para remover a atividade da lista. Utilize o splice para remover uma atividade da lista. Lembre-se de atualizar o state.
//use as classes do bootstrap para renderizar as atividades com as cores desejadas.

/*[
{texto: 'revisar js', urgente: false},
{texto: 'revisar html', urgente: true},
]*/

