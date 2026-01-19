// crie um sistema bancario simples usando herança
//definição da classe mais genérica
//Superclasse: ContaBancaria
/*
numeroConta
titular
saldo

exibirSaldo()
sacar()
*/
class ContaBancaria{

    
    constructor(numeroConta, titular, saldo=0){
        this.numeroConta = numeroConta
        this.titular = titular
        this.saldo = saldo
    }
    exibirSaldo(){
        console.log(`Saldo da conta ${this.numeroConta} do titular ${this.titular}: R$ ${this.saldo.toFixed(2)}`)
    }

    sacar(valor){
        if(valor > this.saldo){
            console.log(`Saldo insuficiente para saque de R$ ${valor.toFixed(2)}.`)
        } else {
            this.saldo -= valor
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`)
        }
    }

}

//Classes filhas: ContaCorrente, ContaPoupanca, contaSalario
/*
ContaCorrente:
limiteChequeEspecial
Depositar()
Transferir()*/

class ContaCorrente extends ContaBancaria{

    constructor(numeroConta, titular, saldo=0, limiteChequeEspecial=0){
        super(numeroConta, titular, saldo)
        this.limiteChequeEspecial = limiteChequeEspecial
    }

    //método específico da subclasse
    depositar(valor){
        this.saldo += valor
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`)
        //exbir o saldo usando o método herdado da superclasse
        this.exibirSaldo()
    }
}


/*
ContaPoupanca:
dataAniversario
renderJuros()
Depositar()
*/
class ContaPoupanca extends ContaBancaria{

    constructor(numeroConta, titular, saldo=0, dataAniversario){
        super(numeroConta, titular, saldo)
        //atributo que só existe na subclasse
        this.dataAniversario = dataAniversario
    }

    //definição dos métodos específicos da subclasse
    renderJuros(taxaJuros){
        const juros = this.saldo * (taxaJuros / 100)
        //icrementa o saldo com os juros calculados
        this.saldo += juros
        console.log(`Juros de R$ ${juros.toFixed(2)} aplicados à conta poupança.`)
        //exibir o saldo usando o método herdado da superclasse
        this.exibirSaldo()
    }
}

/*
ContaSalario:
empresa
*/

class ContaSalario extends ContaBancaria{

    constructor(numeroConta, titular, saldo=0, empresa){
        super(numeroConta, titular, saldo)
        this.empresa = empresa
    }
}

const contaCorrente1 = new ContaCorrente("12345-6", "João Silva", 1000, 500)
const contaPoupanca1 = new ContaPoupanca("98765-4", "Maria Souza", 2000, "15/08")
const contaSalario1 = new ContaSalario("54321-9", "Carlos Oliveira", 30000, "Google")

const bancoDoCleitinho = [contaCorrente1, contaPoupanca1, contaSalario1]
//objetos de classes diferentes armazenados em um array
//todos esses objetos são instaciados de classes filhas da superclasse ContaBancaria, logo possuem em comum todos os atributos e métodos da superclasse

//para todas as contas execute o método exibirSaldo()
bancoDoCleitinho.forEach(conta => {
    conta.exibirSaldo()
})

//o banco do cleitinho sofreu um ataque hacker e todos os clientes tiveram 2 reais roubados
bancoDoCleitinho.forEach(conta => {
    conta.sacar(2)
})

//as contas salario não podem fazer depósitos (pois não possuem esse método especifico)
contaCorrente1.depositar(500)
contaSalario1.depositar(500) //vai gerar um erro pois esse método não existe na classe ContaSalario