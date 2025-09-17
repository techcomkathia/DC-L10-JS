let x = 5
console.log(x)
let copia = x //copia o valor atual de x
console.log(`Esse é o valor da copia de x ${copia}`)
//alterar o valor armazenado em x
x= 'cinco'
console.log(`Esse é o valor  x ${x}`)
console.log(`Esse é o valor da copia de x ${copia}`)

let obj = {
    chave1 : 1,
    chave2 : 2
}

console.log(obj)
let copiaObj = {...obj}
console.log('Esse é o valor da copia de obj', copiaObj)

obj.novaChave = 'novo'
console.log('o objeto foi atualizado',obj)
console.log('Esse é o valor da copia de obj por valor com o spread operator não foi modificado', copiaObj)


//spread operator
console.log(...[1,2,3,4,5])
console.log([1,2,3,4,5])