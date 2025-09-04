//crie uma calculadora com as 4 operações
let n1 = Number(prompt('Digite o primeiro número'))
let n2 = Number(prompt('Digite o segundo número'))

let operador = prompt('Digite o operador desejado: \n + para soma \n - para subtração \n * para multiplicação \n  para divisão')
//peça ao usuário 2 números e um operador. 
// + para soma
// - para subtração
// * para multiplicação
// / para divisão
let resultado
switch (operador) {
    case '+':
        resultado = n1 + n2
        console.log(n1 + ' ' + operador + ' ' + n2 + ' = ' + resultado)
        console.log(`${n1} ${operador} ${n2} = ${resultado}`)
        break;
    case '-':
        resultado = n1 - n2
        console.log(n1 + ' ' + operador + ' ' + n2 + ' = ' + resultado)
        console.log(`${n1} ${operador} ${n2} = ${resultado}`)
    break;
    case '/':
        if(n2 == 0){
            alert('Impossível dividir por zero')
        }
        else{
            resultado = n1 / n2
            console.log(n1 + ' ' + operador + ' ' + n2 + ' = ' + resultado)
            console.log(`${n1} ${operador} ${n2} = ${resultado}`)
        }
    
    break;
    case '*':
        resultado = n1 * n2
        console.log(n1 + ' ' + operador + ' ' + n2 + ' = ' + resultado)
        console.log(`${n1} ${operador} ${n2} = ${resultado}`)
    break;
    default:
        console.log('Operador inválido')
        break;
}

//especialmente no caso da divisão, teste se o segundo número é zero e exiba um alerta dizendo que ele é impossível dividir por zero, caso isso aconteça. Caso contrário faça a operação normalmente

//todas as operações serão mostradas no console no segunte formato:
// n1 operador n2 = resultado