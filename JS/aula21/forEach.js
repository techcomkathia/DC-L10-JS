let numeros = [1,2,3,4]

//mostrar todos os array no console
let retorno = numeros.forEach((elementoArray)=> {
    console.log(elementoArray**2)
})


let alunos = [
    {   nome: 'Ana',
        nota: 10
    },
    {   nome: 'João',
        nota: 8
    },
    {   nome: 'Paulo',
        nota: 6
    },
]

function cadastrarNotas(aluno){
    console.log(aluno.nota)
}

for(let i = 0 ; i < alunos.length; i++){
    cadastrarNotas(alunos[i])
}

alunos.forEach(cadastrarNotas)