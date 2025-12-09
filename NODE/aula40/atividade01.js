// você recebe um objeto com vários atributos. 
// Funcionários : um array com objetos que representam os funcionários (nome, cargo, salario, email, departamento).
// Departamentos : um array com objetos que representam os departamentos (nome, localização, gerente, telefone).
// unidades : um array com objetos que representam as unidades (nome, localização, telefone, CNPJ).

//Crie uma api (usando o protocolo HTTP) que tenha 4 rotas :
// rota principal (/) que retorne a mensagem : "Bem vindo a API do Magazine Cleitinho"
// rota para mostrar todos os funcionários (/funcionarios) que retorne um objeto com 2 chaves : qtdFuncionarios e funcionarios
// rota para mostrar todos os departamentos (/departamentos) que retorne um objeto com 2 chaves : qtdDepartamentos e departamentos
// rota para mostrar todas as unidades (/unidades) que retorne um objeto com 2 chaves : qtdUnidades e unidades

const MagazineCleitinho = {
    funcionarios: [
        {
            nome: "Cleitinho",
            cargo: "Gato",
            salario: 20000,
            email: "Cleitinho@Cleitinho",
            departamento: "Diretoria"
        },
        {
            nome: "Cleitinho 2",
            cargo: "Estagiário",
            salario: 2000,
            email: "Cleitinho@Cleitinho",
            departamento: "TI"
        },
        {
            nome: "Cleitinho 3",
            cargo: "Atentendente",
            salario: 2000,
            email: "Cleitinho@Cleitinho",
            departamento: "Vendas"
        }
    ],
    departamentos: [
        {
            nome: "Diretoria",
            localizacao: "Casa",
            gerente: "Cleitinho",
            telefone: "1234-1234"
        },
        {
            nome: "TI",
            localizacao: "Casa",
            gerente: "Cleitinho",
            telefone: "1234-1234"
        },
        {
            nome: "Vendas",
            localizacao: "Casa",
            gerente: "Cleitinho",
            telefone: "1234-1234"
        }
    ],
    unidades: [
        {
            nome: "Unidade 1",
            localizacao: "Casa",
            telefone: "1234-1234",
            CNPJ: "123456789"
        },
        {
            nome: "Unidade 2",
            localizacao: "Casa",
            telefone: "1234-1234",
            CNPJ: "123456789"
        },
        {
            nome: "Unidade 3",
            localizacao: "Casa",
            telefone: "1234-1234",
            CNPJ: "123456789"
        }
    ]
}


const http = require('http')
const meuServidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    if(req.url === '/'){
        res.end(JSON.stringify({mensagem: "Bem vindo a API do Magazine Cleitinho"}))
    } else if(req.url === '/funcionarios'){
        res.end(JSON.stringify({
            qtdFuncionarios: MagazineCleitinho.funcionarios.length,
            funcionarios: MagazineCleitinho.funcionarios
        }))
    } else if(req.url === '/departamentos'){
        res.end(JSON.stringify({
            qtdDepartamentos: MagazineCleitinho.departamentos.length,
            departamentos: MagazineCleitinho.departamentos
        }))
    }
    else if(req.url === '/unidades'){
        res.end(JSON.stringify({
            qtdUnidades: MagazineCleitinho.unidades.length,
            unidades: MagazineCleitinho.unidades
        }))
    } else {
        res.end(JSON.stringify({mensagem: "Rota não encontrada"}))
    }
})
meuServidor.listen(3000)