//importação de uma classe 
const Animal = require('./abstracao')

//criando um objeto da classe Animal
const gato = new Animal('Cleitinho', 'felino', 6, 13, 'laranja')
const gato2 = new Animal('Mingau', 'felino', 4, 2, 'branco e preto')

const pessoa = new Animal('Ana', 'humano', 65, 30, 'parda')

console.log(gato,gato2,pessoa)
gato.comer()
gato2.comer()
pessoa.comer()
//podemos ter muitos objetos de uma mesma classe
//os valores para os  atributos poderão ser diferentes para cada objeto, mas a estrutura será a mesma com a quantidade de atributos e métodos

let listaDeAnimais = [ gato, gato2, pessoa ]

//Vamos executar o mesmo método para todos os objetos da lista
//o forEach executa uma função para cada item da lista e não retorna nada
listaDeAnimais.forEach((itemLista)=>{
    itemLista.dormir()
})

