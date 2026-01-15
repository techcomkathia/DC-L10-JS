//a classe contaBancária terá atributos públicos e atributos privados, métodos públicos e métodos privados
//o encapsulamento serve para proteger os dados sensíveis do objeto, evitando acessos indevidos ou modificações não autorizadas
//todo atributo ou método que for privado, não poderá ser acessado fora da classe. Ou seja, só poderão ser acessados por outros métodos da própria classe

class ContaBancaria {
    //todos os atributos privados começam com # antes do método construtor

    #saldo
    #divida


    //metodo construtor
    constructor(titular, numeroConta, saldo=0, divida=0){
        this.titular = titular //atributo público
        this.numeroConta = numeroConta //atributo público
        this.#saldo = saldo //atributo privado
        this.#divida = divida //atributo privado
    }

    //método público para consultar o saldo
    consultarSaldo(){
        //consultar saldo é um método público que pode acessar o atributo privado #saldo
        console.log(`O saldo da conta é: R$ ${this.#saldo.toFixed(2)}`)
    }

    //método privado para alterar o saldo é iniciado com #
    #mudarSaldo(valor){
        //método privado para alterar o saldo
        this.#saldo += valor
    }

    depositar(valor){
        //método público para depositar dinheiro na conta
        //ele tem acesso ao atributo privado #saldo e ao método privado #mudarSaldo
        //executa o método privado para alterar o saldo para mais o valor do depósito
        this.#mudarSaldo(valor)
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`)
        this.consultarSaldo()
    }

 sacar(valor){
        //método público para sacar dinheiro da conta
        //ele tem acesso ao atributo privado #saldo e ao método privado #mudarSaldo
        if(valor > this.#saldo){
            console.log('Saldo insuficiente para saque.')
        }
        else{
            //executa o método privado para alterar o saldo para menos o valor do saque
            this.#mudarSaldo(-valor)
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`)
            this.consultarSaldo()
        }
    }

}

const conta1 = new ContaBancaria('João Silva', '12345-6', 1000, 200)

//mostrar no console o atributo saldo - não é possível pois é privado
console.log (conta1)
console.log(conta1.saldo) //undefined - não é possível acessar o atributo privado
conta1.consultarSaldo() //método público para consultar o saldo

//método privado (resulta em um erro do JavaScript, pois a função é interpretada como inexistente)
//conta1.#mudarSaldo(500) //erro - não é possível acessar o método privado

conta1.depositar(500) //método público para depositar dinheiro