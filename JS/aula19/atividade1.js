//1 crie objeto chamado conta bancária
//esse objeto terá as seguintes propriedades:
/* titular
    numero
    agencia
    saldo
    divida ( armazena um booleano true ou false)
    valorDivida 
    limite de crédito
*/

let contaBancaria = {
    titular: 'Cleitinho',
    agencia: '1000',
    saldo: 200,
    divida: false,
    valorDivida: 0,
    limiteCredito: 1000
}

console.log(contaBancaria)

// 2 atualize as propriedades de acordo com o que é pedido
// some ao valor do saldo 100 dinheiros
contaBancaria.saldo += 100
console.log(contaBancaria)

//contaBancaria.saldo = contaBancaria.saldo  + 100
// troque o número da agência para 0001
contaBancaria.agencia = '0001'
console.log(contaBancaria)


