//Escreva um loop while que exiba todos os números pares do intervalo passado pelo usuário no console, por fim mostre a quantidade de números pares e a soma de todos os números do intervalo.
//2 números informados pelo usuário
// mostrar todos os números pares no console
// contabilizar a quantidade de números pares
// somar todos os números do intervalo (impares e pares)


//pedir os 2 números
let num1 = parseInt(prompt('Digite um número positivo, para iniciar o intervalo')) //contador ou iterador (precisa ser atualizado)
let num2 = parseInt(prompt('Digite um outro número positivo para terminar o intervalo'))// apenas a condição de parada. O num1 irá variar até chegar ao valor do num2
let inicioIntervalo = num1

let qtdPares = 0 //acumuladores
let somaTodoNumeros = 0 //acumuladores

while(num1<=num2){
    if(num1%2==0){
        //é par: mostrar no console e contabilizar +1 na qtdPares
        console.log(num1)
        qtdPares++
    }
    //somar impar e os pares
    somaTodoNumeros+= num1
    //atualização do num1
    num1++
}

//exibir as informações dos acumuladores
console.log(`A quantidade de números pares é de ${qtdPares} numeros`)
console.log(`O somatório de todos os números do intervalo de ${inicioIntervalo} a ${num2} é de ${somaTodoNumeros}`)
