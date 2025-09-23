const funcaoSeta = ()=> 10/2
// retorna a operação matemática para ser utilizada OU armazenada em uma variável
let resultado = funcaoSeta()
// console.log(resultado)
// console.log(funcaoSeta())

//essa função espera receber um callback
function mostrarNoConsole(funcao, n1, n2){
    console.log('executando uma função de callback')
    console.log(funcao(n1, n2))
}

// mostrarNoConsole(funcaoSeta)

//arrow function de uma única linha tem um retorno intuitivo / implicito
const somar = (n1, n2) => n1 + n2

//arrow function com mais de uma linha não tem retorno implicito, é necessário colocar o return
const subtrair = (n1, n2) => {
    console.log('sou a função subtrair e tenho mais de uma linha')
    return n1 - n2
}

// mostrarNoConsole(somar, 20,30)
mostrarNoConsole(subtrair, 20,30)
let resultado2 = subtrair(20,30)
console.log(resultado2)


const frasesDeElevador={
    dia: ()=> 'Bom dia',
    tarde: () => 'Boa tarde',
    noite: () => 'Boa noite',
    quente: ()=> 'Hoje está muito quente né?',
    autor: 'João'
}

mostrarNoConsole((n1,n2)=> n1* n2, 10,20)
mostrarNoConsole(frasesDeElevador.quente)

//crie u