class Animal{
    //o método construtor é um método especial que é chamado automaticamente e receberá os parametros fazendo a inicialização do objeto(passagem de valores para os atributos)
    constructor(nome, especie, peso, idade, corPredominante){
        this.nome = nome
        this.especie = especie
        //semelhante a Animal.especie. O this referencia o objeto que está sendo criado
        this.peso = peso
        this.idade = idade
        this.corPredominante = corPredominante
    }

    //os métodos são funções que definem comportamentos do objeto
    //dentro de uma classe, não é necessário usar a palavra reservada function
    comer(){
        console.log(`${this.nome} está comendo.`)
        //toda utilização de valor de um atributo dentro da classe pode ser precedida da palavra reservada this
    }

    dormir(){
        console.log(`${this.nome} está dormindo.`)
    }
}

module.exports = Animal;
