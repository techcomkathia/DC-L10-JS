
//atividade 
//para o array de pessoas abaixo, com o método filter construa um novo array apenas os que tiverem  18 anos ou mais

let pessoas=[
    {   nome: 'Ana',
        idade:15
    },
    {   nome: 'Pedro',
        idade:18
    },
    {   nome: 'maria',
        idade:42
    },
    {   nome: 'Henrique',
        idade:12
    },
    {   nome: 'Jorge',
        idade:23
    }
]

let pessoasMaiores = pessoaa.filter((elemento)=> elemento.idade >= 18)
console.log(pessoasMaiores)