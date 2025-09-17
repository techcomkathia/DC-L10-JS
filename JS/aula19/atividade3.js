// para o produto a seguir faça o que se pede

let produto = {
    nome: 'cadeira',
    categoria: 'moveis',
    preco: 1200.00,
    quantidade: 10,
    //precoAtacado: 800,
    disponibilidade: true
}

//verifique se existe a propriedade precoAtacado no produto
//caso não exista, adicione a propriedade precoAtacado com o valor de 15% de desconto

//exiba o nome de todas as PROPRIEDADES do produto no console

//exiba com um laço for o nome de todas as propriedades e seus respectivos valores no console no seguinte formato:
//nomePropriedade : valorPropriedade

let arrayPropriedades = Object.keys(produto)

console.log(arrayPropriedades)

if(arrayPropriedades.includes('precoAtacado') == false){
    produto.precoAtacado = produto.preco * 0.85

}



console.log(produto)

console.log("-------------------------------------------------------------")

for ( c in produto){
    console.log(c, produto[c] )
}