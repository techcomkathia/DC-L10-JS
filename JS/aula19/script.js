//como estruturar um objeto

let animal ={
    chave : 'valor armazenado',
    nome : 'cleitinho',
    cor: 'laranja'
}

//acessando as propriedades
console.log(animal.cor)
console.log(animal.nome)
console.log(animal)

//adicionar uma nova propriedade
animal.idade = 13
console.log(animal)

//atualizar valor de uma propriedade existente
animal.nome = 'Cleitinho Lima'
console.log(animal)

animal.novaPropriedade = 'novo valor'
console.log(animal)

//exclusao de propriedades
delete animal.novaPropriedade

console.log(animal)