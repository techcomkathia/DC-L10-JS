/*Faça um programa que receba dez números e usando laços de repetição calcule mostre a quantidade de números entre 30 e 90.*/

let qtdNumeros = 0 //acumulador para os números entre 30 e 90

for(let i = 1; i<=10; i++){
    let num = Number(prompt(`Digite o ${i}º número (apenas dígitos)`))
    console.log(num)
    //verificar se num atende a condição de >30 e <90
    if(num>=30 && num<=90){
        //será contabilizado 1 na qtdNumeros
        qtdNumeros+=1
    }
}

console.log(`Dos 10 números digitados ${qtdNumeros} estão entre 30 e 90`)