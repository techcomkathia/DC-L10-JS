// + para soma (numeros) e concatenação (strings)
// - para subtração (numeros)
// * para multiplicação (numeros)
// / para divisão (numeros)
let numero = 10
let numTexto = '10'
let palavra = 'coisa'

console.log(numTexto + numTexto) //concatenação --> 1010
console.log(numTexto + palavra) //concatenação --> 10coisa
console.log(numero + 2) // operador aritmético soma --> 12

//transformação de string para número
let numeroString = '50'
//converter para o tipo number
let numeroConvertido = Number(numeroString)
let numeroUsuario = Number(prompt('Digite um número'))

//console.log(Number('Cleitinho')) // palavras que não são numeros são convertidas para NaN (not a number)
// % para resto da divisão (numeros)
let resto = 10 % 3
// ** para potência (numeros)
let potencia = 5**5

let num = 55.33666
console.log(num.toFixed(2)) //limita a quantidade de casas decimais e faz o arredondamento se necessário
//55.34