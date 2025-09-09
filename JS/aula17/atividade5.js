/*Uma loja tem uma política de descontos de acordo com o valor da compra do cliente. Os descontos começam acima dos R$500 A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%. Por exemplo: R$500 = 1% || R$600,00 = 2% ... etc... Faça um programa que exiba essa tabela de descontos no seguinte formato:
Valordacompra - porcentagem de desconto - valor final*/

let valorCompra = 500
let valorAdicionalCompra = 100
let porcentagemDescontoInicial = 1
let valorFinal = 500

for(let i = porcentagemDescontoInicial; i<=50; i++){
    valorCompra+= valorAdicionalCompra
    valorFinal = valorCompra * (1 - (i/100))
    console.log(`${valorCompra}   - ${i}%  - ${valorFinal.toFixed(2)}`)
}
