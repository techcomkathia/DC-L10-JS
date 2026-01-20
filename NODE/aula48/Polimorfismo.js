/*
A herança permite que uma classe filha herde atributos e métodos de uma classe pai (superclasse). O polimorfismo permite que classes filhas implementem ou sobrescrevam métodos da superclasse, adaptando-os às suas necessidades específicas.

*/

//definição da classe mais genérica
class Veiculo{
    constructor(marca, ano){
        this.marca = marca
        this.ano = ano
    }

    //método genérico
    exibirDetalhes(){
        console.log(`Veículo: ${this.marca}, Ano: ${this.ano}`)
    }

    ligar(){
        console.log("O veículo está ligado.")
    }

    desligar(){
        console.log("O veículo foi desligado.")
    }   
}

//definição da classe mais específica
class Carro extends Veiculo{
    constructor(marca, ano, modelo, cor, qtdPortas){
        super(marca, ano)
        this.modelo = modelo
        this.cor = cor
        this.qtdPortas = qtdPortas
    }

    //sobrescrevendo o método exibirDetalhes da superclasse
    exibirDetalhes(){
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Portas: ${this.qtdPortas}`)
    }

}

//criando objetos das classes
const veiculo1 = new Veiculo("Toyota", 2020)
veiculo1.exibirDetalhes()
veiculo1.ligar()
veiculo1.desligar()

const carro1 = new Carro("Honda", 2021, "Civic", "Prata", 4)
carro1.exibirDetalhes() //método sobrescrito
carro1.ligar() //método herdado da superclasse
carro1.desligar() //método herdado da superclasse

