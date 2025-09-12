let x = 1
// console.log(x)

let meuArray= [1, 2, 'b', true, 2.5 ]
// console.log(meuArray)
// console.log(meuArray[0])
// console.log(meuArray[2])

let produto = ['nome', 'categoria', 500.00, 10]
let produto2 = ['nome2', 'categoria2', 100.00, 10]
let produto3 = ['nome3', 'categoria3', 500.00, 10]
let carrinho = [produto, produto2, produto3]
let endereco = ['rua', 'cep', 40, 'uf', 'estado', 'cidade', 'bairro', 'país']

// console.log(endereco[0])

//atualização de um elemento do array
//atualiza o nome do produto para cadeira
console.log(produto)
produto[0] = 'cadeira'
console.log(produto)
// produto= 'cadeira'
// console.log(produto)
produto[4]= 'criado através de atribuição'
console.log(produto)
produto[10]= 'novo elemento'
console.log(produto)

//utilizar a propriedade length para criar o próximo elemento no array
produto[produto.length] = 'novo elemento'
console.log(produto)

produto[produto.length] = 'um outro novo elemento'
console.log(produto)

produto[0]= 'mesa'  
console.log(produto)