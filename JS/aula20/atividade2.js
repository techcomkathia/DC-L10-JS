//para um array de produtos  crie uma função que cadastre um novo produto nesse array

let listaProdutos =[
    { 
        nomeProd: 'cadeira',
        precoProd: 1200.00,
        qtd: 10,
        estoque: true
    }
] //variavel global

//a função cadastrarProduto deve aceitar 4 valores como parametros: nome, preco, quantidade e disponibilidade
//caso o parametro disponibilidade não seja informado, defina-o como false
//caso o parametro quantidade nao seja informado, defina-o como 0
function cadastrarProduto( nome, preco, quantidade = 0, disponibilidade = false){
    //criar produto com os parâmetros sendo valores para as propriedades
    let novoProduto = {
        nomeProd: nome,
        precoProd: preco,
        qtd: quantidade,
        estoque: disponibilidade
    }
    //adicionar o produto criado na lista de produtos com o método adequado para os arrays
    listaProdutos.push(novoProduto)
}
//métodos para adicionar ao array : push, unshift
//para testar a função cadastre 3 produtos
console.log(listaProdutos)
cadastrarProduto('cadeira', 1200.00, 10, true)
console.log(listaProdutos)
cadastrarProduto('mesa', 1500.00) 
console.log(listaProdutos)