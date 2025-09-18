//definição de uma funcao
let y = 100
function nomeFuncao(){
    let x = 10
    console.log(x)
    console.log('A funçao nomeFuncao foi executada')
}

function Dobrar(){
    let dobro = y * 2
    console.log(dobro)
}

function Dobrar2(){
    y = y * 2
    console.log(y)
}

function saudacao(nome){
    console.log(`Ola, ${nome}!`)
}

function somar(n1, n2=0){
    let soma = n1 + n2
    console.log(soma)
}

// somar(20, 400)
// somar(20)

//invocação de uma funcao
// nomeFuncao()
// nomeFuncao()
// Dobrar()
// Dobrar2()
// console.log(y)
// Dobrar2()


function saudarFortaleza(nome){
    return(`${nome}, eiiii mah!`)
}

function saudarRecife(nome){
    return(`${nome}, eiiii booooy!`)
}
//função que espera um callback
function saudarLugar(nome, funcao){
    let frase = funcao(nome)
    console.log(frase)
}


saudarLugar(`João`, saudarRecife)