let pessoa ={
    nome: 'Kathia',
    idade: 30,
    altura: 1.50
}
//laço for especial para objetos
//for(let chave in objeto)
for(let x in pessoa){
    console.log(x, pessoa[x])
}

console.log(pessoa)
let propriedads = Object.keys(pessoa) //retorna um array com as propriedades
let valores = Object.values(pessoa) //retorna um array com os valores
console.log(propriedads)
console.log(valores)

console.log(valores.includes('Cleitinho')) //verificar se existe um determinado  valor de propriedade no objeto

console.log(propriedads.includes('altura'))
console.log( 'corPreferida' in pessoa)



