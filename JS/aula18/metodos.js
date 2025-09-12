let letras = ['a', 'b', 'c'] // letras.length = 3
let numeros = [1, 2, 3] // numeros.length = 3

console.log(letras[0])//primeiro elemento do array
console.log(numeros[2]) //terceiro ( e ultimo) elemento do array

//metodo para inserir no final do array
letras.push('d')
console.log(letras)
//metodo para inserir no inicio do array
letras.unshift('inicio')
console.log(letras)

console.log(numeros)
let removido = numeros.pop() //remove o ultimo elemento do array
console.log(removido)
console.log(numeros)

let removido2 = numeros.shift() //remove o primeiro elemento do array
console.log(removido2)
console.log(numeros)

