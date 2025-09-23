//para o array de produtos abaixo crie um novo array (usando o método map) com o valor de 10% de desconto.

let produtos = [1200, 1000, 3000, 2100]


let produtosDesconto = produtos.map((preco) => {
    let desconto = preco * 0.10
    let precoFinal = preco - desconto
    return precoFinal
    })


console.log(produtosDesconto);