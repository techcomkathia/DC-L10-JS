function somar(a, b=0){
    console.log(`Resultado da soma a + b: ${a} + ${b} = ${a + b} `)
    return a + b
}

function subtrair(a, b=0){
    console.log(`Resultado da subtracao a - b: ${a} - ${b} `)
    return a - b
}

//let resultadoSoma = somar(20,20)
//console.log(`O valor da variavel resultadoSoma: ${resultadoSoma}`)

module.exports = {somar, subtrair}