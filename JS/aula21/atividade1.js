//crie uma arrow function que receba um objeto como parâmetro e retorne o array de chaves desse objeto
//o método Object.keys() retorna um array com as chaves de um objeto

//utilize a função criada acima para exibir as chaves do objeto abaixo no console, utilizando o console.log()

let pessoa = {
    nome: 'Kathia',
    idade: 30,
    altura: 1.50
}

// [ 'nome', 'idade', 'altura' ] -> será mostrado no console

let retornarChaves = (x) => {
    console.log('Objeto passado:', x)
    return Object.keys(x)
}

console.log(retornarChaves(pessoa))