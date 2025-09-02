//utilize as condicionais para testar se um número é par ou impar
//peça esse número ao usuário
// % restou da divisão INTEIRA 21 módulo da divisão por 2 = 1
// / divisão completa  21 dividido por 2 = 10.5

let numUser = Number(prompt('Digite um número'))
if(numUser % 2 == 0){
    console.log('O número digitado foi ' + numUser + ' e ele é par')
}
if(numUser % 2 == 1){
    console.log('O número digitado foi ' + numUser + ' e ele é impar')
}
else{
    alert('Você digitou uma palavra e não um número')
}

// utilize as condicionais para tratar o erro da palavra digitada pelo usuário.
//caso o texto digitado pelo usuário não seja par ou impar deve ser exibido um alerta dizendo que ele digitou uma palavra e não um número