let array = [ 'item1', 'item2','item3','item4']

//remoção no meio do array ( elementos que não são nem o primeiro nem o último)
console.log(array)
array.splice(1,1) //primeiro parâmetro indica indice do elemento, o segundo indica quantos elementos a partir desse indice deseja remover
console.log(array)

//inserção no meio do array
array.splice(1,0, 'novo item') //primeiro parâmetro indica qual elemento deseja inserir, o segundo indica quantos elementos deseja remover e o terceiro indica qual elemento deseja inserir
console.log(array)

let frutas = [ 'banana', 'maca', 'banana','banana', 'pera', 'uva', 'melancia','banana']
console.log(frutas)
//verificar se existe um determinado elemento no array
console.log(frutas.includes('pera')) //true
console.log(frutas.includes('laranja')) //false

//trocar um elemento por outro:
//saber qual é o indice do elemento que deseja trocar
console.log(frutas.indexOf('pera')) //2

//trocar o elemento
frutas[2] = 'jabuticaba'
console.log(frutas)
console.log(frutas.indexOf('banana'))

//verificar a última posição de um determinado elemento
console.log(frutas.lastIndexOf('banana'))

//verificar a repetição de um determinado elemento
let qtdRepeticao = 0

for(let i=0; i<frutas.length; i++){
    if(frutas[i] == 'banana'){
        qtdRepeticao++
    }
}
console.log(qtdRepeticao)

let matriz = [
    [10,'ana'],
    [8,'bruno'],
    [10,'Pedro']
]

console.log(matriz)
//mostrar o array do bruno
console.log(matriz[1])
//mostrar a nota da ana
console.log(matriz[0][0])
//mostrar o nome do pedro
console.log(matriz[2][1])