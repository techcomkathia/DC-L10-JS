
class ContaBancaria{
    //terá dois atributos privados ( só podem ser acessados dentro da classe ou por métodos da classe)
    #saldo
    #titular

    constructor(numeroConta, titular, saldo=0){
        this.numeroConta = numeroConta
        this.#titular = titular
        this.#saldo = saldo
    }

    //exibir informacoes da conta bancaria acessa os atributos privados
    //método público que acessa o atributo privado é chamado de getter
    exibirInformacoes(){
        console.log(`Saldo da conta ${this.numeroConta} do titular ${this.#titular}: R$ ${this.#saldo.toFixed(2)}`)
    }

    //comumente criamos um getter e um setter para cada atributo privado
    //getter para o saldo: o método recebe o nome do atributo privado sem o #
    getSaldo(){
        return this.#saldo
        //normalmente retorna-se o valor do atributo privado
    }

    //setter para o saldo: o método recebe o nome do atributo privado sem o #
    setSaldo(novoSaldo){
        this.#saldo = novoSaldo
        //normalmente atribui-se um valor ao atributo privado
    }

    //o método sacar não precisa utilizar get ou set, pois é um método da própria classe, tendo acesso direto ao atributo privado        
    sacar(valor){
        if(valor > this.#saldo){
            console.log(`Saldo insuficiente para saque de R$ ${valor.toFixed(2)}.`)
        } else {
            this.#saldo -= valor
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`)
        }
    }

}

class ContaCorrente extends ContaBancaria{
    #saldo
    #titular
    constructor(numeroConta, titular, saldo=0, limiteChequeEspecial=0){
        super(numeroConta, titular, saldo)
        this.limiteChequeEspecial = limiteChequeEspecial
    }

   
    depositar(valor){
        this.#saldo += valor
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`)

        this.exibirInformacoes()
    }


    //sobrescrevendo o método sacar da superclasse (Polimorfismo)
    //Funcionamento adaptado para considerar o limite do cheque especial (informação específica da ContaCorrente)
    exibirInformacoes(){
        console.log(`Conta Corrente: ${this.numeroConta}, Titular: ${this.#titular}, Saldo: R$ ${this.#saldo.toFixed(2)}, Limite Cheque Especial: R$ ${this.limiteChequeEspecial.toFixed(2)}`)
    }

    //o método sacar foi adaptado para considerar o limite do cheque especial, sobrescrevendo o método da superclasse
    sacar(valor){
        if(valor > (this.#saldo + this.limiteChequeEspecial)){
            console.log(`Saldo insuficiente para saque de R$ ${valor.toFixed(2)}.`)
        } else if(valor < this.#saldo){ 
           //se o saldo for suficiente, realiza o saque normalmente
           this.#saldo -= valor
           console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`)
        }
        else {
            //se o saldo não for suficiente, utiliza o limite do cheque especial
            const valorDoChequeEspecial = valor - this.#saldo
            this.#saldo = 0
            this.limiteChequeEspecial -= valorDoChequeEspecial
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso utilizando o cheque especial.`)
        }

    }
}


class ContaPoupanca extends ContaBancaria{
    #saldo
    #titular
    constructor(numeroConta, titular, saldo=0, dataAniversario){
        super(numeroConta, titular, saldo)
        //atributo que só existe na subclasse
        this.dataAniversario = dataAniversario
    }

    renderJuros(taxaJuros){
        const juros = this.#saldo * (taxaJuros / 100)
        this.saldo += juros
        console.log(`Juros de R$ ${juros.toFixed(2)} aplicados à conta poupança.`)
        this.exibirSaldo()
    }

    //sobrescrevendo o método exibirInformacoes da superclasse (Polimorfismo)
    exibirInformacoes(){
        console.log(`Conta Poupança: ${this.numeroConta}, Titular: ${this.#titular}, Saldo: R$ ${this.#saldo.toFixed(2)}, Data Aniversário: ${this.dataAniversario}`)
    }
}


class ContaSalario extends ContaBancaria{
    #saldo
    #titular
    constructor(numeroConta, titular, saldo=0, empresa){
        super(numeroConta, titular, saldo)
        this.empresa = empresa
    }
    //sobrescrevendo o método exibirInformacoes da superclasse (Polimorfismo)
    exibirInformacoes(){
        console.log(`Conta Salário: ${this.numeroConta}, Titular: ${this.#titular}, Saldo: R$ ${this.#saldo.toFixed(2)}, Empresa: ${this.empresa}`)
    }
}

const contaCorrente1 = new ContaCorrente("12345-6", "João Silva", 1000, 500)
const contaPoupanca1 = new ContaPoupanca("98765-4", "Maria Souza", 2000, "15/08")
const contaSalario1 = new ContaSalario("54321-9", "Carlos Oliveira", 30000, "Google")

const bancoDoCleitinho = [contaCorrente1, contaPoupanca1, contaSalario1]

//exibir as informações de todas as contas no bancoDoCleitinho
bancoDoCleitinho.forEach(conta => {
    conta.exibirInformacoes() //chama o método sobrescrito em cada subclasse
    //caso não encontre o método na subclasse, ele chamará o método da superclasse(o mais genérico)
})


