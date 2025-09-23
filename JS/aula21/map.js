let numeros = [1,2,3,4]

let numerosDobrados = numeros.map((elementoArray)=> {
    console.log(elementoArray)
    return elementoArray*2
})

// console.log(numeros)
// console.log(numerosDobrados)

let funcionarios = [
    {   nome: 'Ana',
        cargo: 'analista'
    },
    {   nome: 'João',
        cargo: 'Gerente'
    },
    {   nome: 'Paulo',
        cargo: 'estagiario'
    },
]
//usar o método map para criar um novo array com email e senha para todos os usuários
let funcionariosEmail = funcionarios.map(({...objeto})=> {
    objeto.email = `${objeto.nome}@empresa.com`
    objeto.senha = `123.mudar`
    return objeto
})

funcionarios = [ 'ana', 'joão', 'paulo']
emails = funcionarios.map((nome)=> `${nome}@email.com`)